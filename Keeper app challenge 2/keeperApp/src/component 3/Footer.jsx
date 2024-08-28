import React from "react";


function Footer(){
    const date=new Date();
   const x = date.getFullYear()
    return(
        <div className="foot">
            <h2>copyright {x}</h2>
        </div>
    )
}
export default Footer;