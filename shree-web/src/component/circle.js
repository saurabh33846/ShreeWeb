import React from "react"
const Circle = (props) => {
    function handleClick (){
        props.goToIndex(props.imageId);
    }
    return (
      <div className={props.className} onClick = {handleClick}>
      </div>
    );
  }
  
  export default Circle;