const Timer = require("../models/timerModel")
const User = require("../models/userModel");

exports.createTimer = async (req, res) => {
    try{
        const newTimer = new Timer({user_id : req.params.user_id, time : req.body.time});
        if(await User.findById(req.params.user_id)){
            await newTimer.save();
            res.status(201).json({newTimer});
            return
        }
        res.status(404);
        res.json({message: "User not found"})
        res.end();
        return;
    } catch (error){
        console.log(error)
        res.status(500).json({message: "Error server."})
    }
}

exports.averageTimer = async (req, res)=> {
    try{

        const { user_id } = req.params
        const allTimer = await Timer.find({user_id})
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

exports.listenAllTimerOfUser = async(req, res)=>{
    try{
        const user = await Timer.find({user_id : req.params.user_id})
        res.status(200).json(user)
    }catch(error){
        console.log(error);
        res.status(500).json({message : "Error server."})
    }
}