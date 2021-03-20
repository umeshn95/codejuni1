import React from 'react';
import './Studentrw.css';
import mathlab from '../image/mathlab.svg';
import abstract from '../image/abstract.svg';
import coffee from '../image/coffeecup.svg';   
import cloud from '../image/cloud.svg';
import dotted from '../image/dotted.svg';


function Studentrw() {
    return (
        <div>
            <div id="studentsDIV_1">
	<img alt="vector shape" src={mathlab} id="studentsIMG_2" /><img alt="vector shape" src="https://cdn.codingal.com/images/home/student-testimonials/waves.svg" id="studentsIMG_3" /><img alt="vector shape" src={abstract} id="studentsIMG_4" /><img alt="vector shape" src={abstract} id="studentsIMG_5" /><img alt="vector shape" src={mathlab} id="studentsIMG_6" /><img alt="vector shape" src={mathlab} id="studentsIMG_7" />
	<div id="studentsDIV_8">
		<p id="studentsP_9">
			"Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn."
		</p>
		<p id="studentsP_10">
			- Stephen Hawking
		</p>
	</div>
	<div id="studentsDIV_11">
		<div id="studentsDIV_12">
			<img alt="vector shape" src="https://cdn.codingal.com/images/book-trial-class/shape-1.svg" id="studentsIMG_13" /><img alt="vector shape" src={cloud} id="studentsIMG_14" /><img alt="vector shape" src={coffee} id="studentsIMG_15" /><img alt="vector shape" src={dotted} id="studentsIMG_16" />
			<picture id="studentsPICTURE_17">
				<source id="studentsSOURCE_18" /><img src="https://cdn.codingal.com/images/home/student-testimonials/vihaan.png" alt="vihaan" id="studentsIMG_19" />
			</picture>
			<p id="studentsP_20">
				Thanks to Ruchi ma'am and her detailed explanation of the concepts of coding, I could create my own space animation!
			</p>
			<p id="studentsP_21">
				-
				{/* <!-- --> */}
vihaan
			</p>
		</div>
		<div id="studentsDIV_22">
			<img alt="vector shape" src="https://cdn.codingal.com/images/book-trial-class/shape-1.svg" id="studentsIMG_23" /><img alt="vector shape" src={cloud} id="studentsIMG_24" /><img alt="vector shape" src={coffee} id="studentsIMG_25" /><img alt="vector shape" src={dotted} id="studentsIMG_26" />
			<picture id="studentsPICTURE_27">
				<source id="studentsSOURCE_28" /><img src="https://cdn.codingal.com/images/home/student-testimonials/advik.png" alt="advik" id="studentsIMG_29" />
			</picture>
			<p id="studentsP_30">
				Through Codingal, I realised that coding is not something very difficult and complex but actually interesting and fun!
			</p>
			<p id="studentsP_31">
				-
				{/* <!-- --> */}
advik
			</p>
		</div>
	</div><a href="https://www.codingal.com/register/" id="studentsA_32">Book your free class now</a>
</div>
        </div>
    )
}

export default Studentrw
