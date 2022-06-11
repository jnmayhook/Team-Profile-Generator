const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
    describe("Get Name method", () => {
        it("Should return the name", () => {
            const result = new Engineer("Steve", "2", "steve@email.com", "steveGit");
            expect(result.getName()).toBe("Steve");
        });
    });

    describe("Get ID method", () => {
        it("Should return the ID", () => {
            const result = new Engineer("Steve", "2", "steve@email.com", "steveGit");
            expect(result.getId()).toBe("2");
        });
    });

    describe("Get Email method", () => {
        it("Should return the email", () => {
            const result = new Engineer("Steve", "2", "steve@email.com", "steveGit");
            expect(result.getEmail()).toBe("steve@email.com");
        });
    });

    describe("Get Github method", () => {
        it("Should return the github", () => {
            const result = new Engineer("Steve", "2", "steve@email.com", "steveGit");
            expect(result.getGithub()).toBe("steveGit");
        });
    });
});