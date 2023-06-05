// array of questions for user
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      message: "Please describe your project using one sentence:",
      name: "description",
    },
    {
      type: "input",
      message: "Please explain your project and its functions:",
      name: "about",
    },
    {
      type: "input",
      message: "How did you install your project in 3 or more steps?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is link to clone your repo locally?",
      name: "clone",
    },
    {
      type: "list",
      name: "license",
      message: "Please select the license you used for this project.",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla",
        "MIT",
        "Apache",
        "Boost",
      ],
    },
    {
      type: "input",
      message: "Please enter any testing protocols you used for your project?",
      name: "test",
    },
    {
      type: "input",
      name: "author",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "userEmail",
      message: "What is your email?",
    },
    {
     type: "input",
     name: "URL",
     message: "What is the URL for the live site?",
    },
    {
      type: "input",
      name: "repo",
      message: "What is the URL of the github repo?",
    },
  ];
  
  module.exports = {
    questions: questions,
  };