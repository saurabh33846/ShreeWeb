import React from 'react'
const LeftArrow = (props) => {
    return (
      <div className={props.className} onClick = {props.goToPreviousSlide}>
        <i className="fas fa-arrow-circle-left fa-3x position-arrow" aria-hidden="true"></i>
      </div>
    );
  }
  
  export default LeftArrow;