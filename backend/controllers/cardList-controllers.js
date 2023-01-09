
const cardList=require('../models/cardList')

const handlErrors=(res,error)=>{
    res.status(505).json({error})
}

const getCardList=(req, res)=>{
    cardList
        .find()
        .then((cardList)=>{
            console.log(cardList)
            res
                .status(200)
                .json(cardList)
        })
        .catch((err)=> handlErrors(res,req))
}

module.exports={
    getCardList
}