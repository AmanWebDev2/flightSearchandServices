//server
//All the external depandencies of same catogries like(middleware etc) should be together 
const express = require("express");
const bodyParser=require("body-parser");

const {PORT}=require('./config/serverConfig');
const setUpStartServer = async ()=>{
    //setting up the server
    const app =express();
    app.listen(PORT,()=>{
        console.log("Server has started on PORT",PORT);
    });
}
setUpStartServer();

