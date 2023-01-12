const express=require('express')
const {getParagraphs}=require('../controllers/paragraph-controllers')
const router=express.Router()

router.get('/paragraphs', getParagraphs)


module.exports=router