'use strict'

const Gitter = require('node-gitter')
const gitter = new Gitter(process.env.gitterToken)
const handleCommands = require('./lib/handleCommands')
const botName = 'fun-bot'
const roomName = 'f-u-n/playtime'

gitter.currentUser()
  .then((user) => console.log('You are logged in as:', user.username))
  .then(() => {
    gitter.rooms.join(roomName)
      .then((room) => {
        console.log('Joined room: ', room.name)
        let events = room.streaming().chatMessages()
        events.on('chatMessages', (message) => {
          if (message.model.mentions && message.model.mentions.filter(m => m.screenName === botName).length && message.model.fromUser.username !== botName) {
            room.send(handleCommands(message.model.text, message.model.fromUser.username))
          }
        })
      })
      .fail((err) => console.log('Not possible to join the room: ', err))
  })
  .fail((err) => console.log('Not possible to login: ', err))

