import React, { useEffect, useRef, useState } from 'react'
import { RiTodoFill } from "react-icons/ri";
import Todoitems from './Todoitems';
const Todo = () => {
   const inputref = useRef();
    
   const [todos, setTodos] = useState([]);
   const add=()=>{
    const inputvalue=inputref.current.value.trim();
    console.log(inputvalue)

   let todolist= {
    id:Date.now(),
    text:inputvalue,
    completed:false
   }
   if(inputvalue!==""){
    setTodos([...todos,todolist])
   }
   inputref.current.value="";
  }

  const deletetodo =(id)=>{
   setTodos((prevtodos)=>{
   return prevtodos.filter((todo)=>todo.id!==id)
   })
  }

  const toggle =(id)=>{
    setTodos((prevtodos)=>{
    return prevtodos.map((todo)=>{
       if (todo.id== id){
        return {...todo,completed:!todo.completed}
       }
       return todo
    })
    })

  }

  useEffect(()=>{
  console.log(todos)
  },[todos])

  return (
    <div className='flex flex-col w-11/12  max-w-md bg-white h-[550px] p-5 rounded-lg '>
      <div className='mt-5 flex items-center mt-5 gap-3'>
      
          <h1 className='text-3xl font-bold'>Todo list  </h1> 
          <RiTodoFill className='size-8'  />
       </div>    


       <div className='flex items-center bg-gray-200  rounded-full my-3  '>
        <input ref={inputref} type="text" className='border-none outline-none flex-1 bg-transparent  
        placeholder:text-slate-500 h-14 pl-5 pr-3' 
        placeholder='Enter your task ' />
        <button onClick={add} className='text-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full w-32 h-14 font-medium'>Add +</button>
       </div>

       <div>

        {todos.map((items,index)=>{
          return <Todoitems key={index} 
          id={items.id} deletetodo={deletetodo} 
          completed={items.completed} text={items.text}
          toggle={toggle} />
        })}
  
       </div>
      
    </div>
  )


}

export default Todo;