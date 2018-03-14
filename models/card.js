/**
 * Card Model
 */

const { Model } = require('mongorito')

class Card extends Model {
  static queryByName (name) {
    return Card.find({name: name})
  }
}

module.exports = Card
