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
  it('should reject purchase if the crowdsale is ended', () => {});
});
