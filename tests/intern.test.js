const Engineer = require('./intern');

describe("Employee class", () => {
    describe("Get Name method", () => {
        const employee = new Employee("Sally", "3", "sally@email.com, UW")
    expect(employee.getName()).toBe("Sam");    
    });

    describe("Get Id method", () => {
        const employee = new Employee("Sam", "3", "sally@email.com, UW")
    expect(employee.getId()).toBe("3");    
    });

    describe("Get Email method", () => {
        const employee = new Employee("Sam", "3", "sally@email.com, UW")
    expect(employee.getEmail()).toBe("sally@email.com");    
    });

    describe("Get School method", () => {
        const employee = new Employee("Sam", "3", "sally@email.com, UW")
    expect(employee.getSchool()).toBe("UW");    
    });

})