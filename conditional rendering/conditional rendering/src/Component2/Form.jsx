import React from "react";
import Input from "./Inputs";

function Form(props) {
    return(
        <div>
             <form className='btn'>
                    <Input 
                        type={"text"}
                        placeholder={props.isuser ? "User Name" : "Create User Name"}
                    />
                     <Input 
                        type={"password"}
                        placeholder={props.isuser ? "Enter Password" : "Create Password"}
                    />
                  
                      {props.isuser === false && (<input type="password" placeholder="conform password"></input> )}
                   
                      <Input
                      placeholder={props.isuser ? "Login" : "Register"}
                       />
             </form>
        </div>
    )
}

export default Form;