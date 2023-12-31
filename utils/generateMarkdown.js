// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU General Public License (GPL)") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "Click [here](./utils/MIT.txt) to view this license!";
  } else if (license === "GNU General Public License (GPL)") {
    return "Click [here](./utils/GPL.txt) to view this license!";
  } else if (license === "Apache License 2.0") {
    return "Click [here](./utils/Apache.txt) to view this license!";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return "This project uses the MIT License.";
  } else if (license === "GNU General Public License (GPL)") {
    return "This project uses the GNU General Public License (GPL).";
  } else if (license === "Apache License 2.0") {
    return "This project uses the Apache License 2.0.";
  } else {
    return "";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // calling these functions within the generateMarkdown function
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `

${licenseBadge}

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
${licenseSection} ${licenseLink}

## Contributors
${data.contributing}

## Tests 
${data.tests}

## Questions 
### Contact me with questions: 
GitHub username: ${data.username}
GitHub profile: https://github.com/${data.username}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
