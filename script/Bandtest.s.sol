// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Script.sol";
import "../src/interfaces/IStdReference.sol";
import "../src/Bandtest.sol";

contract ContractScript is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        // 0xD0b2234eB9431e850a814bCdcBCB18C1093F986B is the testnet band reference contract
        IStdReference _ref = IStdReference(0xD0b2234eB9431e850a814bCdcBCB18C1093F986B);

        new Bandtest(_ref);
        vm.stopBroadcast();
    }
}