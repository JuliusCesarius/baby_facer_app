import React from 'react';
import classNames from 'classnames';
import Segment from '../../components/Segment';

function Picture(props) {
    const classnames = classNames('background', props.pic + props.version);
    const segments = [
      <Segment pic={props.pic} version={props.version} num={1}/>,
      <Segment pic={props.pic} version={props.version} num={2}/>,
      <Segment pic={props.pic} version={props.version} num={3}/>,
      <Segment pic={props.pic} version={props.version} num={4}/>,
      <Segment pic={props.pic} version={props.version} num={5}/>,
      <Segment pic={props.pic} version={props.version} num={6}/>,
    ];
  return <div className="Picture">
    <div className={classnames}>
    </div>
    <div className="segments">{segments}
    </div>
  </div>
}

export default Picture;
