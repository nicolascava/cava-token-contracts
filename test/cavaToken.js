const Token = artifacts.require('./CavaToken.sol');

contract('CavaToken', (accounts) => {
  const firstAccount = accounts[0];
  const secondAccount = accounts[1];
  const thirdAccount = accounts[2];

  let instance = null;

  beforeEach(async () => {
    instance = await Token.deployed();
  });

  it('should set a total supply of 2870 * 10^decimals', async () => {
    const totalSupply = await instance.totalSupply();

    assert.equal(totalSupply.valueOf(), 2870 * 10 ** 18);
  });

  it('should put the total supply in the contract creator balance', async () => {
    const totalSupply = await instance.totalSupply();
    const ownerBalance = await instance.balanceOf(firstAccount);

    assert.equal(totalSupply.valueOf(), ownerBalance.valueOf());
  });

  it('should transfer tokens from one address to another', async () => {
    const allowedAmount = 100 * 10 ** 18;

    await instance.transfer(secondAccount, allowedAmount);
    await instance.approve(firstAccount, allowedAmount, { from: secondAccount });
    await instance.transferFrom(secondAccount, thirdAccount, allowedAmount);

    const balanceToCheck = await instance.balanceOf(thirdAccount);

    assert.equal(balanceToCheck.toNumber(), allowedAmount);
  });

  it('should burn tokens', async () => {
    const amountToBurn = 100 * 10 ** 18;

    const balanceBeforeBurn = await instance.balanceOf(firstAccount);
    const totalSupplyBeforeBurn = await instance.totalSupply();

    await instance.burn(amountToBurn);

    const balanceToCheck = await instance.balanceOf(firstAccount);

    assert.equal(balanceToCheck.toNumber(), balanceBeforeBurn.toNumber() - amountToBurn);

    const totalSupply = await instance.totalSupply();

    assert.equal(totalSupply.toNumber(), totalSupplyBeforeBurn.toNumber() - amountToBurn);
  });

  it('should have a name', () => {});
  it('should have a symbol', () => {});
  it('should have decimals', () => {});

  it('should allow an account to spend a specified amount of tokens on behalf of the sender', async () => {
    const allowedAmount = 100 * 10 ** 18;

    await instance.approve(secondAccount, allowedAmount);

    const valueToCheck = await instance.allowance(firstAccount, secondAccount);

    assert.equal(valueToCheck.toNumber(), allowedAmount);
  });

  it('should return the amount of tokens that an owner allowed to a spender', () => {});
  it('should increase the amount of tokens that an owner allowed to a spender', () => {});
  it('should decrease the amount of tokens that an owner allowed to a spender', () => {});
  it('should return the total number of tokens in existence', () => {});

  it('should transfer token for a specified address', async () => {
    const valueToTransfer = 100 * 10 ** 18;

    await instance.transfer(secondAccount, valueToTransfer);

    const balanceToCheck = await instance.balanceOf(secondAccount);

    assert.equal(balanceToCheck.toNumber(), valueToTransfer);
  });

  it('should get the balance of the specified address', () => {});
  it('should reject if the initial supply equal to 0', () => {});
  it('should reject if a value that a sender want to burn is higher than his balance', () => {});
  it('should reject if the receiver is the 0 address when transferring tokens', () => {});
  it('should reject if the receiver is the 0 address when transferring tokens from another account', () => {});
  it('should reject if the sender balance is lower than the amount of tokens transferred', () => {});
  it('should reject if the delegated account balance is lower than the amount of tokens transferred to another account', () => {});
  it('should reject if the delegated account allowed amount to transfer from is lower than the given amount to transfer', () => {});
});
