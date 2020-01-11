const mongoose = require('mongoose');

const Support = mongoose.model('Support');


module.exports = {
    async insert(req, res) {
        const cat = await Support.create(req.body);
        return res.json(cat);
    },
    async selectIdUser(req, res) {
        const cat = await Support.find({ Id_User: req.params.id });
        return res.json(cat);
    },
    async selectTipo(req, res) {
        const cat = await Support.find({ Tipo: req.params.id });
        return res.json(cat);
    },
    async selectAll(req, res) {
        const cat = await Support.find();
        return res.json(cat);
    }
};