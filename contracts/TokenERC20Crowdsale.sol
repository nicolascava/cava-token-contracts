pragma solidity ^0.4.19;

import 'zeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol';

contract TokenERC20Crowdsale is RefundableCrowdsale {
  function TokenERC20Crowdsale(
    uint256 _goal,
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    ERC20 _token
  )
  RefundableCrowdsale(_goal)
  TimedCrowdsale(_openingTime, _closingTime)
  Crowdsale(_rate, _wallet, _token)
  public {}
}
