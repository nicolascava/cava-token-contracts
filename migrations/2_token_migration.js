var Token = artifacts.require('./CavaToken.sol');
var Crowdsale = artifacts.require('./CavaTokenCrowdsale.sol');

module.exports = function (deployer) {
  // Initial supply of 2030 because of 260 working days at a rate of 8 hours of work minus 50 days
  // of closed days ((260 * 8) - 50).
  deployer.deploy(Token, 2870, 'Cava', 'CAVA', 18).then(function () {
    var openingTime = new Date().getTime() / 1000;
    var endingTime = openingTime + 100000;
    var fundsAddress = '0x627306090abab3a6e1400e9345bc60c78a8bef57';
    var goal = 1666000000000000000000;
    var rate = 1;

    // Arguments:
    // - Minimum amount of funds to be raised (in weis).
    // - Crowdsale opening time (timestamp in seconds).
    // - Crowdsale closing time (timestamp in seconds).
    // - Number of token units a buyer gets per wei.
    // - Address where collected funds will be forwarded to.
    // - Address of the token being sold.
    deployer.deploy(
      Crowdsale,
      goal,
      openingTime,
      endingTime,
      rate,
      fundsAddress,
      Token.address
    );
  });
};
