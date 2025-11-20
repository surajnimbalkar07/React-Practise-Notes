import React, { useState } from 'react'

function Home() {
    const[mail, setMail]=useState('');
    const[name,setName]=useState('');
    const[data,setData]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setData({name,mail});
        setName('');
        setMail('');

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
        <input type='email' value={(mail)} onChange={(e)=>setMail(e.target.value)} />
        <button type="submit" >Submit</button>
      </form>

      {data &&(
        <div>
        <h2>Data</h2>
        <p>Name: {data.name}</p>
        <p>mail: {data.mail}</p>
        
        </div>
      )
       }
    </div>
  )
}

export default Home
