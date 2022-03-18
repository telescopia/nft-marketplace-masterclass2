require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/SF5vUrTZCdaE-145B6TZSxmj_TZOhS93",
      accounts: ["516e006872ebe4f404d1df36a7d63883fa79ae50f071d58daf5e1f7061c13318", "f185edba521795923c3d85f086fb99c68c23e73bff118af9bb7400366b849423"]
    }
  },
  solidity: "0.8.12",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
