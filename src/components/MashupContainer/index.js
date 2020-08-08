import React from 'react';
import Mashup from '../../components/Mashup';
import PictureContainer from '../../components/PictureContainer';

function MashupContainer() {
  return <div className="MashopContainer">
    <PictureContainer pic="gabi" name="Gabi"/>
    <Mashup name="Mateo"/>
    <PictureContainer pic="julius" name="Julius"/>
  </div>
};

export default MashupContainer;
