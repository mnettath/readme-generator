// TODO: Include packages needed for this application - DONE

// TODO: Create an array of questions for user input
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
      message: "Enter the table of contents of your project",
      name: "table of contents",
    },
    {
      type: "input",
      message: "Enter the instructions for installation",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter the usage",
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
      message: "Enter an questions",
      name: "questions",
    },
  ])
  // return the data when we get a success
  .then((data) => {
    console.log(data);

    // format data into a string
    const readme = JSON.stringify(data);

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
function init() {}

// Function call to initialize app
init();
