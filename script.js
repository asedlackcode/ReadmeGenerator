const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const writeFileAsync = util.promisify(fs.writeFile)

let promptUser = () => {
    return inquirer.prompt([{
        type: "input",
        name: "Project",
        message: "Project Title"
    },
    {
        type: "input",
        name: "Description",
        message: "Description"
    },
    {
        type: "input",
        name: "TableofContens",
        message: "Table of Contents"
    },
    {
        type: "input",
        name: "Installation",
        message: "Installation"
    },
    {
        type: "input",
        name: "Usage",
        message: "Usage"
    },
    {
        type: "input",
        name: "License",
        message: "License"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Contributing"
    },
    {
        type: "input",
        name: "Tests",
        message: "Tests"
    },
    {
        type: "input",
        name: "githubEmail",
        message: "GitHub Email"
    },
    
        
])};

const generateREADme = (answers) => {
    return fs.writeFile("README.md", answers(err)) 
        if (err) throw err;
        console.log("it worked");
    };


async function init() {
    try {
        const answers = await promptUser();
        const readme = generateREADme(answers);
        await writeFileAsync("README.md", readme)
        console.log("success")
    }   catch(err){
        console.log(err)
    }
}
init();
