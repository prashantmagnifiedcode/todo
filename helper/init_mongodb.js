const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
mongoose
  .connect("mongodb+srv://prashant:smart@5116@cluster0.kdodc.mongodb.net", {
    dbName: "TaskCollection",
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
  })
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch((err) => console.log("error",err));

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to db");
});

// PORT = 4000
// MONGODB_URI=mongodb://localhost:27017
// DB_NAME= part_dekho
