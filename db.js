const { Database } = require('mongorito')
const Card = require('./models/card')
const db = new Database('localhost/hscollection')

db.register(Card)

let card = new Card({
  name: '愤怒的小鸡2',
  year: 0,
  expansion: 0,
  game_type: 0,
  rarity: 2,
  card_class: 0,
  card_type: 1,
  count: 1,
  intention: 0,
  url: ''
})

async function saveData () {
  await db.connect()
  let cards = await Card.find()
  console.log(cards[0].get())
  console.log(cards[1].get())
  await db.disconnect()
}

saveData()
