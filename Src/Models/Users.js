const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  Name: {
    required: true,
    type: String
  },
  Nick: {
    required: true,
    type: String
  },
  Password: {
    required: true,
    type: String
  },
  Email: {
    required: true,
    type: String
  },
  Nasc: {
    required: true,
    type: Date,
    default: Date.now

  }
});

mongoose.model('Users', UsersSchema)