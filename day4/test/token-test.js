const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
  let token;
  beforeEach(async () => {
    const Token = await ethers.getContractFactory("KrishToken");
    const token = await Token.deploy();
    await token.deployed();
  });
  it("Should be able to create Tokens", async function () {
    const [signer0, signer1] = await ethers.getSigners();
    const createTx = await token.create(100);
    await createTx.wait();

    expect(await token.balances(signer0.address)).to.equal(100);
    // expect(await token.balances(signer1.address)).to.equal(0);
  });
});
