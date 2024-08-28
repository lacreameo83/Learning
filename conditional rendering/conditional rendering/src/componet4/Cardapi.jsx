import React, { Component, useEffect, useState } from 'react'
import Form from '../Component2/Form';

 

function Cardapi(){
    const[data,setData] = useState([]);
  
useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
      .catch((err)=> console.log(err))
},[])


    return (
        <div>
            {data.length === 0 && <p>data Fetching !!! Loading</p>}

            {data.slice(0,10).map((el) => {
               return <p key={el.id}>{el.title}</p>
            })}
            
      </div>
    )
  }
  export default Cardapi;

