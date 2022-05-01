require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.4",
    paths: {
        artifacts: "./NFTMarketplace/artifacts",
        sources: "./NFTMarketplace/contracts",
        cache: "./NFTMarketplace/cache",
        tests: "./NFTMarketplace/test"
    }

}