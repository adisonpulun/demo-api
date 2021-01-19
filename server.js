const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080


app.get("/",(req,res)=>{
    res.json({result: "OK" ,data:["Hello Node.js" , "Hello Heroku"]})
})

app.listen(PORT , ()=> {
    console.log(`Sere is Running. ${PORT}`)
})