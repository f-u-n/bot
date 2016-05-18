'use strict'

const Gitter = require('node-gitter')
const gitter = new Gitter('token')
const botName = 'fun-bot'
const roomName = 'bjdixon/fun-bot-test'

gitter.currentUser()
  .then((user) => console.log('You are logged in as:', user.username))
  .then(() => {
    gitter.rooms.join(roomName)
      .then((room) => {
        console.log('Joined room: ', room.name)
        room.send('Hello world!')
        let events = room.streaming().chatMessages()
        events.on('chatMessages', (message) => {
          if (message.model.mentions && message.model.mentions.filter(m => m.screenName === botName).length) {
            console.log(`${botName} was mentioned`)
          }
        })
      })
      .fail((err) => console.log('Not possible to join the room: ', err))
  })
  .fail((err) => console.log('Not possible to login: ', err))

