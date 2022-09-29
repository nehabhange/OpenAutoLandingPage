const express = require("express");
const router = express.Router();


//load user model
const User = require("../../model/User");

router.get("/test", (req, res) => res.json({ msg: "User works" }));

router.post("/register",(req,res)=>{
    const userDetails=new User({
        name:req.body.name,
        email:req.body.email,
        date: Date.now()
    })
    userDetails.save().then(userDetails=>{
        if(userDetails){
            res.status(200).json({
                message: "Your details  added successfully",
            })
        }
    }).catch(e => {
        res.status(500).json({
            message: "their is an error",
        })
    })

})

module.exports = router;