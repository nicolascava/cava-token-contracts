var Migrations = artifacts.require('./TokenERC20.sol');

module.exports = function(deployer) {
  // Initial supply of 2030 because of 260 working days at a rate of 8 hours of work minus 50 days
  // of closed days ((260 * 8) - 50).
  deployer.deploy(Migrations, 2870, 'Cava', 'CAVA');
};
