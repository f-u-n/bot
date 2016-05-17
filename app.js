'use strict'

const Gitter = require('node-gitter')

const gitter = new Gitter('token')
const roomName = 'bjdixon/fun-bot-test'

gitter.currentUser()
  .then((user) => console.log('You are logged in as:', user.username))
  .then(() => {
    gitter.rooms.join(roomName)
      .then((room) => {
        console.log('Joined room: ', room.name)
        room.send('Hello world!')
        let events = room.streaming().chatMessages()

        // The 'chatMessages' event is emitted on each new message
        events.on('chatMessages', (message) => {
          console.log('A message was ' + message.operation)
          console.log('Text: ', message.model.text)
        })
      })
      .fail((err) => console.log('Not possible to join the room: ', err))
  })
  .fail((err) => console.log('Not possible to login: ', err))

