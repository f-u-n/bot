'use strict'
module.exports = {
  help: screenName => {
    let response = `Hi ${'@' + screenName}, here are the things I know so far:\n`
    response = `${response} - help\n - rules\n - hello\n\n`
    response = `${response}Mention me "@fun-bot" + one of these commands and I'll respond`
    return response
  },
  rules: _ => {
    let response = `Here are the rules:\n`
    response = `${response} - Fork and clone the repo\n`
    response = `${response} - Create a directory inside the directory for the issue you are solving. Name the new directory after your username. All the files you need to solve the issue should go in there\n`
    response = `${response} - The preferred language is JavaScript\n`
    response = `${response} - If an issue has tests the solution should pass those before being submitted.\n`
    response = `${response} - Create a pull request.`
    return response
  },
  greet: (screenName, keyword) => {
    return `${keyword}, ${'@' + screenName}!`
  },
  open: screenName => {
    return `I'm sorry ${'@' + screenName}, I'm afraid I can't do that.`
  }
}
