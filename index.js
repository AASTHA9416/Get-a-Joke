import express from "express";
import axios from "axios";


const app=express();
app.use(express.static("public"));

const port=3000;

app.get("/",(req,res)=>{
 res.render("index.ejs");
});

app.post("/getJoke",async(req,res)=>{
    try{
 const response=await axios.get("https://v2.jokeapi.dev/joke/Any?lang=en");
 console.log(response.data);
 const setup=response.data.setup;
 const delivery=response.data.delivery;
 res.render("index.ejs",{
    setup:setup,
    delivery:delivery

 });
    }

 catch(error){
 console.log("there is a error: "+error.response.data);
 res.status(500);
 }
});





app.listen(port,()=>{
console.log(`Server is running at port ${port}`);
});