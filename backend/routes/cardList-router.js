
const express=require('express')
const { getCardList }=require('../controllers/cardList-controllers')
const router=express.Router()

router.get('/cards', getCardList)

module.exports=router