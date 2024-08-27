import React from 'react'
import { GoCheckCircleFill } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import { RiProgress8Fill } from "react-icons/ri";
const Todoitems = ({text, id, deletetodo, completed,toggle}) => {
  return (
    <div onClick={()=>{
      toggle(id)
    }}  className='flex items-center my-3 gap-2 cursor-pointer ' >
      <div className='flex  items-center '>
      {completed ? <GoCheckCircleFill className='size-7 ' /> :<RiProgress8Fill className='size-7 ' />}
      </div>
      <div className='flex flex-1 w-64'>
      <p className={` text-slate-700 ml-4 text-[17px] 
        ${completed ? "line-through":"" }`}>{text}</p>
       
    
      </div>
      <FaTrash onClick={()=>{deletetodo(id)}}  className='w-3.5  cursor-pointer' />
      
    </div>
  )
}

export default Todoitems