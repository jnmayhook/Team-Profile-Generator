const Employee = require('../lib/employee');

describe("Employee class", () => {
    describe("Get Name method", () => {
        it("Should return the name", () => {
            const result = new Employee("John", "1", "john@email.com");
            expect(result.getName()).toBe("John");
        });
    });

    describe("Get Name method", () => {
        it("Should return the name", () => {
            const result = new Employee("John", "1", "john@email.com");
            expect(result.getId()).toBe("1");
        });
    });

    describe("Get Name method", () => {
        it("Should return the name", () => {
            const result = new Employee("John", "1", "john@email.com");
            expect(result.getEmail()).toBe("john@email.com");
        });
    });

});