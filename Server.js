const express = require("express");

const app = express();

const { MongoClient}= require("mongodb");

const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL);

app.listen(5100,function()
{

    console.log("Marvellous server is started successfuly");

})

//Handling Cors

app.use ((req,res,next)=>
{
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");

    res.header("Acess-Controll-Allow-Headers","Origin, X-Requiested, Content-Type,Accept");

    next();
});


async function getConnection()
{
     let result = await client.connect();        
     let db = result.db("Marvellous");    
     return db.collection("Batches");
}

app.get('/',async function readData(req,res)
{
     let data = await getConnection();
     data = await data.find().toArray();
     res.send(data);

});