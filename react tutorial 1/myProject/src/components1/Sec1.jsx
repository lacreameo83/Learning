import React from "react";

function Card(props){
   return <div>
   <img className="omg" src={props.img}></img>
   <div className="z">
     <p> {props.tel}</p>
    <a href="#">  {props.mail}</a>
   </div>
   
</div>
}

function Sec1(){
    return <div className="img4">
      <Card 
      img="https://firststep.ng/wp-content/uploads/2017/08/microsoftteams-image-22.jpg"
      tel="090464873838363"
      mail="ododjf@gmail.com"
      />
       <Card 
      img="https://i.insider.com/5bb7d3979fb84c673c033016?width=1200&format=jpeg"
      tel="090464873838363"
      mail="ododjf@gmail.com"
      />
       <Card 
      img="https://i.pinimg.com/736x/44/9c/71/449c71d8f06a9b5daba236cfd4a37a7e.jpg"
      tel="090464873838363"
      mail="ododjf@gmail.com"
      />
    </div>
}
export default Sec1;