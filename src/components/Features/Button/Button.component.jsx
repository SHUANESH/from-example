import React from 'react';
import './Button.component.css'

function Button(props) {
  // contextType = TextCon;
  return (
    <div className="buttonStyle">
    <button type="button" onClick={props.onClick}>{props.nameOfBtn}</button>
    </div>
  );
}

export default Button;
