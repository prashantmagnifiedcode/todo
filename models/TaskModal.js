const mongoose = require("mongoose");

const MyTodo = new mongoose.Schema(
	{
		Status:{
			type:Boolean,
			default:false
		},
		Discription:{
			type:String
		},
		title:{
			type:String
		}		
		
	}
)	

const todo = mongoose.model("Task", MyTodo);

module.exports = todo;