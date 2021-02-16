const {Router}=require('express');
const { getPersons, getPerson } = require('../controllers/person');
const router=Router();
router.get('/personas',getPersons);
router.get('/personas/:id',getPerson);
module.exports=router;