import React from 'react';
import classNames from 'classnames';
import { mashupSegments } from '../../store';

function Segment(props) {
  const factor = 19.4;
  const classnames = classNames('Segment', props.pic);
  const style = { backgroundPositionY: `${(props.num - 1) * factor}%` };
  const [state, actions] = mashupSegments();
  
  return <div
      className={classnames}
      onClick={actions.pickSegment.bind(this, {num: props.num, pic: props.pic})}
      style={style}>
    </div>;
};

export default Segment;
