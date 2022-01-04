const Multicall = artifacts.require("Multicall");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Multicall); 
};
