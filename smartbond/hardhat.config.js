require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1271,
    },
  },
  solidity: "0.8.9",
};
