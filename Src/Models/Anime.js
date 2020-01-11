const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AnimeSchema = new mongoose.Schema({
  Title: {
    required: true,
    type: String,
  },
  English: {
    required: false,
    type: String,
  },
  Japanese: {
    required: false,
    type: String
  },
  Synopse: {
    required: true,
    type: String
  },
  Seasons: {
    required: true,
    type: Number
  },
  Status: {
    required: true,
    type: String
  },
  Category: {
    required: true,
    type: String
  },
  Studio: {
    required: false,
    type: String
  },
  Episodes: {
    required: true,
    type: Number
  },
  Score: {
    required: true,
    type: Number
  },
  air: {
    required: true,
    type: Date
  },
  age: {
    required: true,
    type: Number
  },
  url: {
    required: true,
    type: String
  }
});
AnimeSchema.plugin(mongoosePaginate);

mongoose.model('Anime', AnimeSchema)