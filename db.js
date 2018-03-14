const { Database } = require('mongorito')
const Card = require('./models/card')
const db = new Database('localhost/hscollection')

db.register(Card)

async function saveData () {
  await db.connect()
  let cards = await Card.queryByName('愤怒的小鸡2')
  console.log(cards[0].get())
  await db.disconnect()
}

saveData()
