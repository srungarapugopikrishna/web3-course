// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract KrishToken{
    uint256 public constant totalSupply = 1000;
    uint256 public constant totalCreated = 0;

    mapping(address => uint256) public balances;

    function create(uint256 quantity) public {
        require(quantity + totalCreated <= totalSupply, "totalSupply reached!");

        balances[msg.sender] += quantity;
        totalCreated += quantity;
    }

    function send(address to, uint256 quantity) public {
        require(balances[msg.sender] >= quantity, "You don't have enough);

        balances[msg.sender] -= quantity;
        balances[to] += quantity;
    }
}