// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Variables{
int storedData; // state variable
 constructor(){
    storedData = 10;
 }
 function getResults() public view returns  (int){
    int a = 1; // local variable
    int b = 2;
    int result = a + b;
    return result; // acces local varibale

 }
 function getStoredValue() public  view  returns(int){
   return storedData;
 }
}