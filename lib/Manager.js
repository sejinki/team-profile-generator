const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber){
    this.officeNumber = officeNumber;
    }
}

getRole(){
    return this.Manager;
}

module.exports = Employee;