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
            return;
        }
        await newTimer.save();
        res.status(201).json({newTimer});
    } catch (error){
        console.log(error)
        res.status(500).json({message: "Error server."})
    }
}

exports.averageTimer = async (req, res)=> {
    try{

        const { user_id } = req.params
        const allTimer = await Timer.find({user_id})
        // console.log(allTimer)
        let sumAllTime = 0
        allTimer.map((timer)=>(
            sumAllTime += timer.time
        ))
        average = sumAllTime / allTimer.length
        res.status(200).json({average})

    }catch (error){
        console.log(error)
        res.status(500).json({message : "Error server."})

    }
}