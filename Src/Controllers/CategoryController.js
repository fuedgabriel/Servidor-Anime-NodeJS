const mongoose = require('mongoose');

const Category = mongoose.model('Category');

module.exports = {
  async insert(req, res)
  {
    const cat = await Category.create(req.body);
    return res.json(cat);
  },
  async select(req, res)
  {
    const cat = await Category.findById(req.params.id);
    return res.json(cat);
  },
  async all(req, res)
  {
    const cat = await Category.find();
    return res.json(cat);
  }
};