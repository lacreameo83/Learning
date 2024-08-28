function CheckAge(age) {
     
        if(age < 18){
          throw new Error("you must be at least 18 years")
              
          }
          return "your welcomed";
        }
  


        try {
          let message = CheckAge(2);
          console.log(message)
  
        }catch (error){
          console.log("Error:",error.message)
        }
  
           

