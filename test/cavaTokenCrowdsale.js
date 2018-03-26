const Crowdsale = artifacts.require('./CavaTokenCrowdsale.sol');

contract('CavaTokenCrowdsale', () => {
  it('should set a vault to hold tokens before the goal is reached', () => {});
  it('should set a goal', () => {});
  it('should let investors claim refunds if crowdsale is unsuccessful', () => {});
  it('should return a status whether funding goal was reached or not', () => {});
  it('should close the vault if the goal was reached on finalization', () => {});
  it('should enable refunds if the goal was not reached on finalization', () => {});
  it('should forward funds to the vault', () => {});
  it('should finalize', () => {});
  it('should set an opening time', () => {});
  it('should set a closing time', () => {});
  it('should return if the crowdsale is closed or not', () => {});
  it('should set a wallet to forward funds', () => {});
  it('should set the number of token units a buyer gets per Wei', () => {});
  it('should set the address of the token being sold', () => {});
  it('should fallback to the buy token method when no method is specified', () => {});
  it('should purchase tokens for a given investor', () => {});
  it('should deliver tokens to the right investor', () => {});
  it('should return the token amount for a given Wei amount', () => {});
  it('should properly deliver tokens on purchase', () => {});
  it('should properly forward funds on purchase', () => {});
  it('should set the owner as the contract creator', () => {});
  it('should transfer control of the contract to another owner', () => {});
  it('should set a cap', () => {});
  it('should return if the cap is reached or not', () => {});
  it('should reject if the cap equal to 0', () => {});
  it('should reject purchase if the crowdsale is ended', () => {});
  it('should reject if the rate equal to 0', () => {});
  it('should reject if the wallet is the 0 address', () => {});
  it('should reject if the token address is the 0 address', () => {});
  it('should reject purchase if the investor address is the 0 address', () => {});
  it('should reject purchase if the Wei amount equal to 0', () => {});
  it('should reject purchase if the cap is reached with the given Wei amount', () => {});
});
