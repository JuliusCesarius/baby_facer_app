import React, { useState } from 'react';
import Picture from '../../components/Picture';
import classNames from 'classnames';

function PictureContainer (props) {
  const [version, setVersion] = useState(1);
  const onClick = (v) => {
    setVersion(v);
  }
  const numOfButtons = 14;
  const buttons = [];
  for (var i = 1; i <= numOfButtons; i++) {
    buttons.push(<input type="button" onClick={onClick.bind(this, i)} className={classNames('thumb', props.pic + i)}/>);
  }
  return <div className="PictureContainer">
    <label>{props.name}</label>
    <Picture pic={props.pic} version={version} mashupSegments={props.mashupSegments} />
    <div className="thumb-container">
      {buttons}
    </div>
  </div>
}

export default PictureContainer;
