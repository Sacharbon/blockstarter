
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract SimpleCounter {
    uint256 public counter;
    address public owner;

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function increment() public {
        counter++;
    }

    function decrement() public {
        require(counter > 0, "Counter cannot be negative");
        counter--;
    }

    function reset() public onlyOwner {
        counter = 0;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}
