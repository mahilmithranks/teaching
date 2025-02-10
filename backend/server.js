const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());

app.get("/main",(req,res)=>{
    res.send("hello")
})

app.post("/main",(req,res)=>{
    res.send("")
})






                                                     