const mongoose = require("mongoose")
const Schema = mongoose.Schema
let timerSchema = new Schema ({
    time:{
        type : Number,
        required : true
    },
    user_id:{
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("Timer", timerSchema)