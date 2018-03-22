var Migrations = artifacts.require('./TokenERC20Crowdsale.sol');

module.exports = function(deployer) {
  // Arguments:
  // - Minimum amount of funds to be raised (in weis).
  // - Crowdsale opening time (timestamp in seconds).
  // - Crowdsale closing time (timestamp in seconds).
  // - Number of token units a buyer gets per wei.
  // - Address where collected funds will be forwarded to.
  // - Address of the token being sold.
  deployer.deploy(
    Migrations,
    1666000000000000000000,
    1524366776,
    1540177976,
    1,
    '0x627306090abab3a6e1400e9345bc60c78a8bef57',
    '0x8cdaf0cd259887258bc13a92c0a6da92698644c0'
  );
};
