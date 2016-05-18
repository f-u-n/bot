'use strict'
module.exports = (message, screenName) => {
  const commands = require('./commands')
  const responses = require('./responses')
  for (const command in commands) {
    for (const keyword of commands[command]) {
      if (message.toLowerCase().includes(keyword)) {
        return responses[command](screenName, keyword)
      }
    }
  }
  return responses.help(screenName)
}
