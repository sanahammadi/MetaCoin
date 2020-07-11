const Vehicule = artifacts.require("./Vehicule.sol");

module.exports = function(deployer) {
  deployer.deploy(Vehicule);
};