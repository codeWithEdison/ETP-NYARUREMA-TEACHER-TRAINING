
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArrayStruct {
    //dynamic array
    uint[] public numbers;
    
    //struct definition 
    struct Person {
        string name;
        uint age;
    }

    // array of struct
    Person[] public people;

    // Add data functions
    function addNumber(uint num) public {
        numbers.push(num);
    }
    // person 
    function addPerson(string memory _name, uint _age) public {
        people.push(Person(_name, _age));
    }

    // Return complete numbers array
    function getNumbers() public view returns (uint[] memory) {
        return numbers;
    }
    
    // Return length of numbers array
    function getNumbersLength() public view returns (uint) {
        return numbers.length;
    }
    
    // Return complete people array
    function getPeople() public view returns (Person[] memory) {
        return people;
    }
    
    // Return length of people array
    function getPeopleLength() public view returns (uint) {
        return people.length;
    }
    
    // Get person by index
    function getPerson(uint index) public view returns (string memory name, uint age) {
        require(index < people.length, "Index out of bounds");
        Person memory person = people[index];
        return (person.name, person.age);
    }
    
    // Get number by index (optional since you already have it as public)
    function getNumber(uint index) public view returns (uint) {
        require(index < numbers.length, "Index out of bounds");
        return numbers[index];
    }
}