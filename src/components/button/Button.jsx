import React from 'react'
import "./Button.css";

const Button = ({handlerClik}) => {
  return (
    <button className='switch_btn' onClick={handlerClik}>
      <i className="bx bx-refresh"></i>
    </button>
  );
}

export default Button;