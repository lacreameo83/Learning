import React from "react";
import { data } from "./data";
import Details from "./Details";


function find(el){
    return( <Details
       productImg ={el.productImg}
       Discount ={el.Discount}
       isDiscount={el.isDiscount}
       productPrice={el.productPrice}
       productName={el.productName}
       isSoldOut={el.isSoldOut}
       productPercentage={el.productPercentage}
     />
        
    )
}

function Information(){
    return(
        <div className="mapped-value">
        {data.map(find)}
        </div>
    )
}

export default Information;
 