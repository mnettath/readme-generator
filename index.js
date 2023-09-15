// TODO: Include packages needed for this application - DONE

const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  // list of questions
  .prompt([
    {
      type: "input",
      message: "Enter the title of your project",
      name: "title",
    },
    {
      type: "input",
      message: "Enter the description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "Enter the instructions for installation",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter the usage information",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter the license information",
      name: "license",
    },
    {
      type: "input",
      message: "Enter any contributors",
      name: "contributors",
    },
    {
      type: "input",
      message: "Enter any tests",
      name: "tests",
    },
    {
      type: "input",
      message: "Enter your GitHub username",
      name: "username",
    },
    {
      type: "input",
      message: "Enter your email",
      name: "email",
    },
  ])
  // return the data when we get a user input
  .then((data) => {
    console.log(data);

    // calls the init function and passes the data we collected to it
    const readme = init(data);

    // TODO: Create a function to write README file
    fs.writeFile("template.md", readme, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Success");
      }
    });
  });

// TODO: Create a function to initialize app
function init(data) {
  return `
#${data.title}

## Description
${data.description}

## Table of Contents 
- [Installation](#installation) 
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Tests 
${data.tests}

## Questions 
Contact me with questions: 
GitHub username: ${data.username}
GitHub profile: https://github.com/${data.username}
Email: ${data.email}
`;
}
