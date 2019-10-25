const genHTML = require("./generateHTML");
const inquirer = require("inquirer");
const axios = require("axios");
const PDFDoctument = require('phantom-html2pdf');
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "username",
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


}

function init() {
    inquirer.prompt(questions).then(function(data) {
        let queryURL = `https://api.github.com/users/${data.username}`;
        console.log(queryURL);
        axios
        .get(queryURL).then(response => {
            console.log(`Name: ${response.data.name} Profile Image: ${response.data.avatar_url} Location: ${response.data.location} GitHub Profile: ${response.data.html_url} Blog: ${response.data.blog} Bio: ${response.data.bio} Public Repos: ${response.data.public_repos} Followers: ${response.data.followers} `);
        }) 
    });
}

init();
