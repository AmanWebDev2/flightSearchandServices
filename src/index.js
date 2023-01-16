//server

//All the external depandencies of same catogries like(middleware etc) should be together 

const express = require("express");
const bodyParser=require("body-parser");

const {PORT}=require('./config/serverConfig');
const apiRoutes=require('./routes/index');


//setting up the server

const setUpStartServer = async ()=>{

    const app =express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    app.listen(PORT,()=>{
        console.log("Server has started on PORT",PORT);
    });
}
setUpStartServer();

