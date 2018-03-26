pragma solidity ^0.4.19;

import 'zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol';

// TODO: add `burnFrom` method.
contract CavaToken is DetailedERC20, BurnableToken, StandardToken {
  function CavaToken(
    uint256 _initialSupply,
    string _name,
    string _symbol,
    uint8 _decimals
  )
  public
  DetailedERC20(_name, _symbol, _decimals) {
    // TODO: check if `_name`, `_symbol`, and `_decimals` are valid.

    require(_initialSupply > 0);

    totalSupply_ = _initialSupply * 10 ** uint256(_decimals);
    balances[msg.sender] = totalSupply_;
  }
}
