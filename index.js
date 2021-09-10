const inquirer = require("inquirer");
const gen = require("./utils/generateMarkdown")
const questions = require ("./utils/data")


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(({title, Description, Installation, Usage, Contributing, Test,Username, Email, License}) => {
        const titleTep = gen.renderTitle(title);
        const badgeTep = gen.renderBadgeAndLink(License);
        const bodyTep = gen.renderBody(Description,Installation,Usage,Contributing,Test,Username,Email, License);
        const wholeTep = gen.renderWholeTemplate(titleTep, badgeTep, bodyTep)
        gen.writeToFile("README.md", wholeTep)

    })
}

// Function call to initialize app
init();
