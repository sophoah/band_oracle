const { Client } = require("@bandprotocol/bandchain.js");

// BandChain REST Endpoint
const endpoint = "https://api-gm-lb.bandchain.org";
const client = new Client(endpoint);

async function exampleGetReferenceData() {
  const rate = await client.getReferenceData(["ONE/USD"]);
  return rate;
}

(async () => {
  console.log(await exampleGetReferenceData());
})();
