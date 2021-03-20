import React,{useLayoutEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import aboutus from "../image/about___us.png";
import "./Aboutus.css";
import Schools from "./Schools";
import parentpic1 from "../image/parentpic1.png";
import Get_interested from "./Get_interested";
import Whycjuni from "./Whycjuni";
import dots from '../image/dots.svg';
import coffee from '../image/coffeecup.svg'; 
import cloud from '../image/cloud.svg';
import dotted from '../image/dotted.svg';
import online1 from '../image/online1.png'
import offline from '../image/offline.png';
import busy from '../image/busy.png';
import away from '../image/away.png';
import call from '../image/call.png';
import mail from '../image/mail.png';
import linkedin from '../image/linkedin.png';


import mathlab from '../image/mathlab.svg';

const Educator = ({ containerClass, src, title }) => {
  return (
    <div className={containerClass}>
      <img className="our_team_about_pic" src={src}></img>
      <p>{title}</p>{" "}
    </div>
  );
};

function Aboutus() {

  useLayoutEffect(() => {
    document.body.scrollTop = 0;
});



  return (
    <div className='backwhite'>
      <Navbar></Navbar>
      <div
        className="relative flex justify-between rounded-b-2xl px-6"
        style={{
        
            
          height: "600px",
        }}
      >
        <div className="container1 mx-auto flex flex-col text-white z-5 lg:flex-row md:px-20 lg:items-center py-12">
          <div className="flex flex-col max-w-6xl">
            <h1 className="font-600 text-5xl max-w-3xl leading-tight">
              Moulding creators of the future
            </h1>
            <div className="font-300 text-2xl mt-10 max-w-4xl">
              Codingal started with a dream to inspire school kids to fall in
              love with coding. Our vision is to empower every child with the
              knowledge of coding, so that they can build anything they imagine.
            </div>
          </div>
          <div>
            <img
              src="https://cdn.codingal.com/images/about-us/first-fold/penguin.svg"
              alt="penguin"
            />
          </div>
        </div>
      </div>

      {/* quizzer */}

{/* our mentorship team */}
<div id="ourmentorshipDIV_1" >
        <img alt="shape" src={mathlab} id="ourmentorshipIMG_2" /><img alt="shape" src={dots} id="ourmentorshipIMG_3" /><img alt="shape" src={dotted} id="ourmentorshipIMG_4" />
        <h2 id="ourmentorshipH2_5">
          Our Leadership Team
        </h2>
        <p id="ourmentorshipP_6">
          With over 50 years of combined experience, we have got a well-seasoned team at the helm.
        </p>
        <div id="ourmentorshipDIV_7">
          <div id="ourmentorshipDIV_8">
            <picture id="ourmentorshipPICTURE_9">
              <source id="ourmentorshipSOURCE_10" /><img src="https://cdn.codingal.com/images/about-us/leadership/vivek-prakash.png" alt="Vivek Prakash" id="ourmentorshipIMG_11" />
            </picture>
            <p id="ourmentorshipP_12">
              Vivek Prakash
            </p>
            <p id="ourmentorshipP_13">
              Co-founder 
            </p>
            <p id="ourmentorshipP_14">
              B.Tech &amp; M.Tech, IIT Roorkee
            </p>
            <p id="ourmentorshipP_15">
              
              <svg id="ourmentorshipsvg_16">
                <line id="ourmentorshipline_17">
                </line>
                <polyline id="ourmentorshippolyline_18">
                </polyline>
              </svg>
            </p>
          </div>
          <div id="ourmentorshipDIV_19">
            <picture id="ourmentorshipPICTURE_20">
              <source id="ourmentorshipSOURCE_21" /><img src="https://cdn.codingal.com/images/about-us/leadership/satyam-baranwal.png" alt="Satyam Baranwal" id="ourmentorshipIMG_22" />
            </picture>
            <p id="ourmentorshipP_23">
              Satyam Baranwal
            </p>
            <p id="ourmentorshipP_24">
              Co-founder
            </p>
            <p id="ourmentorshipP_25">
              IIT Dhanbad
            </p>
            <p id="ourmentorshipP_26">
              
              <svg id="ourmentorshipsvg_27">
                <line id="ourmentorshipline_28">
                </line>
                <polyline id="ourmentorshippolyline_29">
                </polyline>
              </svg>
            </p>
          </div>
          <div id="ourmentorshipDIV_30">
            <picture id="ourmentorshipPICTURE_31">
              <source id="ourmentorshipSOURCE_32" /><img src="https://cdn.codingal.com/images/about-us/leadership/sumit-singh.png" alt="Sumit Singh" id="ourmentorshipIMG_33" />
            </picture>
            <p id="ourmentorshipP_34">
              Sumit Singh
            </p>
            <p id="ourmentorshipP_35">
              VP, Marketing
            </p>
            <p id="ourmentorshipP_36">
            
            </p>
            <p id="ourmentorshipP_37">
              
              <svg id="ourmentorshipsvg_38">
                <line id="ourmentorshipline_39">
                </line>
                <polyline id="ourmentorshippolyline_40">
                </polyline>
              </svg>
            </p>
          </div>
        </div>
      </div>





      {/* our journey */}



      
      <div id="journeyDIV_1"> 
        <img alt="shape" src={dots} id="journeyIMG_2" /><img alt="shape" src={cloud} id="journeyIMG_3" /><img alt="shape" src={dotted} id="journeyIMG_4" /><img alt="shape" src={coffee} id="journeyIMG_5" /><img src="https://cdn.codingal.com/images/about-us/journey/curved-path.svg" id="journeyIMG_6" alt="" />
        <div id="journeyDIV_7">
          <h2 id="journeyH2_8">
            Our Journey
          </h2>
          <div id="journeyDIV_9">
            <div id="journeyDIV_10">
              <p id="journeyP_11">
                <span id="journeySPAN_12">There is a dream of building Codingal</span>
                {/* */}
                - a company which can inspire millions of school kids to fall in love with coding.
              </p>
            </div>
            <div id="journeyDIV_13">
              <picture id="journeyPICTURE_14">
                <source id="journeySOURCE_15" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-1.png" alt="Journey" id="journeyIMG_16" />
              </picture>
            </div>
            <div id="journeyDIV_17">
              <picture id="journeyPICTURE_18">
                <source id="journeySOURCE_19" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-2.png" alt="Journey" id="journeyIMG_20" />
              </picture>
            </div>
            <div id="journeyDIV_21">
              <p id="journeyP_22">
                <span id="journeySPAN_23">Codingal acquires Skillovate</span>
                {/* */}
                - a company providing coding and robotics education to school kids.
              </p>
            </div>
            <div id="journeyDIV_24">
              <p id="journeyP_25">
                Codingal introduces a new curriculum based on BIDE, STEAM and BLOOM's taxonomy.
              </p>
            </div>
            <div id="journeyDIV_26">
              <picture id="journeyPICTURE_27">
                <source id="journeySOURCE_28" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-3.png" alt="Journey" id="journeyIMG_29" />
              </picture>
            </div>
            <div id="journeyDIV_30">
              <picture id="journeyPICTURE_31">
                <source id="journeySOURCE_32" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-4.png" alt="Journey" id="journeyIMG_33" />
              </picture>
            </div>
            <div id="journeyDIV_34">
              <div id="journeyDIV_35">
                <p id="journeyP_36">
                  November 2020
                </p>
                <p id="journeyP_37">
                  Codingal has inspired over 40,000 kids globally to fall in love with coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>








{/* Rjourney */}

<div id="RjourneyDIV_1">
	<h2 id="RjourneyH2_2">
		Our Journey
	</h2>
	<div id="RjourneyDIV_3">
		<div id="RjourneyDIV_4">
			<p id="RjourneyP_5">
				<span id="RjourneySPAN_6">There is a dream of building Codingal</span> - a company which can inspire millions of school kids to fall in love with coding.
			</p>
		</div>
		<div id="RjourneyDIV_7">
			<picture id="RjourneyPICTURE_8">
				<source id="RjourneySOURCE_9" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-1.png" alt="Journey" id="RjourneyIMG_10" />
			</picture>
		</div>
		<div id="RjourneyDIV_11">
			<picture id="RjourneyPICTURE_12">
				<source id="RjourneySOURCE_13" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-2.png" alt="Journey" id="RjourneyIMG_14" />
			</picture>
		</div>
		<div id="RjourneyDIV_15">
			<p id="RjourneyP_16">
				<span id="RjourneySPAN_17">Codingal acquires Skillovate</span> - a company providing coding and robotics education to school kids.
			</p>
		</div>
		<div id="RjourneyDIV_18">
			<p id="RjourneyP_19">
				Codingal introduces a new curriculum based on BIDE, STEAM and BLOOM's taxonomy.
			</p>
		</div>
		<div id="RjourneyDIV_20">
			<picture id="RjourneyPICTURE_21">
				<source id="RjourneySOURCE_22" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-3.png" alt="Journey" id="RjourneyIMG_23" />
			</picture>
		</div>
		<div id="RjourneyDIV_24">
			<picture id="RjourneyPICTURE_25">
				<source id="RjourneySOURCE_26" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-4-lqip.png" alt="Journey" id="RjourneyIMG_27" />
			</picture>
		</div>
		<div id="RjourneyDIV_28">
			<div id="RjourneyDIV_29">
				<p id="RjourneyP_30">
					November 2020
				</p>
				<p id="RjourneyP_31">
					Codingal has inspired over 40,000 kids globally to fall in love with coding.
				</p>
			</div>
		</div>
	</div>
</div>







{/* why codejuni */}


<Whycjuni></Whycjuni>




     

      {/* our team */}
      {/* <section className='backwhite'>
        <div className="ourteam_main_div backwhite">
          <h2>Code Juni Team</h2>

          <div className="our_team_inner_div">
            <Educator containerClass="pic1" src={parentpic1} title="Rohit Sharma" />

            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            

     
          </div>
        </div>
      </section> */}


<section id="teamblue1SECTION_1">
	<h3 id="teamblue1H3_2">
		Meet The Bluecube Team
	</h3>
	<div id="teamblue1DIV_3">
		<hr id="teamblue1HR_4" />
		<p id="teamblue1P_5">
			<strong id="teamblue1STRONG_6">So what makes Bluecube different from other communication providers?</strong>
		</p>
		<p id="teamblue1P_7">
			We would like to think that it’s all down to our people.
		</p>
	</div>
</section>




<section id="teamblueSECTION_1">
	<div id="teamblueDIV_2">
		<div id="teamblueDIV_3">
			<div id="teamblueDIV_4">
				<img src="https://www.bluecubecloud.com/wp-content/uploads/PR-Casual-21-370x370.jpg" alt="" id="teamblueIMG_5" />
			</div>
			<div id="teamblueDIV_6">
				<div id="teamblueDIV_7">
					<img src={online1} id="teamblueIMG_8" alt='' />
				</div> <span id="teamblueSPAN_9">Paul</span> <span id="teamblueSPAN_10">Managing Director</span>
				<div id="teamblueDIV_11">
					 <span id="teamblueSPAN_12"><a href="javascript:void(0)" id="teamblueA_13"><img src={call}alt="Call" id="teamblueIMG_14" /></a></span> <a href="mailto:paul@bluecubecloud.com" id="teamblueA_15"><img src={mail} alt="Email" id="teamblueIMG_16" /></a> <a href="https://www.linkedin.com/in/paulreames/" id="teamblueA_17"><img src={linkedin} alt="LinkedIn" id="teamblueIMG_18" /></a>
				</div>
			</div>
		</div>
		<div id="teamblueDIV_19">
			<div id="teamblueDIV_20">
				<img src="https://www.bluecubecloud.com/wp-content/uploads/CV28_Bluecube_180815-370x370.jpg" alt="Emma - Finance Director at Bluecube" id="teamblueIMG_21" />
			</div>
			<div id="teamblueDIV_22">
				<div id="teamblueDIV_23">
					<img src={busy} id="teamblueIMG_24" alt='' />
				</div> <span id="teamblueSPAN_25">Emma</span> <span id="teamblueSPAN_26">Finance Director</span>
				<div id="teamblueDIV_27">
					 <span id="teamblueSPAN_28"><a href="javascript:void(0)" id="teamblueA_29"><img src={call}alt="Call" id="teamblueIMG_30" /></a></span> <a href="mailto:emma@bluecubecloud.com" id="teamblueA_31"><img src={mail} alt="Email" id="teamblueIMG_32" /></a> <a href="https://www.linkedin.com/in/emma-reames-13631b3/" id="teamblueA_33"><img src={linkedin} alt="LinkedIn" id="teamblueIMG_34" /></a>
				</div>
			</div>
		</div>
		<div id="teamblueDIV_35">
			<div id="teamblueDIV_36">
				<img src="https://www.bluecubecloud.com/wp-content/uploads/Kate-linkedin-370x370.jpg" alt="Kate's profile" id="teamblueIMG_37" />
			</div>
			<div id="teamblueDIV_38">
				<div id="teamblueDIV_39">
					<img src={away} id="teamblueIMG_40" alt='' />
				</div> <span id="teamblueSPAN_41">Kate</span> <span id="teamblueSPAN_42">Billing Manager</span>
				<div id="teamblueDIV_43">
					 <span id="teamblueSPAN_44"><a href="javascript:void(0)" id="teamblueA_45"><img src={call} alt="Call" id="teamblueIMG_46" /></a></span> <a href="mailto:kate@bluecubecloud.com" id="teamblueA_47"><img src={mail} alt="Email" id="teamblueIMG_48" /></a> <a href="https://www.linkedin.com/in/kate-brown-819b4590/" id="teamblueA_49"><img src={linkedin} alt="LinkedIn" id="teamblueIMG_50" /></a>
				</div>
			</div>
		</div>
		<div id="teamblueDIV_51">
			<div id="teamblueDIV_52">
				<img src="https://www.bluecubecloud.com/wp-content/uploads/Oliver-HEAD-high-res2-370x370.jpg" alt="" id="teamblueIMG_53" />
			</div>
			<div id="teamblueDIV_54">
				<div id="teamblueDIV_55">
					<img src={offline} id="teamblueIMG_56" alt='' />
				</div> <span id="teamblueSPAN_57">Oliver</span> <span id="teamblueSPAN_58">Service Delivery Manager</span>
				<div id="teamblueDIV_59">
					 <span id="teamblueSPAN_60"><a href="javascript:void(0)" id="teamblueA_61"><img src={call} alt="Call" id="teamblueIMG_62" /></a></span> <a href="mailto:oliver@bluecubecloud.com" id="teamblueA_63"><img src={mail} alt="Email" id="teamblueIMG_64" /></a> <a href="https://www.linkedin.com/in/oliver-walker-7843761b2/" id="teamblueA_65"><img src={linkedin} alt="LinkedIn" id="teamblueIMG_66" /></a>
				</div>
			</div>
		</div>
		<div id="teamblueDIV_67">
			<div id="teamblueDIV_68">
				<img src="https://www.bluecubecloud.com/wp-content/uploads/Jack-LinkedIn-370x370.jpg" alt="Jack Waby profile" id="teamblueIMG_69" />
			</div>
			<div id="teamblueDIV_70">
				<div id="teamblueDIV_71">
					<img src={busy} id="teamblueIMG_72" alt='' />
				</div> <span id="teamblueSPAN_73">Jack</span> <span id="teamblueSPAN_74">Business Development Manager</span>
				<div id="teamblueDIV_75">
					 <span id="teamblueSPAN_76"><a href="javascript:void(0)" id="teamblueA_77"><img src={call} alt="Call" id="teamblueIMG_78" /></a></span> <a href="mailto:jack@bluecubecloud.com" id="teamblueA_79"><img src={mail} alt="Email" id="teamblueIMG_80" /></a> <a href="https://www.linkedin.com/in/jack-waby-507164b0/" id="teamblueA_81"><img src={linkedin} alt="LinkedIn" id="teamblueIMG_82" /></a>
				</div>
			</div>
		</div>
		<div id="teamblueDIV_83">
			<div id="teamblueDIV_84">
				<img src="https://www.bluecubecloud.com/wp-content/uploads/Niall-bluecube-370x370.jpg" alt="Niall at Bluecube" id="teamblueIMG_85" />
			</div>
			<div id="teamblueDIV_86">
				<div id="teamblueDIV_87">
					<img src={away} id="teamblueIMG_88" alt='' />
				</div> <span id="teamblueSPAN_89">Niall</span> <span id="teamblueSPAN_90">Technical Support Manager</span>
				<div id="teamblueDIV_91">
					 <span id="teamblueSPAN_92"><a href="javascript:void(0)" id="teamblueA_93"><img src={call}alt="Call" id="teamblueIMG_94" /></a></span> <a href="mailto:niall@bluecubecloud.com" id="teamblueA_95"><img src={mail}alt="Email" id="teamblueIMG_96" /></a> <a href="https://www.linkedin.com/in/niall-gibson-381839101/" id="teamblueA_97"><img src={linkedin} alt="LinkedIn" id="teamblueIMG_98" /></a>
				</div>
			</div>
		</div>
	</div>
</section>


 {/* intereated */}
 <div className='get_interested_div backwhite'><Get_interested></Get_interested></div>


    </div>
  );
}

export default Aboutus;
