import React from "react";
import "./button.css";

function Button(props) {
    const stylesButton = {
        color: props.color || "#4de5e5",
        padding: "0px 10px 0px 10px",
       
      };
    return(
        <>
        <button  style={stylesButton}  onClick={props.onClick}>
            {props.children}
        </button>
        </>
        
    )
    
}

export default Button;