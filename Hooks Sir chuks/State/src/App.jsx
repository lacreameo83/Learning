import { useState } from 'react'
import './App.css'
import Button2 from './Component/ContextApi/Button2';
import { Globalcontext } from './Component/ContextApi/GlobalContext';
import Pass from './Component/ContextApi/Pass';

//  function App(){
//   const [state,setState]=useState(0);
//   let p =["i love you alot","i dont know what going on my head","buy me sharwama","my sweet baby","am i disturbing yo"]
  
//   function change(){
//    if(state === p.length -1){
//     setState(0)
//    }else{
//      setState(state + 1)
//    }

//   }
//   const [onclik,setonclik]=useState();
 
//   function change(){
//    setonclik("submited")
//    setpp({pp})
//   }
//   const [me,setMe]=useState(false)
//   function over(){
//     setMe(true)
//   }
//   function out(){
//     setMe(false)
//   }
// const [pp,setpp]=useState()
//   function precious(event){
//      setpp(event.target.value)
//   }
//   return(
//     <div>
//       <h1>{p[state]}</h1>
//       <button onClick={change}>click me</button>
//       <h2>{onclik}{pp}</h2>
//       <input onChange={precious} value={pp} spellCheck="false" type='text' placeholder='what is your name'></input>
//       <button style={{backgroundColor : me ? "pink" : "white"}} onClick={change} onMouseOver={over} onMouseOut={out}>submit</button>
//     </div>
//   )
//  }

// function App(){
// return  <div>
//  <Button 
//   size="md"
//   type="Danger"
//   btntext="submit"
//  />
  // </div>
//   const  [state,setState] = useState("");
 
//  const [over,setOver]=useState(false)

//  const [del,setdel]=useState()

//   function mouseover(){
//     setOver(true)
//   }
//   function out(){
//     setOver(false)
//   }
  
  
//   function detail(event){
//    setdel(event.target.value)

   
//   }

//   function change(event){
//     setState(del)
    
  
//     event.preventDefalut();
//     }
//    const [ff,seff]=useState();
//     function detail2(event){
//      seff(event.target.value)
//     }
//   return(
//     <div>
//      <h1>Hello {state}{ff} </h1>
//     {/* <form onSubmit={change}> */}
     
//       <input type='text' spellCheck="false" placeholder='  what is your name ?' onChange={detail} value={del}></input>
//       <input type='text' onChange={detail2}></input>
//       <button onClick={change} type="submit" onMouseOver={mouseover} onMouseOut={out} style={{backgroundColor: over ?  "pink":"white"}}>submit</button>
//       {/* </form> */}
    // </div>
  // )
// }

// function App(){
//  const [isclick,setisClick] = useState(false);
//   function handleEvent(){
//     setisClick(true)
//   }
//   const [isstate,setisState]=useState(false);
//   function handleMose(){
//    setisState(true)
//   }
//   function pp(){
//     setisState(false)
//   }
//   return(
//     <div>

//       <section className='container' >
//        <h1>Welcome</h1>
//        <button onClick={handleEvent}>More info</button>
//       </section>
//       {isclick &&(<section className='group'><div className='main'>
//         <h2>Thanks for choosing us, we promise to make you fill special</h2>
//         <button style={{backgroundColor:isstate ? "red" :"white"}} onMouseOver={handleMose} onMouseOut={pp} onClick={()=>{setisClick(false)}}>Go back here</button>
//       </div></section>)}
//     </div>
//   )
// }
// function App(){
// const [me,setme] = useState("")
//   function changed(event){
//     const pp =event.target.value
//      setme(pp)
//   }
// const [click,setclick] = useState("")
//   function handleClick(event){
//     setclick(me)

//     event.preventDefault();
//   }
//   return(
//     <div>
//       <form onSubmit={handleClick}>
//         <h1>hello {click}</h1>
//         <input onChange={changed} type='text' placeholder='what is your name' value={me}></input>
//         <button type='submit' >click</button>
//       </form>
//     </div>
//   )
// }
function App(){
  return(
    
    <div>
       <Button2 />
       <Pass />
    </div>
 
   
   
  )
}


export default App;
