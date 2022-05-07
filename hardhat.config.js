require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const ACC_PRIVATE_KEY = "0x"+"cb881e259b657ea57d454deab892af3a313567c0dd4e39945038d76baeaf9478"
module.exports = {
    solidity: "0.8.4",
    networks: {
        ropsten: {
          url: 'https://ropsten.infura.io/v3/20262928a70d4f43b1c965dd4611cecd',
          accounts: [ACC_PRIVATE_KEY]
        },
        kovan: {
            url: 'https://kovan.infura.io/v3/20262928a70d4f43b1c965dd4611cecd',
            accounts: [ACC_PRIVATE_KEY]
        }
        
        /*
        mainnet: {
            url: 'https://mainnet.infura.io/v3/20262928a70d4f43b1c965dd4611cecd',
            accounts: [ROPSTEN_PRIVATE_KEY]
        }*/
    },
    paths: {
        artifacts: "./components/NFTMarketplace/artifacts",
        sources: "./components/NFTMarketplace/contracts",
        cache: "./components/NFTMarketplace/cache",
        tests: "./components/NFTMarketplace/test"
    }

}