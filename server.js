const express = require('express');
require('dotenv').config();
const cors = require('cors');
const msgRoute = require("../backend-portfolio/routes/msgR")
const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use("/msg" , msgRoute);
app.listen(PORT , ()=>{
    console.log(`App is listening in port ${PORT}`);
    
})
