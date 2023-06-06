// import React ,{useEffect, useState} from 'react'
import { Task } from '../Task';
import './tasks.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Tasks=({ tasks, onDelete, onComplete })=> {
  
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.Status).length;

  return (
    <section className="tasks">
      <header className="task_header">
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className="textPurple">Completed tasks</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className="list">
        {tasks.map((task) => (
          <Task key={task._id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  )
}
export default Tasks