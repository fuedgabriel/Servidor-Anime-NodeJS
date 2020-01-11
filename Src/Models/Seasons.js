const mongoose = require('mongoose');

const SeasonsSchema = new mongoose.Schema({
  Anime:{
    required: true,
    type: String
  },
  SeasonName:{
    required: true,
    type: String
  }
});

mongoose.model('Seasons', SeasonsSchema)