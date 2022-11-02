const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
  let token;
  beforeEach(async () => {
    const Token = await ethers.getContractFactory("KrishToken");
    token = await Token.deploy();
    await token.deployed();
  });

  it("Should be able to create Tokens", async function () {
    const [signer0, signer1] = await ethers.getSigners();
    const createTx = await token.create(100);
    await createTx.wait();

    expect(await token.balances(signer0.address)).to.equal(100);
    expect(await token.balances(signer1.address)).to.equal(0);
  });

  it("Should revert if creating more than total supply", async function () {
    const totalSupply = await token.totalSupply();
    const createTx = await token.create(totalSupply.add(100));

    // expect(createTx.wait()).to.be.reverted;
    await expect(token.create(totalSupply.add(100))).to.be.revertedWith(
      "Some revrt message"
    );
  });

  it("Should be able to send Tokens", async function () {
    const [signer0, signer1] = await ethers.getSigners();
    const createTx = await token.create(100);
    await createTx.wait();

    const sendTx = await token.send(signer1.address, 5);
    await sendTx.wait();

    expect(await token.balances(signer0.address)).to.equal(95);
    expect(await token.balances(signer1.address)).to.equal(5);
  });

  it("Should allow random user to buy tokens", async function () {
    const [signer0, signer1] = await ethers.getSigners();

    const buyTx = await token.connect(signer1).buy({
      value: ethers.utils.parseEther("0.01"),
    });
    await buyTx.wait();

    expect(await token.balances(signer1.address)).to.equal(1);
  });
});
