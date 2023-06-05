const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./util/generateMarkdown');
const licenseBadge = require('./util/licenseBadge').licenseBadge;
const questions = require('./util/questions').questions;

const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program and create README file
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = licenseBadge(answers.licenseBadge);
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("README.md", readMeData);
  } catch (err) {
    throw err;
  }
}

// function call to initialize program
init();

// End of line

