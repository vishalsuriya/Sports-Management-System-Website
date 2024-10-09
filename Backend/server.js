const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000 ;
const connectDB = require("./Database/connection");
connectDB();



app.listen(port,()=>{
    console.log(`server running on port ${port}`)
});
