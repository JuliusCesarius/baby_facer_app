import React, { useState } from 'react';

function Card() {
  const [on, setOn] = useState(false);
  const onClick = () => {
    setOn(!on);
  }
  
  return <div className={`card ${on ? 'on' : ''}`} onClick={onClick}></div>;
};

export default Card;
