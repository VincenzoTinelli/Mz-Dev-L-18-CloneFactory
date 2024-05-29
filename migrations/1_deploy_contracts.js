// Import necessary dependencies
const {
    BN,
    constants,
    expectEvent,
    expectRevert,
    time,
  } = require("@openzeppelin/test-helpers");

  const { expect } = require("chai");
  
  const TokenFactory = artifacts.require("TokenFactory");
  
  module.exports = async (deployer, network, accounts) {
    if (network == "development") {

      await deployer.deploy(TokenFactory);
      
        TFcontract = await TokenFactory.deployed();
        console.log("Token factory clone Deployed: ", TFcontract.address);
        console.log("Token factory clone owner: ", await TFcontract.owner());

    } else if (network == "goerli") {
    
    }
  };
  