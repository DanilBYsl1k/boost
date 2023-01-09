const mongoose=require('mongoose')

const Schema=mongoose.Schema

const cardListShema= new Schema({
    title:{
        type:String,
        require:true
    },
    // price:{
    //     type:Number,
    //     require:true
    // },
    // params:[String],
    // img:{
    //     type:String,
    //     require:true
    // },
    // paragraph:{
    //     color:String,
    //     title:String
    // },
    // timeSale:Number
})

const cardList=mongoose.model('cardList', cardListShema)

module.exports=cardList