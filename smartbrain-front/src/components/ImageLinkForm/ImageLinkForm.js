import React from 'react';
import './ImageLinkForm.css';

const ImageLinkFrom = ({ onInputChange, onBtnDetect }) => {
  return (
    <div>
      <p className='f3'>
        {"Let's find your face on the image :)"}
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button 
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onBtnDetect}>            
          Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkFrom;