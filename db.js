const config = require('./config')

const { Database } = require('mongorito')
const db = new Database(config.db)

const Card = require('./models/card')
const Achievement = require('./models/achievement')
const Summary = require('./models/summary')
const Deck = require('./models/deck')
const Tag = require('./models/tag')
const Enum = require('./models/enum')

// register all models
db.register(Card)
db.register(Achievement)
db.register(Summary)
db.register(Deck)
db.register(Tag)
db.register(Enum)

module.exports = db
