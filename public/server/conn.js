const mongoose = require('mongoose');
const dotenv = require('dotenv');

  // dotenv.config({path: "./config"})

  const DB = "mongodb+srv://jawlenidhi:Catalyser@cluster0.qvesx.mongodb.net/BookBeeDB?retryWrites=true&w=majority";
  
   mongoose.connect(DB).then(() =>{
    console.log("Connection successful");
    }
    ).catch(err =>{
    console.log("Couldn't connect. Please retry");
    })