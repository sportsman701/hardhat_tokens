import { ContractFactory, BaseContract } from "ethers";
import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

task("deploy:ThallHire").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const ThallHireFactory: ContractFactory = await ethers.getContractFactory("ThallHire");
  const contract: BaseContract = <BaseContract>await ThallHireFactory.deploy();
  await contract.deployed();
  console.log("ThallHire deployed to: ", contract.address);
});
