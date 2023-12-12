const express = require('express');
const app = express();
const port = 3003;

const mongoose = require ("mongoose");
mongoose.connect('mongodb://mongo/apinode')

app.use(express.urlencoded());
app.use(express.json());

const usersRoute = require("./routes/userRoute")
app.use("/users", usersRoute)

const timerRoute = require("./routes/timerRoute")
// app.use("/timer", timerRoute)
timerRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })