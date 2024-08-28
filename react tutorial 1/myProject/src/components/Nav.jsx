import React from "react";
import Links from "./Links"
import Navbtn from "./Navbtn";

function Nav(){
    return (
        <div className="navBar">
           <div className="move">
                 <h1>Logo</h1>
                 <Links />
            </div>
             <div> 
                  <Navbtn />
            </div>
            

           
        </div>
    )
}

export default Nav;