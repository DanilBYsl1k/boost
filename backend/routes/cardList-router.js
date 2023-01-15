
const express=require('express')
const { 
    getCardList,
    getPagraphCardList,
    getCard
}=require('../controllers/cardList-controllers')

const router=express.Router()

router.get('/cards', getCardList)

router.get('/cards/:paragraph', getPagraphCardList)

router.get('/card/:id',getCard)

module.exports=router