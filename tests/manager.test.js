const Manager = require('../lib/manager');

describe("Manager class", () => {
    describe("Get Name method", () => {
        it("Should return the name", () => {
            const result = new Manager("Geoff", "3", "geoff@email.com", "404");
            expect(result.getName()).toBe("Geoff");
        });
    });

    describe("Get ID method", () => {
        it("Should return the ID", () => {
            const result = new Manager("Geoff", "3", "geoff@email.com", "404");
            expect(result.getId()).toBe("3");
        });
    });

    describe("Get Email method", () => {
        it("Should return the email", () => {
            const result = new Manager("Geoff", "3", "geoff@email.com", "404");
            expect(result.getEmail()).toBe("geoff@email.com");
        });
    });

    describe("Get Office Number method", () => {
        it("Should return the office number", () => {
            const result = new Manager("Geoff", "3", "geoff@email.com", "404");
            expect(result.getOfficeNumber()).toBe("404");
        });
    });
});