// TODO: Include packages needed for this application - DONE

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
      type: "list", // list makes the user select only one option unlike checkbox
      message: "Select which license you would like",
      choices: [
        "MIT License",
        "GNU General Public License (GPL)",
        "Apache License 2.0",
        "I do not wish to select a license",
      ],
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
    const readme = generateMarkdown(data);

    // TODO: Create a function to write README file
    fs.writeFile("template.md", readme, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Success");
      }
    });
  });
