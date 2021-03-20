import { faBookReader, faChalkboardTeacher, faHeart, faLaptopCode, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Counter1.css'

function Counter() {

    document.body.addEventListener("scroll", () => {
        if (document.body.scrollTop >= 2800) {
            console.log(window.scrollY)
            const counters = document.querySelectorAll('.counter');
            const speed = 1000; // The lower the slower
            
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
            
                    // Lower inc to slow and higher to slow
                    const inc = target / speed;
            
                    // console.log(inc);
                    // console.log(count);
            
                    // Check if target is reached
                    if (count < target) {
                        // Add inc to count and output in counter
                        counter.innerText = count + inc;
                        // Call function every ms
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
            
                updateCount();
            });
            
        }
        } )
   






    return (
        <div className='main_counterc'>
            
		<section class="counters">
			<div class="containerc">
				<div className='target1'>
					<FontAwesomeIcon icon={faUserGraduate}  style={{color:'#bedcfa', fontSize:'6em'}}></FontAwesomeIcon>
					<div class="counter" data-target="6000">0</div>
					<h3>Stundent Studied</h3>
				</div>
				<div className='target1'>
                <FontAwesomeIcon icon={faLaptopCode}  style={{color:'#d6c7d6', fontSize:'6em'}}></FontAwesomeIcon>
					<div class="counter" data-target="15000">0</div>
					<h3>Code Generated</h3>
				</div>
				<div className='target1'>
                <FontAwesomeIcon icon={faHeart}  style={{color:'pink', fontSize:'6em'}}></FontAwesomeIcon>
					<div class="counter" data-target="1000">0</div>
					<h3>Parent Love</h3>
				</div>
				<div className='target1'>
					
					<FontAwesomeIcon icon={faChalkboardTeacher}  style={{color:'#f7d560', fontSize:'6em'}}></FontAwesomeIcon>
                    <div class="counter" data-target="7000">0</div>
					<h3>lessons</h3>
				</div>
			</div>
		</section>
        </div>
    )
}

export default Counter
