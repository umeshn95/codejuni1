import React from 'react'
import Navbar from './Navbar';
import why0 from '../image/why.png';
import why1 from '../image/whycode.png';
import why2 from '../image/whycode1.png';
import Footer from './Footer';
import pl from '../svg/plus.svg';
import lapgrl from '../image/lapgirl.svg';
import './Why.css'
import codethink from '../image/Code_thinking.svg';
import math from '../image/mathimportance.svg';  
import coffee from '../image/coffeecup.svg';    

function Why() {
    return (
        <div>
        <div id="reasonDIV_1">
	<div id="reasonDIV_2">
	</div>
	<picture id="reasonPICTURE_3">
		<source id="reasonSOURCE_4" /><img src={pl}alt="Background shapes" id="reasonIMG_5" />
	</picture>
	<picture id="reasonPICTURE_6">
		<source id="reasonSOURCE_7" /><img src={pl} alt="Background shapes" id="reasonIMG_8" />
	</picture>
	<div id="reasonDIV_9">
		<h1 id="reasonH1_10">
			3 reasons why children should learn to code
		</h1>
		<div id="reasonDIV_11">
			<div id="reasonDIV_12">
				<div id="reasonDIV_13">
				</div>
				<picture id="reasonPICTURE_14">
					<source id="reasonSOURCE_15" /><img src={lapgrl} alt="maze" id="reasonIMG_16" />
				</picture>
				<div id="reasonDIV_17">
					<span id="reasonSPAN_18">Coding helps improve logical thinking and problem-solving skills by 70% among kids at a young age, also enabling them to perform better at school.</span>
				</div>
			</div>
			<div id="reasonDIV_19">
				<div id="reasonDIV_20">
				</div>
				<picture id="reasonPICTURE_21">
					<source id="reasonSOURCE_22" /><img src={codethink} alt="road intersection" id="reasonIMG_23" />
				</picture>
				<div id="reasonDIV_24">
					<span id="reasonSPAN_25">Coding jobs are the future. With technology becoming all pervasive and developing at a rapid pace, coding is a skill that has become indispensable!</span>
				</div>
			</div>
			<div id="reasonDIV_26">
				<div id="reasonDIV_27">
				</div>
				<picture id="reasonPICTURE_28">
					<source id="reasonSOURCE_29" /><img src={math} alt="road calculator" id="reasonIMG_30" />
				</picture>
				<div id="reasonDIV_31">
					<span id="reasonSPAN_32">Math is not just for mathematicians. Biology is not just for biologists and doctors. Learning to code is not just for kids wanting to take up computer science in the future.</span>
				</div>
			</div>
		</div>
	</div>
	<div id="reasonDIV_33">
		<a href="" id="reasonA_34">Book your free class now</a>
	</div>
</div>









        </div>


















    )
  }

export default Why
