"use client"

import React, { useState } from "react";
import Image from "next/image"; 
import { NewTodo } from "../lib/drizzle";
function AddTodo() {
// For store input value and send to backend
// id is optional in type set they increment auto 
const [task , setTask] = useState<NewTodo>({
    task: ""
})


//for send data to backend and

const handleSubmit = async() => {

    try {
        const res  = await fetch("/api/todo" ,{
            method:"POST",
            body: JSON.stringify({
                task: task.task
            }) 
        })
    }catch (error){
        console.log(error)
    }

}
  return (
    <div>
      <form className="w-full flex gap-2.5">
        {/* for input field  */}
        <input
        onChange = {(e)=>setTask({task:e.target.value})}
         className="w-full px-5 py-3.5 rounded-full border-amber-600"
        type = "text"/>
       
        <button onClick={handleSubmit}  className="bg-MyBestColor1 shrink-0 p-4 rounded-full">
            <Image src={"/vector.png"} alt="next" width={15} height={15} />
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
