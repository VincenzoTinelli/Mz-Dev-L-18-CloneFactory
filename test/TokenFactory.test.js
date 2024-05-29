const {BN, constants, expectEvent, expectRevert, time} = require("@openzeppelin/test-helpers");
const { web3 } = require("@openzeppelin/test-helpers/src/setup");
const { ZERO_ADDRESS } = constants;

const { expect } = require("chai");

const TokenFactory = artifacts.require("TokenFactory");
const Erc20Preset