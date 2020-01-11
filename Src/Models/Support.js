const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    Id_User: {
        required: true,
        type: String,
    },
    Tipo: {
        required: true,
        type: Number,
    },
    Anime: {
        required: false,
        type: String,
    },
    IdAnime: {
        required: false,
        type: String,
    },
    Message: {
        require: true,
        type: String,
    },
    Date: {
        require: false,
        type: Date,
        default: Date.now
    }

});

mongoose.model('Support', UsersSchema)