const { isTypedArray } = require('util/types');
const Employee = require('../lib/employee');

describe("Employee class", () => {
    describe("Get Name method", () => {
        it ("Get New Employee", )
        const employee = new Employee("John", "1", "john@email.com")
    expect(employee.getName()).toBe("John");    
    });

    describe("Get Id method", () => {
        const employee = new Employee("John", "1", "john@email.com")
    expect(employee.getId()).toBe("1");    
    });

    describe("Get Email method", () => {
        const employee = new Employee("John", "1", "john@email.com")
    expect(employee.getEmail()).toBe("john@email.com");    
    });

})


