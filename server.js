const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = 3000;
app.use(express.json());
app.use(cors());
//for database
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

app.get('/msg' , async(req,res)=>{
    console.log("backend call");
    const name = req.query.name;
    const mail = req.query.mail;
    const msg = req.query.msg;
    await Msg.create({
        name,
        mail,
        msg
    })
    res.status(200).json({
        msg:"msg sent"
    })
})
app.listen(PORT , ()=>{
    console.log(`App is listening in port ${PORT}`);
    
})
