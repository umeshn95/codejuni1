import React, { useState,useEffect,useLayoutEffect } from "react";
import "./Contactus.css";
import { db } from "./firebase";
import Footer from "./Footer";
import Navbar from "./Navbar";
import contact from "../image/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import twitter from '../image/twitter-brands.svg';
import google from '../image/google-brands.svg';
import facebook from '../image/facebook-f-brands.svg';
import instagram from '../image/linkedin-brands.svg';
function Contactus() {


  useLayoutEffect(() => {
    document.body.scrollTop = 0;
});



  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        age: age,
        email: email,
        mobile: mobile,
        message: message,
      })
      .then(() => {
        alert("Your request has been submitted");
      })
      .catch((err) => {
        alert(err.message);
      });
    setName("");
    setAge("");
    setEmail("");
    setMobile("");
    setMessage("");
  };

 useEffect(() => {
  
  const inputs = document.querySelectorAll(".input1");

function focusFunc() {
  const parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  const parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
  
}, [])
});

  // google map

  return (
   
    <div class="patra">
    <span class="big-circle"></span>
    <img src="img/shape.png" class="square" alt="" />
    <div class="form1">
      <div class="contact-info">
        <h3 class="title1">Let's get in touch</h3>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>

        <div class="info">
          <div class="information">
            <img src="img/location.png" class="icon" alt="" />
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div class="information">
            <img src="img/email.png" class="icon" alt="" />
            <p>lorem@ipsum.com</p>
          </div>
          <div class="information">
            <img src="img/phone.png" class="icon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>

        <div class="social-media1">
          <p>Connect with us :</p>
          <div class="social-icons">
            <a href="#">
            <img src={google} style={{color:'red!important',height:'35px',width:'25px'}}></img>
            </a>
            <a href="#">
              <img src={twitter} style={{color:'red!important',height:'35px',width:'25px'}}></img>
            </a>
            <a href="#">
            <img src={facebook} style={{color:'red!important',height:'30px',width:'25px'}}></img>
            </a>
            <a href="#">
            <img src={instagram} style={{color:'red!important',height:'35px',width:'25px'}}></img>
            </a>
          </div>
        </div>
      </div>

      <div class="contact-form1">
        <span class="circle one"></span>
        <span class="circle two"></span>

        <form action="index.html" autocomplete="off">
          <h3 class="title1">Contact us</h3>
          <div class="input-patra">
            <input type="text" name="name" className='input1'  />
            <label for="">Username</label>
            <span>Username</span>
          </div>
          <div class="input-patra">
            <input type="email" name="email" class="input1" />
            <label for="">Email</label>
            <span>Email</span>
          </div>
          <div class="input-patra">
            <input type="tel" name="phone" class="input1" />
            <label for="">Phone</label>
            <span>Phone</span>
          </div>
          <div class="input-patra textarea">
            <textarea name="message" class="input1"></textarea>
            <label for="">Message</label>
            <span>Message</span>
          </div>
          <input type="submit" value="Send" class="btn" />
        </form>
      </div>
    </div>
  </div>


  );
}

export default Contactus;
