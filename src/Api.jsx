import React, { useEffect, useState } from 'react'

function Api() {
    const[data,setData]=useState([]);

    useEffect(()=>{
        const fetching=async()=>{
        let response=await fetch('https://jsonplaceholder.typicode.com/users');
        let result=await response.json();
        setData(result)
    }
    fetching()
    },[])
  return (
    <div>
        <h2>data</h2>
        {data.map(da=>(
            <div key={da.id}>
                <p>Name: {da.name}</p>
            </div>
        ))}
      
    </div>
  )
}

export default Api
