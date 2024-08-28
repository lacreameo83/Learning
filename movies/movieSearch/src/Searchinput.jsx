import React, { useState } from 'react'


function Searchinput({search,setSearch})  {

    function handleSearch(event){
        return(
            setSearch(event.target.value) 
        )
    }
    


 return <div>
   
      <input type='text' placeholder='Search a movie name'value={search} onChange={handleSearch}></input>
    </div>
  
}

export default Searchinput;
