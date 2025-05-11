const mongoose = require('mongoose');
require('dotenv').config();
try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("db connected ");
    
}
catch (e) {
    console.log("error in db connection");
    
}

// mongoose.connect("mongodb+srv://sovan07:sovan2003@cluster0.olntx.mongodb.net/portFolio")
const msgSchema = new mongoose.Schema({
    name : String,
    mail: String,
    msg : String
})
const Msg = mongoose.model('msg' , msgSchema)
module.exports = Msg;