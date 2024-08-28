import React from 'react'

function Try(){
    const[data,setData] = useState([]);
  
useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
      .catch((err)=> console.log(err))
},[])


    return (
        <div>
            {data.length === 0 && (<p>data Fetching !!! Loading</p>)}

            {data.map((el) => {
               return <p key={el.id}>{el.title}</p>
            })}
            
      </div>
    )
  }

export default Try;
