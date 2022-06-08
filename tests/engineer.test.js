const Engineer = require('./engineer');

describe("Employee class", () => {
    describe("Get Name method", () => {
        const employee = new Employee("Sam", "2", "sam@email.com, samGit")
    expect(employee.getName()).toBe("Sam");    
    });

    describe("Get Id method", () => {
        const employee = new Employee("Sam", "2", "sam@email.com, samGit")
    expect(employee.getId()).toBe("2");    
    });

    describe("Get Email method", () => {
        const employee = new Employee("Sam", "2", "sam@email.com, samGit")
    expect(employee.getEmail()).toBe("sam@email.com");    
    });

    describe("Get Github method", () => {
        const employee = new Employee("Sam", "2", "sam@email.com, samGit")
    expect(employee.getGithub()).toBe("samGit");    
    });

})