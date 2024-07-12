import React from 'react';
import './loginsignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';


const loginSignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt=''/>
          <input type='text'/>
        </div>
        <div className="input">
          <img src={email_icon} alt=''/>
          <input type='email'/>
        </div>
        <div className="input">
          <img src={password_icon} alt=''/>
          <input type='password'/>
        </div>
      </div>
      <div className="forgot-password">lost password? <span>click Here !</span></div>
      <div className="submit-container">
        <div className="submit">SIGN UP</div>
        <div className="submit">LOGIN IN</div>

      </div>
    </div>
  )  
}

export default loginSignup;
