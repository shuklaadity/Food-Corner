import React from "react";
 

const Card=(props)=>{
    return(
        <>
           <div className="Card">
           <img src={props.img} alt="the image not found" />
            <div className="Card-sub">
             <h2>{props.name}</h2>
             <h4>{props.cat}</h4>
            
             <p>{props.price}</p>
            </div>
           </div>
        
        </>
    )
}

export default Card;