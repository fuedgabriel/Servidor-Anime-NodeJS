const mongoose = require('mongoose');
const Anime = mongoose.model('Anime');
const Video = mongoose.model('Video');



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
  async lancamento(req, res) {
    const anime = await Video.find({ "sended": "2019-12-26T11:26:33.560Z" });
    var lista;
    var saida = [{ '_id': '0' }];
    var result = [];
    var a;
    for (x in anime) {
      for (i in saida) {
        if (saida[i]['_id'].toString().includes(anime[x]['idAnime'])) {
          result.push('true')
          a = false;
          break;
        }
        else {
          a = true;
          result.push('false')
        }
      }

      if (a) {
        lista = await Anime.find({ "_id": anime[x]['idAnime'] });
        saida.push(lista[0]);
      }
    }
    saida.shift()
    return res.json(saida);
  },
  async category(req, res) {
    var json = req.body;
    json = json.Category;
    const send = await Anime.find({ Category: RegExp(json[0], 'gi') });
    return res.json(send);
  },
};