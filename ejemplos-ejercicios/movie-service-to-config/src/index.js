'use strict'
const {EventEmitter} = require('events')
const server = require('./server')
const repository = require('./repository')

const {dbSettings, serverSettings} = require('./config')
const db = require('./mongo')

const config = Object.assign({}, {dbSettings, serverSettings, db})

const mediator = new EventEmitter()

console.log('--- Movies Service ---')
console.log('Connecting to movies repository...')

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err)
})

mediator.on('db.ready', (db) => {
  let rep
  repository.connect(db)
    .then(repo => {
      console.log('Connected. Starting Server')
      rep = repo
      return server.start({
        port: config.serverSettings.port,
        ssl: config.serverSettings.ssl,
        repo
      })
    })
    .then(app => {
      console.log(`Server started succesfully, running on port: ${config.serverSettings.port}.`)
      app.on('close', () => {
        rep.disconnect()
      })
    })
})

mediator.on('db.error', (err) => {
  console.error(err)
})

config.db.connect(config.dbSettings, mediator)

mediator.emit('boot.ready')
