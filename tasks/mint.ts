import { NFT } from "./../typechain/NFT.d";
import { task } from "hardhat/config";

import "@nomiclabs/hardhat-ethers";

interface IArgs {
  contract: string;
  tokenuri: string;
}

task("mint", "Mint nft")
  .addParam("contract", "Contract address")
  .addParam("tokenuri", "Token URI link")
  .setAction(async (args: IArgs, hre) => {
    const NFT = (await hre.ethers.getContractAt("NFT", args.contract)) as NFT;
    const [owner] = await hre.ethers.getSigners();

    const tx = await NFT.createNFT(owner.address, args.tokenuri);
    await tx.wait();

    console.log(`Successfully minted nft`);
  });

export {};
