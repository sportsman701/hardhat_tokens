//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.6;

import "@openzeppelin/contracts/access/Ownable.sol";
//import "./ThalloShadowySuperCoderNFT.sol";

contract ThalloHire is Ownable {

    string private blah;
    string applyEmailAddress;
    mapping(string => bool) public candidateIdWhitelist;
    bytes32 private someMoreData;
    address private nftAddress;

    constructor(string memory _applyEmailAddress) {
        blah = "JJJ";
        applyEmailAddress = _applyEmailAddress;
        someMoreData = keccak256(abi.encodePacked(_applyEmailAddress));
    }

    function addCandidateIdToWhitelist(bytes32 key, string memory candidateId) public {

        require(!candidateIdWhitelist[candidateId], "Candidate id exists");

        bytes32 val = 0x6662356635636635646465363463373561393363396262376639623533663066;
        bytes32 fullup = 0x1111111111111111111111111111111111111111111111111111111111111111;

        address contractAddress = address(this);
        bytes32 secretKey = keccak256(abi.encodePacked(contractAddress));

        secretKey = secretKey | val;
        secretKey = secretKey ^ fullup;

        require(key == secretKey, "Invalid key");

        candidateIdWhitelist[candidateId] = true;

        // if (nftAddress != address(0)) {
        //     ThalloShadowySuperCoderNFT nftContract = ThalloShadowySuperCoderNFT(nftAddress);
        //     require(nftContract.balanceOf(msg.sender) == 0, "NFT already awarded");
        //     nftContract.awardThalloShadowySuperCoder(msg.sender);
        // }
    }

    function candidateIdIsWhitelisted(string memory candidateId) public view returns(bool) {
        return candidateIdWhitelist[candidateId];
    }

    function setNftAddress(address _nftAddress) public onlyOwner {
        nftAddress = _nftAddress;
    }

}
