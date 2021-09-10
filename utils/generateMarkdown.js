// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const generateMarkdown = require("./utils/generateMarkdown")
//console.log(inquirer);

const renderTitle = (title) => {return `# ${title}`};

const renderBadgeAndLink = (License) =>{
    switch (License) {
        case "Apache 2.0 License":
          return  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
          break;
        case "Boost Software License 1.0":
          return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
          break;
        case "BSD 3-Clause License":
           return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
          break;
        case "BSD 2-Clause License":
           return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
          break;
        case "The MIT License":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
          break;
      
        default:
          break;
      }
      if (License) return `## ${License}`

};
const renderBody = (Description,Installation,Usage,Contributing,Test,Username,Email, License) => {
    //if(License) {const license = "License: We are licensed under"}
    
return `#### Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Test](#Test)
* [Questions](#Questions)
### Description: ${Description}
### Installation: ${Installation}
### Usage: ${Usage}
### Contributing: ${Contributing}
### Test: ${Test}
### Questions: For further questions, please contact
[GitHub](https://github.com/${Username})

[E-mail](${Email})
### We are licensed under ${License}`
        };
const renderWholeTemplate = (...wholeTemplate) => {
    return `${wholeTemplate.join("\n")}`
};


// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err) console.log(err);
        console.log("Success")
    })

}

module.exports = {renderTitle, renderBadgeAndLink, renderBody, renderWholeTemplate, writeToFile};
