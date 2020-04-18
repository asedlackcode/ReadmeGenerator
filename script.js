const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const axios = require("axios");

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



const generateREADme = (answers, email, avatar_url) => {
    var str =  `#Project 
   ${answers.Project}

   #Description
   ${answers.Description}

   #Table of Contents
   ${answers.TableofContens}

   #Installation
   ${answers.Installation}

   #Usage
   ${answers.Usage}

   #License
   ${answers.License}

   #Contributing
   ${answers.Contributing}

   #Tests
   ${answers.Tests}

   #Github Email
   ${answers.githubEmail}
`
    axios.get("https://api.github.com/users/" + answers.githubEmail)
        .then(res => answers.githubEmail = (res.data.email))
        .catch(err => console.log(err));  
   

   return str
}

// 2 things to do 
// 1 finishi gerating readme
// 2 include response of API call to readme generation (coiuld do this first)


async function init() {
    try {
        const answers = await promptUser();
        const readme = generateREADme(answers, email, "https://asdf.com/url/to/avatar");
        await writeFileAsync("README.md", readme)
        console.log("success")
    }   catch(err){
        console.log(err)
    }
}
init();
