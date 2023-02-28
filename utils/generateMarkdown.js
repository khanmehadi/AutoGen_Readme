// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'APACHE 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'BOOST 1.0') {
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'NONE') {
      return '';
    }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return `## \n [License](#license)\n`
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== 'NONE' ? `## Licensed under ${license}` : ''; 
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Project
  ${data.projectname}
  #
  ##
  
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  #
  ##

  ## Description
  ${data.description}
  #
  ##

  ## Table of Contents
  * [Usage](#usage)
  * [Installation](#installation)
  * [Credits](#credits)
  * [Contributing](#contributin)
  * [Dependencies](#dependencies)
  * [Test](#test)
  * []
  
  ## Usage
  ${data.usage}
  #
  ##

  ## Installation
  ${data.installation}
  #
  ##

  ## Credits
  ${data.contributors}  
  #
  ##

  ## Dependencies
  ${data.dependencies}
  #
  ##

  ## Test
  ${data.test}
  #
  ##

  ## GitHub
  #### Username
  ${data.username}
  #### Repo
  [GitHub Repo](https://github.com/khanmehadi/AutoGen_Readme)
`
}

module.exports = generateMarkdown;