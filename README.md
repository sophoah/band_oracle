# Band Oracle Test

## requirements
- Foundry
- Funded ONE testnet account

## Install foundry

```
curl -L https://foundry.paradigm.xyz | bash
foundryup 
```

https://docs.harmony.one/home/network/validators/node-setup/hmy-cli-download

## Extract the private key of your account
if using hmy cli (https://docs.harmony.one/home/network/validators/node-setup/hmy-cli-download)
```
PRIVATE_KEY=$(hmy keys export-private-key <ACCOUNT_ADDRESS> --passphrase)
```

## Deploy the contract

```
git clone https://github.com/harmony-one/band_oracle
cd band_oracle

# install the lib
forge install foundry-rs/forge-std

# deploy the contract
forge script script/Bandtest.s.sol:ContractScript --rpc-url https://api.s0.b.hmny.io --private-key $PRIVATE_KEY  --broadcast --legacy
```

## Copy the contrat address
```
CONTRACT_ADDRESS=<contract_address from previous output>
```

## Test the contract

`cast call $CONTRACT_ADDRESS "demo()" --rpc-url https://api.s0.b.hmny.io`

```
0x0000000000000000000000000000000000000000000000000de05bc096e9c00000000000000000000000000000000000000000000000000000000000645cc0c400000000000000000000000000000000000000000000000000000000645cc180
```

`cast call $CONTRACT_ADDRESS "demoBTC()" --rpc-url https://api.s0.b.hmny.io`

```
0x0000000000000000000000000000000000000000000005cfb0f6a66fc372000000000000000000000000000000000000000000000000000000000000645cc0c400000000000000000000000000000000000000000000000000000000645cc186
```

`cast call $CONTRACT_ADDRESS "demo_bulk()" --rpc-url https://api.s0.b.hmny.io`

```
0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000005cf591078e4fd13800000000000000000000000000000000000000000000000000000000000645cbe3800000000000000000000000000000000000000000000000000000000645cc0a800000000000000000000000000000000000000000000000000ebd6f4806fbd2800000000000000000000000000000000000000000000000000000000645cbe3800000000000000000000000000000000000000000000000000000000645cbe38
```

Feel free to read https://github.com/bandprotocol/band-std-reference-contracts-solidity for more information.