const express=require('express');
const mongoose=require('mongoose')
const cardListRouter=require('./backend/routes/cardList-router')

const PORT=3000
const app = express();
const URL='mongodb://0.0.0.0:27017/card'
// 
app.use(express.json())
app.use(cardListRouter)
mongoose.set("strictQuery", false)
mongoose
    .connect(URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log('great connecting'))
    .catch((err)=>console.log(`Listening port ${PORT}`))

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});