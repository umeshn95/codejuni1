import React from "react";

import rock from "../image/rocket.png";
import cpink from "../image/c_pink.png";
import rivers from "../image/river.png";
import stars from "../image/star.png";
import codelogo from "../image/codejuni_logo.png";
import "./School.scss";
import parentpic1 from "../image/parentpic1.png";
import $ from 'jquery';
import coffee from '../image/coffeecup.svg';   
import cloud from '../image/cloud.svg';
import dotted from '../image/dotted.svg';




const Parentlove = ({ src,classaboutname,name,classqualification,qualification,classaboutpara,para }) => {
  return (
    <div className='inner_about'>
    <div className= 'inner_about_image'>
      <img className="inner_about_img" src={src}></img>
    </div>
    <div className='inner_about_name'>{name}</div>

    <div className='about_quallification'>{qualification}</div>

    <div className='inner_about_para'>
     {para}
    </div>
    <div className="inner_about_design">"</div>
  </div>
  );
};










function Schools() {
  

  return (
 

        
<div id="plvDIV_1">
	<img alt="vector shape" src="https://cdn.codingal.com/images/home/parent-testimonials/left-blurb.svg" id="plvIMG_2" /><img alt="vector shape" src="https://cdn.codingal.com/images/home/parent-testimonials/right-blurb.svg" id="plvIMG_3" />
	<p id="plvP_4">
		Why parents love us
	</p>
	<div id="plvDIV_5">
		<div id="plvDIV_6">
			<img alt="vector shape" src="https://cdn.codingal.com/images/book-trial-class/shape-1.svg" id="plvIMG_7" /><img alt="vector shape" src={cloud} id="plvIMG_8" /><img alt="vector shape" src={coffee} id="plvIMG_9" /><img alt="vector shape" src={dotted} id="plvIMG_10" />
			<picture id="plvPICTURE_11">
				<source id="plvSOURCE_12" /><img src="https://cdn.codingal.com/images/home/parent-testimonials/samar-shareef.png" alt="Samar Shareef" id="plvIMG_13" />
			</picture>
			<p id="plvP_14">
				“I was especially impressed when the teacher went out of the way and provided extra classes to explain a concept in app development which my son found difficult.”
			</p>
			<p id="plvP_15">
				-
				{/* <!-- --> */}
Samar Shareef
			</p>
		</div>
		<div id="plvDIV_16">
			<img alt="vector shape" src="https://cdn.codingal.com/images/book-trial-class/shape-1.svg" id="plvIMG_17" /><img alt="vector shape" src={cloud} id="plvIMG_18" /><img alt="vector shape" src={coffee} id="plvIMG_19" /><img alt="vector shape" src={dotted} id="plvIMG_20" />
			<picture id="plvPICTURE_21">
				<source id="plvSOURCE_22" /><img src="https://cdn.codingal.com/images/home/parent-testimonials/amit-karkare.png" alt="Amit Karkare" id="plvIMG_23" />
			</picture>
			<p id="plvP_24">
				“Codingal has helped my son to start learning to code at a personalized pace compared to other online sites.”
			</p>
			<p id="plvP_25">
				-
				{/* <!-- --> */}
Amit Karkare
			</p>
		</div>
	</div>

        {/* <div id='slider'>
       <figure>

       <div className="outer_about">
    




<div id="slideshow">
   <div>
   <div className="outer_about">
 <div className='inner_slider'>
 <Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>

<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>

<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>

<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>

<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>

<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>


<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>

<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>

<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>


 </div>
 </div>

   </div>
   <div>
 
   </div>
   <div>
  
   </div>
</div>






    </div>
       </figure>
            </div> */}




{/* responsive */}


{/* 
<main>
        <div id="test-list">
          <section>
            <div className="top-box" />
            <img src="https://images.pexels.com/photos/1056475/pexels-photo-1056475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Picture of Vivian Williams" />
            <div className="bottom-box">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
              </blockquote>
              <div className="test-details">
                <p><span>Vivian Williams</span><br />Los Angeles, CA</p>
              </div>
            </div>
          </section>
          <section>
            <div className="top-box" />
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Picture of Josie Anderson" />
            <div className="bottom-box">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
              </blockquote>
              <div className="test-details">
                <p><span>Josie Anderson</span><br />Raleigh, NC</p>
              </div>
            </div>
          </section>
          <section>
            <div className="top-box" />
            <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Picture of Jenny Smith" />
            <div className="bottom-box">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
              </blockquote>
              <div className="test-details">
                <p><span>Jenny Smith</span><br />Boise, ID</p>
              </div>
            </div>
          </section>
        </div>
      </main>


 */}

















        </div>
  );
}

export default Schools;
