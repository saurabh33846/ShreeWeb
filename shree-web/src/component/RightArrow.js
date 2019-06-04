import React from 'react';

const RightArrow = (props) => {
  return (
    <div className={props.className} onClick = {props.goToNextSlide}>
      <div className = "position-arrow">
      <i className="fas fa-arrow-circle-right fa-3x" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default RightArrow;

/* 
  Pretend these are in their own separate files 
*/
