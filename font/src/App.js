import React, { useEffect, useState } from "react";
import { Header } from "./component/Header";
import Tasks from "./component/Tasks";
import "./App.css"
import axios from "axios";
const LOCAL_STORAGE_KEY = 'todo:tasks';

const  App=()=> {
  const [tasks, setTasks] = useState([]);
  const[taskdata,settaskdata]=useState([])
  const[refresh,setrefresh]=useState(false)

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  
  function addTask(taskTitle) {
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  const deleteTaskById=async(taskId) =>{
     try{
      const res=await axios.delete(`/api/task/Deletetask/${taskId}`)
      if(res.status==200){
        setrefresh(prev=>!prev)
      }

     }catch(e){
      console.log(e)
     }
  }
  const Refresh=()=>{
    setrefresh(prev=>!prev)
  }

  const toggleTaskCompletedById=async(taskId)=> {
    try{
      const res=await axios.patch(`/api/task/UpdateStatus`,{id:taskId})
      if(res.status==200){
        setrefresh(prev=>!prev)
      }

     }catch(e){
      console.log(e)
     }
  }
   useEffect(()=>{

    (async()=>{
           try{
            const res= await axios.get("/api/task/Fetchtask")
            if(res.status==200){
              settaskdata(res.data)
              console.log("fettch",taskdata)

            }

           }catch(e){
            console.log(e)
           }
    })()
   },[refresh])
  return (
    <>
      <Header handleAddTask={addTask} Refresh={Refresh} />
      <Tasks
        tasks={taskdata}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
        
      />
    </>
  )
}

export default App