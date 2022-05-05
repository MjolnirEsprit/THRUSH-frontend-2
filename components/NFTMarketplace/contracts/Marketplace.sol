// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard{
    //State variables:
    address payable public immutable feeAccount; //account that receives fees
    uint public immutable feePercent; //fee percentage on sales
    uint public itemCount;
    struct Item{
        uint itemId;
        IERC721 nft;
        uint tokenId;
        uint price;
        address payable seller;
        bool sold;
    }

    //search for offered events using the nft and seller addresses as filters
    event Offered (
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller
    );

    event Bought (
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller,
        address indexed buyer 
    );

    //store items with storage mapping named items(type of key, type of return value)
    mapping(uint => Item) public items;

    constructor(uint _feePercent){
        //assign the _feePercent value to the state variable feePercent
        feeAccount = payable(msg.sender);//j'ai assigné el feeAcc au deployeur du contract
        feePercent = _feePercent;
    }
    //pass contract of nft
    //user passes adress of nft contract and solidity turns it into instance
    function makeItem(IERC721 _nft, uint _tokenId, uint _price) external nonReentrant{
        //si vraie la fonction execute sinon elle arrete et les changements sont annulés
        //function, evm revert error message
        require(_price >0, "Price must be greater than zero"); 
        itemCount ++;
        //transfer the nft that user wanna list (account tht called the fction, this contract, tokenid)
        _nft.transferFrom(msg.sender, address(this), _tokenId);  

        //initialize new item its key is itemCount, add it to mapping of items
        items[itemCount] = Item(
            itemCount,
            _nft,
            _tokenId,
            _price,
            payable(msg.sender),
            false
        );

        //emit offered events with fetching the address
        emit Offered(
            itemCount,
            address(_nft),
            _tokenId,
            _price,
            msg.sender
        );
    }
    function purchaseItem(uint _itemId) external payable nonReentrant {
        uint _totalPrice = getTotalPrice(_itemId);
        //read from storage mapping not creating an in memory copy of the item
        Item storage item = items[_itemId];
        require(_itemId >0 && _itemId <= itemCount, "item doesn't exist");
        //check if user has enough eths
        require(msg.value >= _totalPrice, "not enough ether to cover item price and market fee");
        //check if item sold or not
        require(!item.sold, "item already sold!");
        //pay seller and feeAccount
        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price); //transferi les frais 
        //update item to sold
        item.sold = true;
        //transfer nft to buyer
        item.nft.transferFrom(address(this), msg.sender, item.tokenId);
        //emit a bought event
        emit Bought(
            _itemId,
            address(item.nft),
            item.tokenId,
            item.price,
            item.seller,
            msg.sender
        );
    
    }

    function getTotalPrice(uint _itemId) view public returns(uint){
        return (items[_itemId].price * (100 + feePercent)/100);
    }
}