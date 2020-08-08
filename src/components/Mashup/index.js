import React from 'react';
import classNames from 'classnames';
import Segment from '../../components/Segment';
import { mashupSegments } from '../../store';

function Mashup(props) {
  const classes = classNames('Picture');
  const [state, actions] = mashupSegments();
  return <div>
    <label>{props.name}</label>
    <div className={classes}>
      <Segment pic={state.segments[1].pic} num={1}/>
      <Segment pic={state.segments[2].pic} num={2}/>
      <Segment pic={state.segments[3].pic} num={3}/>
      <Segment pic={state.segments[4].pic} num={4}/>
      <Segment pic={state.segments[5].pic} num={5}/>
      <Segment pic={state.segments[6].pic} num={6}/>
    </div>
  </div>
}

export default Mashup;
