import React, { useState } from 'react'

function Todo() {
    const[input,setInput]=useState('');
    const[data,setData]=useState([]);
    const handleSubmit=(e)=>{
       e.preventDefault();
    if (input.trim() === '') return; // avoid adding empty todos
    setData([...data, input]);
    setInput('');
    }
    const removeItem=()=>{
      
        setData(data.slice(0,-1));

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type="submit">Add</button>
        <button onClick={removeItem}>clear</button>
      </form>

      {data && (data.map((user,index)=>(
       <li key={index}>{user}</li>
    
      )))}
    </div>
  )
}

export default Todo
