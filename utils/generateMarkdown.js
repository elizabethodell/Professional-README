

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description
  ${data.description}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
  # Table of Contents
  * [Installation](##installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  # Usage
  In order to use this app, ${data.installation}
  
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
