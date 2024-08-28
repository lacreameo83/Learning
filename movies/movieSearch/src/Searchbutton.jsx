import React, { useState } from 'react'
import { data } from './data';
import Template from './Template';


function Searchbutton({search,setSearch}) {

    const [filtertitle,setfiltertitle]=useState("");
    function filter(){
        setfiltertitle(data.filter((e)=>{
    return e.title
        })) 
    }


    const [isDisplay,setisDisplay] = useState()

  function handleDisplay(searchIttle){
       {filtertitle === search} 
  }

  

  return (
    <div>
      <button onClick={handleDisplay }>Search</button>
     {filtertitle === search ? (<div>{data.map((e)=>{
        e.details
     })}</div>):<p>didnt match</p>}
      
    </div>

  )
}

export default Searchbutton;