import React from "react";

function Footerinputs2(){
  const date=new Date();
  const x=date.getFullYear();


    return <div>
        <div className="footer">
            <h2>Copyright @ {x}</h2>
        </div>
    </div>
}

export default Footerinputs2;