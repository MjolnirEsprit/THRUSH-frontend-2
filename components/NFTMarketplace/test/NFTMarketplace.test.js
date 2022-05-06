const { expect } = require("chai");
const { ethers } = require("hardhat");
const toWei = (num) => ethers.utils.parseEther(num.toString()) // 1ether = 10**18 wei
const fromWei = (num) => ethers.utils.formatEther(num)

//ecrire tests in fct de callback anonyme
describe("NFTMarketplace", function(){
    let deployer, addr1, addr2, nft, marketplace;
    let feePercent = 1;
    let URI = "Sample URI";
    beforeEach(async function(){
        const NFT = await ethers.getContractFactory("NFT");
        const Marketplace = await ethers.getContractFactory("Marketplace");
        //fetch signers of each acc on the hardhat blockcha
        //get signers
        [deployer, addr1, addr2] = await ethers.getSigners();
        nft = await NFT.deploy();
        marketplace = await Marketplace.deploy(feePercent);
    });
    describe("Deployment", function(){
        it("Should track name and symbol of the nft collection", async function(){
            expect(await nft.name()).to.equal("DApp NFT");
            expect(await nft.symbol()).to.equal("DAPP");
        });

        it("Should track feeAccount and feePercent of the nft marketplace", async function(){
            expect(await marketplace.feeAccount()).to.equal(deployer.address);
            expect(await marketplace.feePercent()).to.equal(feePercent);
        });
    });
    //test minting functionality of contracts
    describe("Minting NFTs", function () {
        it("Should track each minted NFT", async function (){
            //addr1 mints an nft en connectant son compte au nft contract
            await nft.connect(addr1).mint(URI);
            expect(await nft.tokenCount()).to.equal(1);
            expect(await nft.balanceOf(addr1.address)).to.equal(1);
            //testing 1st token
            expect(await nft.tokenURI(1)).to.equal(URI);

            //addr2 mints an nft
            await nft.connect(addr2).mint(URI);
            expect(await nft.tokenCount()).to.equal(2);
            expect(await nft.balanceOf(addr2.address)).to.equal(1);
            expect(await nft.tokenURI(2)).to.equal(URI);
        })
    })
    describe("Making marketplace items", function(){
        //beforeEach hook that mints an nft for addr1
        beforeEach(async function () {
            //addr1 mints an nft
            await nft.connect(addr1).mint(URI)
            //addr1 approves marketplace to spend nft
            await nft.connect(addr1).setApprovalForAll(marketplace.address, true)
        })
        it("Should track newly created item, transfer NFT from seller to marketplace and emit offered event", async function(){
            //addr1 offers their nft at a price of 1 ether (token id =1)
            await expect(marketplace.connect(addr1).makeItem(nft.address, 1 , toWei(1)))
                .to.emit(marketplace, "Offered")
                .withArgs(
                    1,
                    nft.address,
                    1,
                    toWei(1),
                    addr1.address
                )
                //owner of NFT should be in the marketplace now
                expect(await nft.ownerOf(1)).to.equal(marketplace.address)
                //Item count on the marketplace should now equal 1
                expect(await marketplace.itemCount()).to.equal(1)
                //Get item from items mapping then check fields to ensure they are correct
                const item = await marketplace.items(1)//itemId 1
                expect(item.itemId).to.equal(1)
                expect(item.nft).to.equal(nft.address)
                expect(item.tokenId).to.equal(1)
                expect(item.price).to.equal(toWei(1))
                expect(item.sold).to.equal(false)
            });
            it("Should fail if price is set to zero", async function(){
                await expect(
                    marketplace.connect(addr1).makeItem(nft.address, 1, 0)
                ).to.be.revertedWith("Price must be greater than zero");
            });
    });
    describe("Purchasing Marketplace items", function (){
        let price = 2;
        let totalPriceInWei;
        beforeEach(async function(){
            //addr1 mints an nft
            await nft.connect(addr1).mint(URI)
            //addr1 approves marketplace to spend nft
            await nft.connect(addr1).setApprovalForAll(marketplace.address, true)
            await marketplace.connect(addr1).makeItem(nft.address, 1 , toWei(price))
        })
        it("Should update item as sold, pay seller, transfer NFT to buyer, charge fees and emit a Bought event", async function(){
            //fetch their balances to ensure they increase by the right amount
            const sellerInitialEthBal = await addr1.getBalance()
            const feeAccountInitialEthBal = await deployer.getBalance();
            //fetch items total price (market fees + item price) for 1st item id
            totalPriceInWei = await marketplace.getTotalPrice(1);
            //addr 2 purchases item (we specified amount of ether with purchase item)
            await expect(marketplace.connect(addr2).purchaseItem(1, {value: totalPriceInWei }))
            //check inside transaction log to ensure the bot event was emitted with respective arguments
            .to.emit(marketplace, "Bought")
            .withArgs(
                1,
                nft.address,
                1,
                toWei(price),
                addr1.address,
                addr2.address
            )
            //Fetch final eth balances
            const sellerFinalEthBal = await addr1.getBalance()
            const feeAccountFinalEthBal = await deployer.getBalance();
            //Seller should receive payment for the price of the sold NFT
            expect(+fromWei(sellerFinalEthBal)).to.equal(+price + + fromWei(sellerInitialEthBal))
            //Calculate fee
            const fee= (feePercent / 100) * price;
            //feeAccount should receive fee
            expect(+fromWei(feeAccountFinalEthBal)).to.equal(+fee + + fromWei(feeAccountInitialEthBal))
            //Buyer should now own the NFT
            expect(await nft.ownerOf(1)).to.equal(addr2.address);
            //Item should be marked as sold
            expect((await marketplace.items(1)).sold).to.equal(true);     
        })
        it("Should fail for invalid item ids, sold items and when not enough ether is paid", async function(){
            //2 bigger than itemCount: 1
            await expect(
                marketplace.connect(addr2).purchaseItem(2, {value : totalPriceInWei})
            ).to.be.revertedWith("item doesn't exist");
            //0 less than 1
            await expect(
                marketplace.connect(addr2).purchaseItem(0, {value : totalPriceInWei})
            ).to.be.revertedWith("item doesn't exist");
            //fails when not enough ether is paid with the transaction
            await expect(
                marketplace.connect(addr2).purchaseItem(1, {value: toWei(price)})
            ).to.be.revertedWith("not enough ether to cover item price and market fee");
            //random user with addr2 purchases item1
            await marketplace.connect(addr2).purchaseItem(1, {value: totalPriceInWei})
            //deployer tries to buy item1 after it's been sold
            await expect(
                marketplace.connect(deployer).purchaseItem(1, {value: totalPriceInWei})
            ).to.be.revertedWith("item already sold!")
           
        })
    })

})
