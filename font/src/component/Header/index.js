// import todoLogo from '../../assets/todoLogo.svg';
import  './header.css';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios'
export function Header({ handleAddTask,Refresh }) {
  const [data, setdata] = useState({
    title:"",
    Discription:""
  });

  const handleSubmit=async(e)=> {
    e.preventDefault()
    try{
      if(!data?.title || !data?.Discription){
        alert("Fill all field")
      }else{
        const res= await axios.post("/api/task/add",data);
        if(res.status==200){
          alert("add successfully")
          Refresh()
        }else{
          // console.log("d")
          alert("Not added successfully")
          Refresh()
        }

      }

    }catch(e){
      alert("Server is Down")
    }

  }

  const onChangeTitle=(e)=> {
    let name=e.target.name;
    let value=e.target.value;
    setdata({...data,[name]:value})
  }

  return (
    <header className="header">
      <img  style={{width:"40px",height:"40px"}}src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png" />

      <form  className="newTaskForm">
        <div style={{width:"100%",display:"flex",flexDirection:"column"}}>

        <input placeholder="Title" type="text" name="title" onChange={onChangeTitle} value={data.title}  style={{width:"100px"}}/>
        <input placeholder="Add a new Discription" type="text " name="Discription" onChange={onChangeTitle} value={data.Discription} style={{width:"100%"}} />
        </div>
        <button onClick={handleSubmit}>Create </button>
      </form>
    </header>
  )
}