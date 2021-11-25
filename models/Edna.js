const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  schema: { type: String, default: 'edna', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Edna extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Edna
