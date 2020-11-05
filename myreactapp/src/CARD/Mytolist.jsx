import React from "react";
import "./index.css";

const MytoDoList = (props)=>{
    
   
    return(<>
        <div className="my-to">
        <i className="fas fa-times-circle" onClick={()=>{
          props.onSelect(props.id)
        }}></i>
        <li>{props.text}</li>
        </div>
      </>)
}

export default MytoDoList;