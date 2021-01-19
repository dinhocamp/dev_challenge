const db = require("../models/index")
module.exports=(app)=>{
    app.get("/",(req,res)=>{
        res.send("ahlan")
    })
}