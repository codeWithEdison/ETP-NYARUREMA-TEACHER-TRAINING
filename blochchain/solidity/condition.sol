// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ControlStrucure{
    // function  that use if-else
    function checkEvenOdd(uint num)
     public pure returns (string memory){
        if(num % 2 == 0){
            return "this number  is even";
        } else {
            return " this number is odd";
        }
    }

    // function that uses a for 
    //loop to sum number up to a give limit

    function sum(uint x) public pure  returns (uint){
        uint result = 0;

        for(uint i = 0; i<= x; i++){
            return i;
        }
        return result;
    }
}