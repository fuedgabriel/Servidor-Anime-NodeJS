const mongoose = require('mongoose');
const Anime = mongoose.model('AnimeErro');



module.exports = {
    async insert(req, res) {
        const anime = await Anime.create(req.body);
        return res.json(anime);
    },

    async selectbyid(req, res) {
        const anime = await Anime.findById(req.params.id);
        return res.json(anime);
    },

    async select(req, res) {
        const { page = 1 } = req.query;
        const anime = await Anime.paginate({}, { page, limit: 15 });
        return res.json(anime);
    },
    async search(req, res) {
        const { name = B } = req.query;
        const anime = await Anime.find({ Title: RegExp(`^${name}`, 'gi') });
        return res.json(anime);
    },
};