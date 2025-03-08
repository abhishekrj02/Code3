// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrimeChecker {
    function isPrime(uint256 num) public pure returns (bool) {
        if (num < 2) return false;
            for (uint256 i = 2; i * i <= num; i++) {
                if (num % i == 0) return false;
            }
            return true;
    }
}
