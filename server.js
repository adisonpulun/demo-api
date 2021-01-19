require("dotenv").config()
const express = require('express');
const app = express()
const PORT = process.env.PORT || 8080;


app.get("/" , (req ,res) => {
    res.json({result: "ok" , data:["hello"]})
})

app.listen(PORT , ()=>{
    console.log(`Server is running . ${PORT}`)
    console.log(process.env.CLEARDB_DATABASE_URL);
})