import { NFT__factory, NFT } from "./../typechain/index";
// import { expect } from "chai";
// import { parseEther } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("NFT", function () {
  let NFTContract: NFT__factory;
  let nft: NFT;
  let owner: SignerWithAddress;

  beforeEach(async function () {
    NFTContract = await ethers.getContractFactory("NFT");
    [owner] = await ethers.getSigners();

    nft = await NFTContract.deploy();
  });

  describe("Test functions", function () {
    it("Mint nft", async function () {
      await nft.createNFT(
        owner.address,
        "https://gateway.pinata.cloud/ipfs/QmSLKSvWrc9Ma3119LsRxA8Pcj9Sm2jcMn7QWnAxfpVBqe"
      );
    });
  });
});
