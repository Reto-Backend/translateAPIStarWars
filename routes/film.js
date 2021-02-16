const {Router}=require('express');
const { getPelicula,getPeliculas } = require('../controllers/film');
const router=Router();
router.get('/peliculas',getPeliculas);
router.get('/peliculas/:id',getPelicula);
module.exports=router;