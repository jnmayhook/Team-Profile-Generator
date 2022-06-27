// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {
    managerQuestion,
    internQuestion,
    engineerQuestion,
} = require("./lib/questions");

const generateHtml = require("./utils/generateHtml");

const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const employee = [];

function init() {
    inquirer.prompt(managerQuestion).then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        employee.push(manager);
        console.log(employee);
        addEmployees();
    });
}
function addEmployees() {
    inquirer
        .prompt({
            type: "confirm",
            name: "choice",
            message: "Do you want to add a new employee?",
        })
        .then((answers) => {
            if (answers.choice === true) {
                menu();
            } else {
                console.log("teams success.");
                console.log(employee);
                fs.writeFileSync("./dist/team-profile.html", generateHtml(employee));
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
function menu() {
    inquirer
        .prompt({
            type: "list",
            name: "choice",
            message: "Please choose the following:",
            choices: ["engineer", "intern"],
        })
        .then((answers) => {
            if (answers.choice === "engineer") {
                addEngineer();
            } else {
                addIntern();
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
function addIntern() {
    inquirer.prompt(internQuestion).then((answers) => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        employee.push(intern);
        addEmployees();
    });
}
function addEngineer() {
    inquirer.prompt(engineerQuestion).then((answers) => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        employee.push(engineer);
        addEmployees();
    });
}
init();