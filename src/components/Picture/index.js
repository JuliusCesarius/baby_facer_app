import React from 'react';
import classNames from 'classnames';
import Segment from '../../components/Segment';

function Picture(props) {
    const classnames = classNames('background', props.pic);
    const segments = [
      <Segment pic={props.pic} num={1}/>,
      <Segment pic={props.pic} num={2}/>,
      <Segment pic={props.pic} num={3}/>,
      <Segment pic={props.pic} num={4}/>,
      <Segment pic={props.pic} num={5}/>,
      <Segment pic={props.pic} num={6}/>,
    ];
  return <div className="Picture">
    <div className={classnames}>
    </div>
    <div className="segments">{segments}
    </div>
  </div>
}

export default Picture;
