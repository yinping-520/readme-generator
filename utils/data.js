 const questions = [
    {
        type: "input",
        message: "What is the title of your README.me?",
        name: "title"},
    {
        type: "input",
        message: "Write a description about your Project.(what is your motivation? why did you build this project? what problem does it solve?)",
        name: "Description"
    },
    {
        type: "input",
        message: "How to install your Application?",
        name: "Installation"
    },
    {
        type: "input",
        message: "How to use your Application?",
        name: "Usage"
    
    },
    {
        type: "input",
        message: "How do people contribute to you Application?",
        name: "Contributing"

    },
    {
        type: "input",
        message: "How can people test your Application?",
        name: "Test"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "Username"
    },
    {
        type: "input",
        message: "What is your E-mail address?",
        name: "Email"
    },
    {
        type: "list",
        message: "What license do you have?",
        choices: ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "The MIT License" ],
        name: "License"
    }
    
];

module.exports = questions;
