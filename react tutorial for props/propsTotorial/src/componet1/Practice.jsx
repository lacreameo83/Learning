import React from "react";

function Detail(props){
    return(
        <div >
            <h1 className={props.me} >{props.name} {props.age}</h1>
        </div>
    )
}

const Prac=[
    {name:"precious",
      age:"26"  
    },
    {name:"sochi",
      age:"30"  
    }]
    

    
function Find(el){
    return <Detail 
        name={el.name}
        age={el.age}
    />
}


function Practice(){
    return <div>
        {Prac.map(Find)}
    </div>
}
export default Practice;