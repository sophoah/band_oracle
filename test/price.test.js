const hre = require("hardhat");
var chaiAsPromised = require("chai-as-promised");
const Oracle = hre.artifacts.require("Oracle");

const { assert } = require("chai").use(chaiAsPromised);

describe("Price Unit test", () => {
  let oracle;
  const stdReferenceTest = "0xF55e732Ef55AB5336bc9d9416b022358b8F19D50";
  before("Deploy contracts", async () => {
    oracle = await Oracle.new(stdReferenceTest);
    console.log("Oracle Deployed at ", oracle.address);
  });

  it("Should get the price correct", async () => {
    const price = await oracle.getPrice();
    console.log("price => ", price.toString());
  });
});
