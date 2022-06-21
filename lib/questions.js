const managerQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is your Manager's name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is your Manager's ID",
    },

    {
        type: "input",
        name: "email",
        message: "What is your Manager's Email Address",
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is your Manager's Office number",
    },
];

const internQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is your Intern's name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is your Intern's ID",
    },

    {
        type: "input",
        name: "email",
        message: "What is your Intern's Email Address",
    },

    {
        type: "input",
        name: "school",
        message: "What is your Intern's School",
    },
];

const engineerQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is your Engineer's name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is your Engineer's ID",
    },

    {
        type: "input",
        name: "email",
        message: "What is your Engineer's Email Address",
    },

    {
        type: "input",
        name: "github",
        message: "What is your Engineer's Office GitHub",
    },
];

module.exports = { managerQuestion, internQuestion, engineerQuestion };
