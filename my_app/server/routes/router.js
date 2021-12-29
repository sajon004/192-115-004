const express=require('express');
const route=express.Router();
const servicess=require('../servicess/render')


route.get('/',servicess.homeRoutes)

route.get('/add-book',servicess.add_book)

route.get('/update-book',servicess.update_book)

module.exports=route