const genHTML = require("./generateHTML.js");
const inquirer = require("inquirer");
const axios = require("axios");
const PDFDoctument = require('html-pdf');
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
    fs.writeFile(fileName, genHTML.generateHTML(data), function(err) {
        if (err) throw err;
        console.log("Successfully saved!");
    })
}

function init() {
    inquirer.prompt(questions).then(function(userInfo) {
        let queryURL = `https://api.github.com/users/${userInfo.username}`;
        axios
        .get(queryURL).then(response => {
            Object.assign(userInfo, response.data);
            writeToFile(`${userInfo.username}Profile.html`, userInfo);
        }, e => {
            console.log(`The file could not be generated. Reason: user does not exist.`);
        })
    });
}

init();

// var thisThing = [{color: "red"}, {name: "Ayo"}];

// writeToFile("index.html", thisThing);