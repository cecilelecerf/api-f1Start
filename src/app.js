const express = require('express');
const swaggerDocument = require("./swagger.json");
const swaggerui = require("swagger-ui-express");
const app = express();
const port = 3003;

const mongoose = require ("mongoose");
mongoose.connect('mongodb://mongo/apinode')

app.use(express.urlencoded());
app.use(express.json());

const userRoute = require("./routes/userRoute")
// app.use("/users", usersRoute)
userRoute(app);

const timerRoute = require("./routes/timerRoute")
// app.use("/timer", timerRoute)
timerRoute(app);


app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })