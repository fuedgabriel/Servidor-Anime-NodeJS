const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  idAnime: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    required: true,
    type: String,
  },
  episode: {
    required: true,
    type: String
  },
  season: {
    required: true,
    type: String,
  },
  sended: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
    required: false,
  },
  preview: {
    type: String,
    required: false,
  }
});

mongoose.model('Video', VideoSchema)