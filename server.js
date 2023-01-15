const express=require('express');
const mongoose=require('mongoose')
const cardListRouter=require('./backend/routes/cardList-router')
const paragraphRouter=require('./backend/routes/paragraph-router')



const PORT=3000
const app = express();
// const URL='mongodb://0.0.0.0:27017/card'
const URL='mongodb+srv://admin:Byblik12@cluster0.qq7nash.mongodb.net/card?retryWrites=true&w=majority'


// 
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json())
app.use(cardListRouter)
app.use(paragraphRouter)

mongoose.set("strictQuery", false)
mongoose
    .connect(URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log('great connecting'))
    .catch((err)=>console.log(`Listening port ${PORT}`))

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});