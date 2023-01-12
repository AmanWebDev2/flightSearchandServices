//server
//setting up the server 
const express = require("express");
const {PORT}=require('./config/serverConfig');
const setUpStartServer = async ()=>{
    const app =express();
    app.listen(PORT,()=>{
        console.log("Server has started on PORT",PORT);
    });
}
setUpStartServer();

