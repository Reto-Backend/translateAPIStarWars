const {Router}=require('express');
const { getStarships, getStarship } = require('../controllers/starship');
const router=Router();
router.get('/naves',getStarships);
router.get('/naves/:id',getStarship);
module.exports=router;