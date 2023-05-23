pragma solidity ^0.8.13;

import "./interfaces/IStdReference.sol";

contract Bandtest {
    IStdReference public ref;

    constructor(IStdReference _ref) public {
        ref = _ref;
    }

    function demo() external view returns (IStdReference.ReferenceData memory) {
        return ref.getReferenceData("DAI", "USD");
    }

    function demoBTC() external view returns (IStdReference.ReferenceData memory) {
        return ref.getReferenceData("BTC", "USD");
    }

    function demo_bulk() external view returns (IStdReference.ReferenceData[] memory) {
        string[] memory symbols = new string[](2);
        symbols[0] = "BTC";
        symbols[1] = "ETH";
        string[] memory baseSymbols = new string[](2);
        baseSymbols[0] = "USD";
        baseSymbols[1] = "BTC";
        return ref.getReferenceDataBulk(symbols, baseSymbols);
    }
}