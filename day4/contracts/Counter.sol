// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Counter {
    uint256 public count;
    address public boss;

    constructor(uint256 _initialCount){
        count = _initialCount;
        boss = msg.sender;
    }

    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() public {
        // This function will fail if count = 0
        require(msg.sender == boss, "Sorry, not the boss. Only boss can decrement...");
        count -= 1;
    }
}
