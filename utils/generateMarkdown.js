// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  http://github.com/${data.github}

  # Description
  ${data.description}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  * #Installation
  
  # Usage
  In order to use this app, ${data.usage}
  
  # Contribution 
  ${data.contribution}

  # Instructions
  ${data.instructions}

  # Tests
  ${data.test}

  # License
  This project is licensed under (http://opensource.org/licenses/${data.license})


  # Questions
  If you have any questions, please contact at http://github.com/${data.github} or my email ${data.email}

`;
}

module.exports = generateMarkdown;
