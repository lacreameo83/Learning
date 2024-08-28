import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Truereturn from './Component/h1/Truereturn'
import Form from './Component2/Form'
import Todo from './componet4/Todo'
import Colorbox from './componet4/Colorbox'
import Check from './componet4/Check'
import Testing from './componet4/Testing'
import Randomcolor from './componet4/Randomcolor'
import Cardapi from './componet4/Cardapi.jsx'
import Try from './componet4/Try.jsx'



// function App() {
// const[itemvalue,setitemvale]=useState([])
//   const [inputValue,setInputValue] = useState();
//  function handleChange(event){
//   setInputValue(event.target.value)
//  }

//   function handleClick(itemes){
//    setitemvale([... itemvalue,itemes])
//   }
      
   
//   return (
//    <div >
//     <h1>welcome</h1>
//     <input type='text' onChange={handleChange} placeholder='add item' value={inputValue}></input>
//     <button onClick={()=>handleClick(inputValue)}>Click to Add</button>
//     {itemvalue.length !== 0 ? (
//       <ul>
//       {itemvalue.map((el,i)=>{  
//        <li
//          key={i}>{el}
//        </li>
//     } )
//     }
//     </ul>)
//     :(<p>nothing</p>)}
//    </div>
//   )
// }

// function App(){
//  const [input,setinput]=useState({
//   fname:"",
//   lname:"",
//   email:""
//  });
//   function inputvalue(e){
//   const value = e.target.value;
//   const name = e.target.name
//   setinput((prevValue) => {
//     if(name === "fname"){
//      return {
//        fname:value,
//       lname:prevValue.lname
//      } ;
//     }else if(name === "lname"){
//     return { 
//       fname:prevValue.fname,
//       lname:value
//     };
//     }else if (name === "email"){
//       return {
//         email:value,
//         fname:prevValue.fname,
//         lname:prevValue.lname
//       }
//     }
    
    
//   })
//   }

//   return(
//     <div>
//       <h1>{input.fname} {input.lname}</h1>
//       <p>{input.email}</p>
//       <input type='text' placeholder='first name' name='fname' onChange={inputvalue} value={input.fname}></input>
//       <input type='text' placeholder='last name' name='lname' onChange={inputvalue} value={input.lname}></input>
//       <input type='text' placeholder='email' name='email' onChange={inputvalue} value={input.email}></input>
//       <button></button>
//     </div>
//   )
// }




// export default App;
// function App() {
//   const [inputValue,setInputValue] = useState("");
//   const [click,setClicks] = useState([])

//   function handleInputValue(event){
//     let setInputValueKeeper = event.target.value;
//     setInputValue(setInputValueKeeper)
//   }

//  function handleClick(newItems){
//    setClicks([...click,newItems])
//    setInputValue("")
//  }
// function find(el,i) {
//   return <li key={i}>{el}</li>
// }

// console.log(click);

//   return(
//     <div>
//     <h1>{inputValue}</h1>
//     <input type='text' placeholder='  Add item' onChange={handleInputValue} value={inputValue} />
//     <button onClick={()=>handleClick(inputValue)}>Add</button>
//     {
//       click.length !== 0 ?
//        <ul>
//        {click.map(find)}
//        </ul> 
       
//        :
//         <p>nothing yet</p> } 
//     </div>
//   )
// }
// export default App

function App(){
  return(
    <div>
      {/* <Todo />
      <Colorbox />
      <Check />
     <Testing />
     <Randomcolor /> */}
     <Cardapi />
     {/* <Try /> */}
    </div>
  )
}

export default App;
