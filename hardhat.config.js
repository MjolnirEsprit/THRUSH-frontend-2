require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.4",
    paths: {
        artifacts: "./components/NFTMarketplace/artifacts",
        sources: "./components/NFTMarketplace/contracts",
        cache: "./components/NFTMarketplace/cache",
        tests: "./components/NFTMarketplace/test"
    }

}