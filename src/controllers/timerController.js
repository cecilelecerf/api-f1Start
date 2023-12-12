const Timer = require("../models/timerModel")
const User = require("../models/userModel")

exports.createTimer = async (req, res) => {
    try{
        const newTimer = new Timer(req.params.user_id, req.body);
        if(new User.findById(newTimer.user_id))
            nullifiable()
        const timer = await newTimer.save();
        res.status(201).json({timer});
    } catch (error){
        console.log(error)
        res.status(500).json({message: "Error server."})
    }
}