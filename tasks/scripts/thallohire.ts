import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";
import { BigNumber, utils} from 'ethers'

task("hire:hosokawa")
.addParam("scaddr", "The deployed ThalloHire`s address")
.setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const contract = await ethers.getContractAt("ThalloHire", taskArguments.scaddr);

  const val = BigNumber.from("0x6662356635636635646465363463373561393363396262376639623533663066");
  const fullup = BigNumber.from("0x1111111111111111111111111111111111111111111111111111111111111111");


  let secretKey = BigNumber.from(utils.solidityKeccak256(['address'], [taskArguments.scaddr]));

    secretKey = secretKey.or(val);
    secretKey = secretKey.xor(fullup);

    const key = Buffer.from(secretKey.toHexString().substr(2), 'hex')

  await contract.addCandidateIdToWhitelist(key, "hosokawa_zen");
  console.log(`"Hosokawa Zen" was hired !!!`);
});

task("hire:check")
.addParam("scaddr", "The deployed ThalloHire`s address")
.setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const contract = await ethers.getContractAt("ThalloHire", taskArguments.scaddr);
  const exist = await contract.candidateIdIsWhitelisted("hosokawa_zen");
  console.log(`"Hosokawa Zen" ${exist?'exists in whitelist':'does not eixst'} !!!`);
});

task("hire:reademail")
.addParam("nftaddr", "The deployed ThalloHire`s address")
.setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const contract = await ethers.getContractAt("ERC721", taskArguments.scaddr);

  const uri = await contract.tokenURI(11);
  console.log(`"Hosokawa Zen" was hired !!!`, uri);
});
