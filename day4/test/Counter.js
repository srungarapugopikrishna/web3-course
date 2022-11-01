const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return incremented or decremented number", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    const incTx = await counter.inc();
    await incTx.wait();

    expect(await counter.count()).to.equal(1);
  });
});
