import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return(
    isSignedIn
      ?
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signOut')} className='f3 link dim black underline pa3 pointer b'>Sign out</p>
        </nav>
      :
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signIn')} className='f3 link dim black underline pa3 pointer b'>Sign In</p>
          <p onClick={() => onRouteChange('signUp')} className='f3 link dim black underline pa3 pointer b'>Sign Up</p>
        </nav>
  );
 }

 export default Navigation;