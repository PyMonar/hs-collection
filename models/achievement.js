/**
 * Achievement Model
 */

const { Model } = require('mongorito')
const Tag = require('./tag')

class Achievement extends Model {}

Achievement.embeds('tags', Tag)

module.exports = Achievement
