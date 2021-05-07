async function main() {
  // We get the contract to deploy
  const stdReference = "0xF55e732Ef55AB5336bc9d9416b022358b8F19D50";
  const OracleFactory = await ethers.getContractFactory("Oracle");
  const Oracle = await OracleFactory.deploy(stdReference);
  console.log("Oracle deployed at ", Oracle.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
