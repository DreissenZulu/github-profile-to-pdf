var inquirer = require("inquirer");
var fs = require('fs');

const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter your Github username now: "
    },
    {
        type: "list",
        message: "So, what's your favourite colour? ",
        name: "color",
        choices: [
            "green",
            "blue",
            "pink",
            "red"
        ]
    }
];

function writeToFile(fileName, data) {
    let queryURL = `https://api.github.com/users/${data.name}`
    $.get(queryURL).then(response => {
        console.log(fileName);
        console.log(`Name: ${response.name} Profile Image: ${response.avatar_url} Location: ${response.location} GitHub Profile: ${response.html_url} Blog: ${response.blog} Bio: ${response.bio} Public Repos: ${response.public_repos} Followers: ${response.followers} `);
    }) 

}

function init() {
    inquirer.prompt(questions).then(writeToFile(questions.name, data));
}

// init();
inquirer.prompt(questions).then(writeToFile("GitHub User", data));