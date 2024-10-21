// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// public - internal - private
contract C{
    uint public  data = 10;
    uint internal iData = 20;
    uint private pData = 30; 

    function getData() public returns (uint){
     return  pData;
    }

    function setData(uint _data) public  {
        pData = _data;
    }
}

contract D is C{
    function childData() public view
     returns (uint) {
        // data = 100;
        return iData;
    }
}

contract A{
    C obj1; // c is object of contact C
    function x() public returns (uint) {
        return obj1.getData();
    }
}
