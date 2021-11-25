const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Edna = require('../models/Edna')

class EdnaController extends Controller {
  constructor () {
    super(Edna, process.env)
  }

  async get (params) {
    const ednas = await Edna.find(params, Controller.parseFilters(params))
    return Edna.convertToJson(ednas)
  }

  async getById (id) {
    const edna = await Edna.findById(id)
    if (edna == null) {
      throw new Error(`${Edna.resourceName} ${id} not found.`)
    }

    return edna.summary()
  }

  async post (body) {
    const edna = await Edna.create(body)
    return edna.summary()
  }

  async put (id, params) {
    const edna = await Edna.findByIdAndUpdate(id, params, { new: true })
    return edna.summary()
  }

  async delete (id) {
    const edna = await Edna.findByIdAndRemove(id)
    return edna
  }
}

module.exports = new EdnaController()

