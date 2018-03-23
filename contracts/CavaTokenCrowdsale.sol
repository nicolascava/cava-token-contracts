pragma solidity ^0.4.19;

import 'zeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol';
import 'zeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol';

contract CavaTokenCrowdsale is RefundableCrowdsale, CappedCrowdsale {
  function CavaTokenCrowdsale(
    uint256 _goal,
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    ERC20 _token,
    uint256 _cap
  )
  public
  RefundableCrowdsale(_goal)
  TimedCrowdsale(_openingTime, _closingTime)
  Crowdsale(_rate, _wallet, _token)
  CappedCrowdsale(_cap) {}
}
