import { Price } from "./Price"
import { data } from "./Template/data";
import Details from "./Template/Details";

const y = 5;

let find =function(x){
       <Details
        productPrice={x.productPrice}
         />

    return( 
        <div>
            {data.map(find)}
        </div>
    )
}


function Percentage(){



    
    return(
        <div>
           {(find / y)/100} 
        </div>
    )
}
 

export default Percentage;