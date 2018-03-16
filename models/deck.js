/**
 * Deck Model
 */

const { Model } = require('mongorito')
const Tag = require('./tag')

class Deck extends Model {}

Deck.embeds('tags', Tag)

module.exports = Deck
