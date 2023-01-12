const paragraph=require('../models/cardList')

const handlErrors=(res,error)=>{
    res.status(505).json({error})
}

const getParagraphs=(req, res)=>{
    paragraph
        .find()
        .distinct("paragraph.title")
        .then((paragraphs)=>{
            res
                .status(200)
                .json(paragraphs)
        })
        .catch((err)=>handlErrors(req, res))
}

module.exports={
    getParagraphs
}