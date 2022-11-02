// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract KrishToken{
    uint256 public constant totalSupply = 1000;
    uint256 public totalCreated = 0;

    uint256 public constant CREATION_PRICE = 0.01 ether;

    address public immutable boss;

    mapping(address => uint256) public balances;

    constructor(){
        boss = msg.sender;
    }

    modifier onlyBoss(){
        require(msg.sender == boss, "Sorry, not the boss");
        _;
    }

    function create(uint256 quantity) public onlyBoss {
        require(quantity + totalCreated <= totalSupply, "totalSupply reached!");

        balances[msg.sender] += quantity;
        totalCreated += quantity;
    }

    function send(address to, uint256 quantity) public {
        require(balances[msg.sender] >= quantity, "You don't have enough");

        balances[msg.sender] -= quantity;
        balances[to] += quantity;
    }

    function buy() public payable {
        require(msg.value >= CREATION_PRICE);
        require(totalCreated < totalSupply, "totalSupply reached!");

        balances[msg.sender] += 1;
        totalCreated += 1;
    }

}