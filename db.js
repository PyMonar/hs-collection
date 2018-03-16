const { Database } = require('mongorito')
const db = new Database('localhost/hscollection')

const Card = require('./models/card')

// register all models
db.register(Card)

module.exports = db