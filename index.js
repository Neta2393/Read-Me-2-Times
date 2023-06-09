// The lines of code below defines each variable
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./util/generateMarkdown.js');
const licenseBadge = require('./util/licenseBadge.js').licenseBadge;
const questions = require('./util/questions.js').questions;
const writeFileAsync = util.promisify(fs.writeFile);
// The below lines of code is the functions that writes the new README
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

