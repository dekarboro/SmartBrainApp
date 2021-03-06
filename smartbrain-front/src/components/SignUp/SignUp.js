import React from 'react';

const SignUp = ({ onRouteChange }) => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <article className="pa4 black-80">
        <div action="sign-up_submit" method="get" acceptCharset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email address</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="mt3">
            <input 
              onClick = {() => onRouteChange('signIn')}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f8" 
              type="submit" 
              value="Sign Up" />
          </div>
        </div>
      </article>
    </article>
  );
 }

 export default SignUp;