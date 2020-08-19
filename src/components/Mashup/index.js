import React from 'react';
import classNames from 'classnames';
import Segment from '../../components/Segment';
import { mashupSegments } from '../../store';

function Mashup(props) {
  const classes = classNames('Picture');
  const [state, actions] = mashupSegments();
  return <div class="Mashup">
    <label>{props.name}</label>
    <div class="h1">Adivina cómo será</div>
    <div className={classes}>
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
