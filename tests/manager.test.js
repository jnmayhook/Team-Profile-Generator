const Engineer = require('./manager');

describe("Employee class", () => {
    describe("Get Name method", () => {
        const employee = new Employee("Steve", "2", "steve@email.com, 1")
    expect(employee.getName()).toBe("Steve");    
    });

    describe("Get Id method", () => {
        const employee = new Employee("Sam", "2", "steve@email.com, 1")
    expect(employee.getId()).toBe("2");    
    });

    describe("Get Email method", () => {
        const employee = new Employee("Sam", "2", "steve@email.com, 1")
    expect(employee.getEmail()).toBe("steve@email.com");    
    });

    describe("Get Office Number method", () => {
        const employee = new Employee("Sam", "2", "steve@email.com, 1")
    expect(employee.getOfficeNumber()).toBe("1");    
    });

})