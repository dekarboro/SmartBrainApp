import React from 'react';
import "./FaceRecognition.css";

const FaceRecognition = ({coords, imageUrl}) => {
  const createBoxes = (coords) => {
    const arr = [];
    for (const box of coords) {
      arr.push([
        <div 
          className='bounding-box'          
          style=
          {{
            top: box.top,
            bottom: box.bottom,
            left: box.left,
            right: box.right
          }}         
        ></div>
      ]);      
    }
    return arr;
  }
  const items = createBoxes(coords);

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'></img>
        {items}      
      </div>      
    </div>
  );
}

export default FaceRecognition;