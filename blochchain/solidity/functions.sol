// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
contract FunctionExample{
    uint data = 50;
     // Function to set a new value (modifies contract state)
    function add(uint _data) public {
        data +=  _data;

    }
    // view function
    function getData()
    public view  returns (uint){
        return data;
    }
    // pure functions (does not access state variables)
    function mutply(uint a, uint b)
     public returns (uint){
        return a*b; 
    }

}