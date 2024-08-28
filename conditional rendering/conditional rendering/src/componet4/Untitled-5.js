
// function find(a,b){
   
//     // return a / b
//     try {
//         if(typeof a !== "number" || typeof b !== "number") {
//             throw new Error("Please provide a number")
//         }
//         if ( a === 0 || b === 0 ) {
//             throw new Error("Cannot be zero")
//         }
//         return a / b
//     }catch(error){
//         console.log("Error :",error.message)
//     }
// }

// find(2,0)

// const mypromise = new Promise((resolve, reject) => {
//     let success = true
//     if(success){
//         resolve("operation was successful")
//     }else {
//         reject("operation failed")
//     }
// })

// mypromise
// .then((message) =>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
// });

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))