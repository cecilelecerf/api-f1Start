const Timer = require("../models/timerModel")
const User = require("../models/userModel");

exports.createTimer = async (req, res) => {
    try{
        const { user_id } = req.params
        const { time } = req.body
        const newTimer = new Timer({user_id, time});
        if(await User.findById(user_id)){
            res.status(404);
            res.json({message: "User not found"})
            res.end();
        }
        const timer = await newTimer.save();
        res.status(201).json({timer});
    } catch (error){
        console.log(error)
        res.status(500).json({message: "Error server."})
    }
}