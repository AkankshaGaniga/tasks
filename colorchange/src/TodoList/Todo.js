import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo=({task,deleteTodo,editTodo,toggleComplete})=> {
  return (
    <div className='Todo'>
        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed? 'completed':""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>  
    </div>
  )
}

