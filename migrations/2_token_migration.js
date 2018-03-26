const Token = artifacts.require('./CavaToken.sol');
const Crowdsale = artifacts.require('./CavaTokenCrowdsale.sol');

module.exports = deployer =>
  // Initial supply of 2030 because of 260 working days at a rate of 8 hours of work minus 50 days
  // of closed days ((260 * 8) - 50).
  deployer.deploy(Token, 2870, 'Cava', 'CAVA', 18).then(() => {
    const openingTime = new Date().getTime() / 1000;

    // Ending time: 1 hour after opening.
    const closingTime = openingTime + 3600;

    // Coinbase address.
    const fundsAddress = '0x627306090abab3a6e1400e9345bc60c78a8bef57';

    // Goal of 50 Ether.
    const goal = 50000000000000000000;

    // We give 2000000000000000 token by Wei (~1 USD).
    const rate = 2000000000000000;

    // Crowdsale cap of 100 Ether.
    const cap = 100000000000000000000;

    // Arguments:
    // - Minimum amount of funds to be raised (in Wei).
    // - Crowdsale opening time (timestamp in seconds).
    // - Crowdsale closing time (timestamp in seconds).
    // - Number of token units a buyer gets per Wei.
    // - Address where collected funds will be forwarded to.
    // - Address of the token being sold.
    // - Crowdsale cap (in Wei).
    return deployer.deploy(
      Crowdsale,
      goal,
      openingTime,
      closingTime,
      rate,
      fundsAddress,
      Token.address,
      cap
    );
  });
