const express = require("express");
const app = express();
require("./helper/init_mongodb.js")

const Mytask=require('./routes/TaskRouter.js')

const cors = require("cors");
app.use(express.json({limit: '50mb'}));
app.use(cors({
    origin: "http://localhost:3000",

    credentials: true,
  })) 
app.use("/api/task",Mytask)

app.listen(process.env.PORT||5000, _=> console.log("backend server is running on port: "+ process.env.PORT))


