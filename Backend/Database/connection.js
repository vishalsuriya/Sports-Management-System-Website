const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async ()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB is connected : ${con.connection.host}`);
    }catch(err){
         console.log("Error connecting to maongoDB:",err);
    }
}
module.exports = connectDB;