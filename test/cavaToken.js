const Token = artifacts.require('./CavaToken.sol');

contract('CavaToken', () => {
  it('should set a total supply of 2870 * 10^decimals', () => {});
  it('should put the total supply in the contract creator balance', () => {});
  it('should transfer tokens from one address to another', () => {});
  it('should burn tokens', () => {});
  it('should have a name', () => {});
  it('should have a symbol', () => {});
  it('should have decimals', () => {});
  it('should approve an address to spend a specified amount of tokens on behalf of the sender', () => {});
  it('should return the amount of tokens that an owner allowed to a spender', () => {});
  it('should increase the amount of tokens that an owner allowed to a spender', () => {});
  it('should decrease the amount of tokens that an owner allowed to a spender', () => {});
  it('should return the total number of tokens in existence', () => {});
  it('should transfer token for a specified address', () => {});
  it('should get the balance of the specified address', () => {});
  it('should reject if the initial supply equal to 0', () => {});
  it('should reject if a value that a sender want to burn is higher than his balance', () => {});
  it('should reject if the receiver is the 0 address when transferring tokens', () => {});
  it('should reject if the receiver is the 0 address when transferring tokens from another account', () => {});
  it('should reject if the sender balance is lower than the amount of tokens transferred', () => {});
  it('should reject if the delegated account balance is lower than the amount of tokens transferred to another account', () => {});
  it('should reject if the delegated account allowed amount to transfer from is lower than the given amount to transfer', () => {});
});
