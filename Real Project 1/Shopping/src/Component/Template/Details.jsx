import React from "react";



function Details(props){
    return(
        <div className="container">
          <div className="productImg">
             <img className="image" src={props.productImg} ></img>
              {/* <h2 className="productSoldout">{props.isSoldOut === true ? "sold out" : null}</h2> */}
             {props.isSoldOut === "true" &&  (<h2 className="productSoldout">sold out </h2>)}
          </div>
          <h3 className="productname">{props.productName}</h3> 
          <div className="discount">          
             <h4  className={props.classname} >{props.productPrice }</h4>
             <h6>{props.productPercentage}</h6>
             <h5>{props.Discount}</h5>    
         </div>
        </div>
    )
}

export default Details;