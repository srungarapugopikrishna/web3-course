const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return new greeting once it's chaned", async function () {
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello World!!!!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello World!!!!");

    const setGreetingTx = await greeter.setGreeting("I am World...{}");

    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("I am World...{}");
  });
});
