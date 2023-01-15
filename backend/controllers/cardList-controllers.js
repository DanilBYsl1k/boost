
const cardList=require('../models/cardList')

const handlErrors=(res,error)=>{
    res.status(505).json({error})
}

const getCardList=(req, res)=>{
    cardList
        .find()
        .then((cardList)=>{
            res
                .status(200)
                .json(cardList)
        })
        .catch((err)=> handlErrors(req, res))
}

const getPagraphCardList=(req,res)=>{
    cardList
        .find({"paragraph.title":req.params.paragraph})
        .then(cardListParagraph=>{
            res
                .status(200)
                .json(cardListParagraph)
        })
        .catch((err)=> handlErrors(req, res))
}
const getCard=(req,res)=>{
    cardList
        .findById(req.params.id)
        .then(card=>{
            res
                .status(200)
                .json(card)
        })
        .catch((err)=> handlErrors(req, res))
}
module.exports={
    getCardList,
    getPagraphCardList,
    getCard
}