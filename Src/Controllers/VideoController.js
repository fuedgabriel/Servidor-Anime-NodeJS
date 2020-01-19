const mongoose = require('mongoose');

const Video = mongoose.model('Video');

module.exports = {
  async insert(req, res) {
    const Videos = await Video.create(req.body);

    return res.json(Videos);
  },
  async search(req, res) {
    const Videos = await Video.find();
    return res.json(Videos)
  },
  async SearchId(req, res) {
    const Videos = await Video.findById(req.params.id);
    return res.json(Videos)
  },
  async selectbyid(req, res) {
    const Videos = await Video.find({ "idAnime": req.params.idAnime }).sort({ "episode": 1 });
    return res.json(Videos);
  },


};