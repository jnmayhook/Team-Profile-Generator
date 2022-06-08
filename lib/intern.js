// TODO: Import the parent class
const Intern = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    getSchool() {
        return "Intern";
    }
}

module.exports = Intern;

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`