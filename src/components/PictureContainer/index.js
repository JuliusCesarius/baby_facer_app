import React from 'react';
import Picture from '../../components/Picture';

function PictureContainer (props) {
  return <div className="PictureContainer">
    <label>{props.name}</label>
    <Picture pic={props.pic} mashupSegments={props.mashupSegments} />
  </div>
}

export default PictureContainer;
