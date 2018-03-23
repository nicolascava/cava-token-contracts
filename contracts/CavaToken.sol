pragma solidity ^0.4.19;

import 'zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol';

contract CavaToken is DetailedERC20, BurnableToken, StandardToken {
  function CavaToken(
    uint256 _initialSupply,
    string _name,
    string _symbol,
    uint8 _decimals
  )
  public
  DetailedERC20(_name, _symbol, _decimals) {
    totalSupply_ = _initialSupply * 10 ** uint256(_decimals);
    balances[msg.sender] = totalSupply_;
  }
}
