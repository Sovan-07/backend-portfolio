const cors = require("cors");
const {Router} = require("express");
const Msg = require("../db/db")
const router = Router();
router.use(cors())
router.get("/sent" , async (req , res)=>{
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
module.exports = router