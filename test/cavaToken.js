const expectThrow = require('../lib/expectThrow');

const Token = artifacts.require('./CavaToken.sol');

async function deploy(initialSupply = 2870, name = 'Cava', symbol = 'CAVA', decimals = 18) {
  return await Token.new(initialSupply, name, symbol, decimals);
}

contract('CavaToken', (accounts) => {
  const firstAccount = accounts[0];
  const secondAccount = accounts[1];
  const thirdAccount = accounts[2];

  let instance = null;

  describe('with default arguments', () => {
    beforeEach(async () => {
      instance = await deploy();
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

    it('should have a name', async () => {
      const name = await instance.name();

      assert.equal(name, 'Cava');
    });

    it('should have a symbol', async () => {
      const symbol = await instance.symbol();

      assert.equal(symbol, 'CAVA');
    });

    it('should have decimals', async () => {
      const decimals = await instance.decimals();

      assert.equal(decimals, 18);
    });

    it('should allow an account to spend a specified amount of tokens on behalf of the sender', async () => {
      const allowedAmount = 100 * 10 ** 18;

      await instance.approve(secondAccount, allowedAmount);

      const valueToCheck = await instance.allowance(firstAccount, secondAccount);

      assert.equal(valueToCheck.toNumber(), allowedAmount);
    });

    it('should increase the amount of tokens that an owner allowed to a spender', async () => {
      const allowedAmount = 100 * 10 ** 18;
      const increasedAmount = 2 * 10 ** 18;

      await instance.approve(secondAccount, allowedAmount);
      await instance.increaseApproval(secondAccount, increasedAmount);

      const valueToCheck = await instance.allowance(firstAccount, secondAccount);

      assert.equal(valueToCheck.toNumber(), allowedAmount + increasedAmount);
    });

    it('should decrease the amount of tokens that an owner allowed to a spender', async () => {
      const allowedAmount = 100 * 10 ** 18;
      const decreasedAmount = 2 * 10 ** 18;

      await instance.approve(secondAccount, allowedAmount);
      await instance.decreaseApproval(secondAccount, decreasedAmount);

      const valueToCheck = await instance.allowance(firstAccount, secondAccount);

      assert.equal(valueToCheck.toNumber(), allowedAmount - decreasedAmount);
    });

    it('should transfer token for a specified address', async () => {
      const valueToTransfer = 100 * 10 ** 18;

      await instance.transfer(secondAccount, valueToTransfer);

      const balanceToCheck = await instance.balanceOf(secondAccount);

      assert.equal(balanceToCheck.toNumber(), valueToTransfer);
    });

    it('should reject if a value that a sender want to burn is higher than his balance', async () =>
      await expectThrow(instance.burn(100 * 10 ** 18, { from: secondAccount })));

    it('should reject if the receiver is the 0 address when transferring tokens', async () => {
      const valueToTransfer = 100 * 10 ** 18;

      await expectThrow(instance.transfer(0, valueToTransfer));
    });

    it('should reject if the receiver is the 0 address when transferring tokens from another account', async () => {
      const allowedAmount = 100 * 10 ** 18;

      await instance.transfer(secondAccount, allowedAmount);
      await instance.approve(firstAccount, allowedAmount, { from: secondAccount });

      await expectThrow(instance.transferFrom(secondAccount, 0, allowedAmount));
    });

    it('should reject if the sender balance is lower than the amount of tokens transferred', async () => {
      const valueToTransfer = 100 * 10 ** 18;

      await expectThrow(instance.transfer(thirdAccount, valueToTransfer, { from: secondAccount }));
    });

    it('should reject if the delegated account balance is lower than the amount of tokens transferred to another account', async () => {
      const allowedAmount = 100 * 10 ** 18;

      await instance.approve(firstAccount, allowedAmount, { from: secondAccount });

      await expectThrow(instance.transferFrom(secondAccount, thirdAccount, allowedAmount));
    });

    it('should reject if the delegated account allowed amount to transfer from is lower than the given amount to transfer', async () => {
      const allowedAmount = 100 * 10 ** 18;
      const addedAmount = 10 * 10 ** 18;

      await instance.transfer(secondAccount, allowedAmount + addedAmount);
      await instance.approve(firstAccount, allowedAmount, { from: secondAccount });

      await expectThrow(instance.transferFrom(secondAccount, thirdAccount, allowedAmount + addedAmount));
    });
  });

  it('should reject if the initial supply equal to 0', async () => await expectThrow(deploy(0)));
});
