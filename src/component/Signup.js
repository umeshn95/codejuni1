import React, { useState ,useLayoutEffect} from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import registerimg from '../image/register.svg';
import twitter from '../image/twitter-brands.svg';
import google from '../image/google-brands.svg';
import facebook from '../image/facebook-f-brands.svg';
import instagram from '../image/linkedin-brands.svg';

import {
  faEnvelope,
  faFastBackward,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Signup() {


  useLayoutEffect(() => {
    document.body.scrollTop = 0;
});


  const handleSignup = () => {
    document.querySelector(".container").classList.add("sign-up-mode");
  };

  const handleSignin = () => {
    document.querySelector(".container").classList.remove("sign-up-mode");
  };

  const [value, setValue] = useState();
  return (
    <div>
      {/* <section className='login_user'>
<div className='login_main'>
<div className='login_message'>
<Link to='/'><div className='codercubsL' ><span className='C_color'>C</span><span className='o_color'>o</span><span className='d_color'>d</span><span className='e_color'>e</span><span className='r_color'>J</span><span className='c_color'>u</span><span className='u_color'>n</span><span className='b_color'>i</span><span className='s_color'></span></div></Link> 
<div className='linux_quote'>

    <p>“Talk is cheap. Show me the code.”</p>
</div>
</div>
<div className='login_form'>
<div className='login_content'>
    <div className='signin_form'>
<h1>Sign Up your CodeJuni account</h1>
<hr></hr>
<h5>Enter Your Phone number to create Code &nbsp; Juni account</h5>
<form>
<div className='form_field'>
<PhoneInput
 className='phoneS'
 international
      placeholder="Phone number"
      defaultCountry="US"
      value={value}
      onChange={setValue}
      maxLength={15}
     


      /> 
</div>
<div className='btn_group'>
<small className='forgot_text'>Forgot Your Password?</small>
<button className='primary_right'>
<div>
    <span>Log In</span>
    <div className='icon chevron right'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.59 2.67"><g id="864b3fd1-e248-493a-8000-ae86e83625bd" data-name="Layer 2"><g id="0c5420f3-65c4-44c9-8853-62ba56d8e86e" data-name="Layer 1"><polyline points="4.42 0.23 2.32 2.32 0.18 0.18" ></polyline></g></g></svg>
        
    </div>
</div>
</button>

</div>
</form>
    </div>
</div>
</div>
</div>

           </section> */}

      <div class="container  ">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn solid" />
              <p class="social-text">Or Sign in with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                <img src={google} style={{color:'red!important',height:'35px',width:'25px'}}></img>
                </a>
                <a href="#" class="social-icon">
                <img src={twitter} style={{color:'red!important',height:'35px',width:'25px'}}></img>
                </a>
                <a href="#" class="social-icon">
                <img src={facebook} style={{color:'red!important',height:'35px',width:'25px'}}></img>
                </a>
                <a href="#" class="social-icon">
                <img src={instagram} style={{color:'red!important',height:'35px',width:'25px'}}></img>
                </a>
              </div>
            </form>
            <form action="#" class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" class="btn" value="Sign up" />
              <p class="social-text">Or Sign up with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                <img src={google} style={{color:'red!important',height:'35px',width:'25px'}}></img>
                </a>
                <a href="#" class="social-icon">
                <img src={twitter} style={{color:'red!important',height:'35px',width:'25px'}}></img>
                </a>
                <a href="#" class="social-icon">
                <img src={facebook} style={{color:'red!important',height:'35px',width:'25px'}}></img>
                </a>
                <a href="#" class="social-icon">
                <img src={instagram} style={{color:'red!important',height:'35px',width:'25px'}}></img>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                class="btn transparent"
                id="sign-up-btn"
                onClick={handleSignup}
              >
                Sign up
              </button>
            </div>
            <img src="img/log.svg" class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                class="btn transparent"
                id="sign-in-btn"
                onClick={handleSignin}
              >
                Sign in
              </button>
            </div>
            <img src={registerimg} class="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
