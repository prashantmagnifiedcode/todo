const router = require("express").Router();
const { AddTask, FetchTask,updateTask,deleteTask } = require("../controller/TaskController");


router.post("/add", AddTask);
router.get("/Fetchtask", FetchTask);
router.patch("/UpdateStatus", updateTask);
router.delete("/Deletetask/:id",  deleteTask);
module.exports=router