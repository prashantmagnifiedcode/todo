const todo = require("../models/TaskModal");
module.exports = {

    AddTask: async (req, res, next) => {
          // console.log(req.body)
        try {
          console.log("created resgiter")
          const{title,Discription}=req.body;
          const ress= new todo({title,Discription,Status:false});
          const done= await ress.save()
         
          if (!done) throw createErrror(404, "task not add");
          res.status(200).json({msg:"task added successfully"});
        
        } catch (error) {
          console.log(error)
        }
      },

    FetchTask: async (req, res, next) => {
       
        try {
            const ress= await todo.find().sort({Status:1})
          if (!ress) throw createErrror(404, "task not fetched");

            res.status(200).send(ress)

        } catch (error) {
          console.log(error)
        }
      },

   updateTask: async (req, res, next) => {
        try {
          const{id}=req.body
          const Renew_note= await todo.updateOne({_id:id},{$set:{Status:!req.body.Status}});
         if(!Renew_note){
          throw createErrror(404, "Status not updated");
         }else{
           res.status(200).send()
         }
        } catch (error) {
          
          
        }
      },


    deleteTask: async (req, res, next) => {
        try {
          console.log(req.params.id)
    
            const note_d= await todo.deleteOne({_id:req.params.id});
            if (!note_d) throw createErrror(404, "task not exits");
            res.status(200).json({msg:"task successfully deleted"});
          
        } catch (error) {
          console.log(error)
        }
      },

}
