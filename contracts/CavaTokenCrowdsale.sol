pragma solidity ^0.4.19;

import 'zeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol';

contract CavaTokenCrowdsale is RefundableCrowdsale {
  function CavaTokenCrowdsale(
    uint256 _goal,
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    ERC20 _token
  )
  public
  RefundableCrowdsale(_goal)
  TimedCrowdsale(_openingTime, _closingTime)
  Crowdsale(_rate, _wallet, _token) {}
}
