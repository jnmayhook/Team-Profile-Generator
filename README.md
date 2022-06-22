# Team-Profile-Generator

## Description 
  
This application runs via the command line using Node.js, and based on the user's input takes in information about employees on a software engineering team, and then generates a nicely formatted HTML webpage with the team roster, based on the users input.  The application also uses Jest for running the unit tests and Inquirer for collecting input from the user. 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Questions](#questions)
  

## Installation

From within the command line, run the following command: `npm install` or `npm i` to download Node Package Manager (NPM).  Then enter `node -v` and `npm -v` to confirm you have Node installed. 

Now you can run the application. 


## Usage 

To start, enter `node ./index.js` . 

![app demo]()

The application prompts you with a series of questions:
- What is your Managers name?  What is your Manger's ID?  What is your Manger's Email Address?  What is your Managers Office number? 
- What is your Intern's name?  What is your Intern's ID?  What is your Intern's Email Address?  What is your Intern's School? 
- What is your Engineer's name?  What is your Engineer's ID?  What is your Engineer's Email Address?  What is your Engineer's Git Hub profile? 

When all the questions are answered a Team Profile file is dynamically outputted in the dist folder, here - [/dist/team-profile.html](https://github.com/jnmayhook/Team-Profile-Generator/blob/main/dist/team-profile.html).  


## Technologies

- HMTL/CSS
- JavaScript
- Node
- Inquirer
- Jest

---

## Questions?
Feel free to contact me with questions via the information below:

GitHub profile: [@jnmayhook](https://github.com/jnmayhook)

GitHub repo: [github.com/jnmayhook/Team-Profile-Generator](https://github.com/jnmayhook/Team-Profile-Generator)