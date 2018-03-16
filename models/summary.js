/**
 * Summary Model
 */

const { Model } = require('mongorito')
const Tag = require('./tag')

class Summary extends Model {}

Summary.embeds('tags', Tag)

module.exports = Summary
