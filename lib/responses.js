'use strict'

const dedent = str => str.replace(/[ ]/g, ' ')

const help = screenName => {
  return dedent(
    `Hi ${'@' + screenName}, here are the things I know so far:\n - help\n - rules\n - hello
    \n\nMention me "@fun-bot" + one of these commands and I'll respond.`
  )
}

const rules = () => {
  return dedent(
    `Here are the rules:
    \n- Fork and clone the repo
    \n- Create a directory inside the directory for the issue you are solving.
    Name the new directory after your username.
    All the files you need to solve the issue should go in there
    \n- The preferred language is JavaScript
    \n- If an issue has tests the solution should pass those before being submitted
    \n- Create a pull request`
  )
}

const greet = (screenName, keyword) => `${keyword}, ${'@' + screenName}!`
 
const open = screenName => `I'm sorry ${'@' + screenName}, I'm afraid I can't do that.`

module.exports = {
  help,
  rules,
  greet,
  open
}

