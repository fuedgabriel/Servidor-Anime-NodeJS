const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AnimeSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: String,
    },
    Title: {
        required: true,
        type: String,
    },
    Episodes: {
        required: true,
        type: Number
    },
    url: {
        required: true,
        type: String
    },
    user: {
        required: true,
        type: String
    }
});
AnimeSchema.plugin(mongoosePaginate);

mongoose.model('AnimeErro', AnimeSchema)