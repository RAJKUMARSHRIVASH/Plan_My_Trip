const express = require("express");
const path = require("path");


const app = express();
app.use(express.json());



app.use(express.static(path.join(__dirname,"client","build")))
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
})


app.listen(8000,()=>{
    console.log("server is running at port 8000");

})
