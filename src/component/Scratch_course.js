import React, { useState } from "react";
import scratch1 from "../image/Scratch_Course_icon.png";

import "./Scratch_course.scss";
import scratchimg from "../image/scratch_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Scratch_course() {
const [inc,setInc]= useState(1)


const  handleSwipeR=() =>{
  if(inc<3){
 setInc(inc+1)
  console.log(inc)

  }


 
 

}
const  handleSwipeL=() =>{
  if(inc>1){
 setInc(inc-1)
  console.log(inc)

  }}




const Scource=({grade,course,coursedetail,coursepara,courselink})=>{
 return(
  <div className='scratch_newlayout'>

<div onClick={handleSwipeL}><FontAwesomeIcon icon={faChevronCircleLeft} className='dots' style={{height:'50px',width:'50px',color:'pink'} } ></FontAwesomeIcon></div>
  <div className='blog_post'>
    <div className="blog_post_img">
      <img src={scratchimg}></img>
    </div>

    <div className="blog_post_info">
      <div className="blog_post_date">
        <span>{grade}</span>
        <span>{coursedetail}</span>
        <h1 className="blog_post_title">{course}</h1>
        <p className="blog_post_text">
        {coursepara}
        </p>

  <Link to={courselink} className='readcourse blog_post_cta '>
  <p className='readcourse'>Read more</p></Link>
      </div>
    </div>
  </div>
  <div onClick={handleSwipeR}><FontAwesomeIcon icon={faChevronCircleRight} className='dot' style={{height:'50px',width:'50px',color:'pink'}} ></FontAwesomeIcon></div>

</div>
 )
}



  
  return (



    
   <>

    <Scource 
    grade={inc==1?'Grade (1 to 6)':inc==2?'Grade 7 to 10':'Grade 11 to 12'}
    
    course={inc==1?'Coding Champ':inc==2?'Coding Master':'Coding Pro'}
    coursedetail={inc==1?'Scratch Programming':inc==2?'Wev Development':'Artificial Intelligence'}
    coursepara={inc==1?'loreal paris Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.':inc==2?'loreal paris Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.':'lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'}
courselink={inc==1?'/champ':inc==2?'/master':'/pro'}




    />
    
    
    


      

  <div className='scrollmenu'>

  <div className="course_main">
      <h1>Our Courses</h1>
        <ul className="course_course_cards">
          <li className="course_course_cards_item">
            <div className="course_card">
              <div className="course_card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
              <div className="course_card_content">
                <h2 className="course_card_title">course_card Grid Layout</h2>
                <p className="course_card_text">Demo of pixel perfect pure CSS simple responsive course_card grid layout</p>
                <button className="course_btn course_card_course_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
        <ul className="course_course_cards">
          <li className="course_course_cards_item">
            <div className="course_card">
              <div className="course_card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
              <div className="course_card_content">
                <h2 className="course_card_title">course_card Grid Layout</h2>
                <p className="course_card_text">Demo of pixel perfect pure CSS simple responsive course_card grid layout</p>
                <button className="course_btn course_card_course_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>

        <ul className="course_course_cards">
          <li className="course_course_cards_item">
            <div className="course_card">
              <div className="course_card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
              <div className="course_card_content">
                <h2 className="course_card_title">course_card Grid Layout</h2>
                <p className="course_card_text">Demo of pixel perfect pure CSS simple responsive course_card grid layout</p>
                <button className="course_btn course_card_course_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

  </div>

    </>
  );
}

export default Scratch_course;
