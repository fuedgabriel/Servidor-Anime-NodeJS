const mongoose = require('mongoose');

const Seasons = mongoose.model('Seasons');

module.exports = {
  async insert(req, res)
  {
    const cat = await Seasons.create(req.body);
    return res.json(cat);
  },
  async select(req, res)
  {
    const cat = await Seasons.find({anime: req.params.id});
    return res.json(cat);
  },
};