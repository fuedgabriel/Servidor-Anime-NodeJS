const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  Name:{
    type: String,
    required: true
  }
});
mongoose.model('Category',CategorySchema )