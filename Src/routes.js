const express = require('express');
const routes = express.Router();

//Controllers
const anime = require('./Controllers/AnimeController');
const animeErro = require('./Controllers/AnimeErroController');
const video = require('./Controllers/VideoController');
const Category = require('./Controllers/CategoryController');
const Seasons = require('./Controllers/SeasonsController');
const cat = require('./Controllers/UsersController');
const Support = require('./Controllers/Support');

//anime-info-Erro
routes.get('/animeErro/:id', animeErro.selectbyid);
routes.get('/animeErroSearch', animeErro.search);
routes.get('/animeErro', animeErro.select);
routes.post('/animeErro', animeErro.insert);

//anime-info
routes.get('/anime/:id', anime.selectbyid);
routes.get('/animeSearch', anime.search);
routes.get('/anime', anime.select);
routes.post('/anime/category/', anime.category);
routes.post('/anime/release/', anime.lancamento);
routes.post('/anime', anime.insert);


//video
routes.post('/video', video.insert);
routes.get('/video', video.search);
routes.get('/video/:id', video.SearchId);
routes.get('/video/anime/:idAnime', video.selectbyid);
//Category
routes.get('/Category', Category.all);
routes.get('/Category/:id', Category.select);
routes.post('/Category', Category.insert);
//Seasons
routes.get('/Seasons/:ids', Seasons.select);
routes.post('/Seasons', Seasons.insert);
//Users
routes.post('/User', cat.insert);
routes.post('/User/id', cat.selectbyid);
routes.get('/User/all', cat.selectall);
routes.put('/User/', cat.update);

//Support
routes.get('/Support/id/:id', Support.selectIdUser);
routes.get('/Support/type/:id', Support.selectTipo);
routes.get('/Support/all', Support.selectAll);
routes.post('/Support', Support.insert);

module.exports = routes;