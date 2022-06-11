const Intern = require('../lib/intern');

describe("Intern class", () => {
    describe("Get Name method", () => {
        it("Should return the name", () => {
            const result = new Intern("Jim", "4", "jim@email.com", "UW");
            expect(result.getName()).toBe("Jim");
        });
    });

    describe("Get ID method", () => {
        it("Should return the ID", () => {
            const result = new Intern("Jim", "4", "jim@email.com", "UW");
            expect(result.getId()).toBe("4");
        });
    });

    describe("Get Email method", () => {
        it("Should return the email", () => {
            const result = new Intern("Jim", "4", "jim@email.com", "UW");
            expect(result.getEmail()).toBe("jim@email.com");
        });
    });

    describe("Get School method", () => {
        it("Should return the school", () => {
            const result = new Intern("Jim", "4", "jim@email.com", "UW");
            expect(result.getSchool()).toBe("UW");
        });
    });
});