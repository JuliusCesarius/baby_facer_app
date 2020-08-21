import React, { useState } from 'react';
import classNames from 'classnames';
import Segment from '../../components/Segment';
import { mashupSegments } from '../../store';

function Mashup(props) {
  const [state, actions] = mashupSegments();
  const [zoom, setZoom] = useState(false);
  const zoomClasses = classNames('Picture', {'on': zoom})
  const onClick = () => {
    setZoom(!zoom);
  }
  return <div className="Mashup">
    <label>{props.name}</label>
    <div className="picture-holder">
      <div className="h1">Adivina cómo será</div>
    </div>
    <div className={`Picture zoom ${zoom ? 'on' : ''}`} onClick={onClick}>
      <Segment pic={state.segments[1].pic} version={state.segments[1].version} num={1}/>
      <Segment pic={state.segments[2].pic} version={state.segments[2].version} num={2}/>
      <Segment pic={state.segments[3].pic} version={state.segments[3].version} num={3}/>
      <Segment pic={state.segments[4].pic} version={state.segments[4].version} num={4}/>
      <Segment pic={state.segments[5].pic} version={state.segments[5].version} num={5}/>
      <Segment pic={state.segments[6].pic} version={state.segments[6].version} num={6}/>
    </div>
  </div>
}

export default Mashup;
