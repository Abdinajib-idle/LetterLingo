const express=require("express")
var request = require('request');
const { name } = require('ejs');
const randomWord=require('random-word')
const googleDictionaryApi = require("google-dictionary-api")
const path = require('path')
const PORT=process.env.DATABASE_URL||5000

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('/server'))


// app.get("/test",(req,res)=>{
//     try{
//     const result=randomWord();
//     // res.send(result);
//     googleDictionaryApi.search(result,'en')
//     .then(results=>{
//       res.send(results[0].meaning)
//     })
//     .catch(error=>{
//       console.log(error)
//     })
// }catch(err){
//     res.send("Error")
// }
// })
// results[0].word==>word
// result[0].meaning.noun
// results[0].meaning.noun[0].definition
// result[0].meaning.noun[0].example

app.get("/test",(req,res)=>{
request({url: 'https://random-words-serve.herokuapp.com/data', json: true}, function(err, res, json) {
  if (err) {
    throw err;
  }
  console.log(json);

})})

app.listen(PORT,()=>console.log(`Server Started on port ${PORT}`))