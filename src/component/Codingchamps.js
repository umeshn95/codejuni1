import React,{useLayoutEffect} from 'react';
import './Codingchamps.css';
import anush from '../image/anushree.png';
import Navbar from './Navbar';
import star from '../image/stars.svg';
import location from '../image/location.svg';
import growth from '../image/growth.svg'



function Codingchamp(props) {


	useLayoutEffect(() => {
		document.body.scrollTop = 0;
		console.log(props.projectdesc1)
	});
	


    return (
        <div>
			<div className='rel'><Navbar></Navbar></div>
            {/* codingchamp1 header */}
            <div id="codechamp1DIV_1">
	<div id="codechamp1DIV_2">
		<div id="codechamp1DIV_3">
			<div id="codechamp1DIV_4">
				{props.coursename}
			</div>
			<h1 id="codechamp1H1_5">
				{props.coursedetail}
			</h1>
			<div id="codechamp1DIV_6">
				<div id="codechamp1DIV_7">
					<span id="codechamp1SPAN_8">{props.level}</span><span id="codechamp1SPAN_9">{props.levelnumber}</span>
				</div>
				<div id="codechamp1DIV_10">
					<span id="codechamp1SPAN_11">{props.grade}</span><span id="codechamp1SPAN_12">{props.gradenumber}</span>
				</div>
				<div id="codechamp1DIV_13">
					<span id="codechamp1SPAN_14">PRE - REQ</span><span id="codechamp1SPAN_15">None</span>
				</div>
			</div>
			<div id="codechamp1DIV_16">
				<button id="codechamp1BUTTON_17">
					enroll now
				</button>
				<button id="codechamp1BUTTON_18">
					book a free trial
				</button>
			</div>
			<div id="codechamp1DIV_19">
				<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='15' viewBox='0 0 23 15'%3E %3Cpath fill='%23FFC628' fill-rule='nonzero' stroke='%23FFC628' stroke-width='.5' d='M21.821 1.206C21.696 1.07 21.506 1 21.265 1h-.07c-1.225.057-2.446.118-3.67.175-.165.009-.39.018-.566.197a.654.654 0 0 0-.134.202c-.181.399.074.657.194.78l.307.315c.211.22.427.439.643.653l-7.404 7.523-3.326-3.378a1.05 1.05 0 0 0-1.497 0L1.31 11.963c-.415.42-.415 1.1 0 1.52l.198.202a1.05 1.05 0 0 0 1.497 0l3.482-3.536 3.326 3.378a1.05 1.05 0 0 0 1.502 0l8.352-8.483.945.955c.112.114.268.272.505.272.1 0 .199-.026.302-.083a.823.823 0 0 0 .181-.136c.186-.189.22-.43.229-.618.034-.806.073-1.612.112-2.423l.056-1.214c.013-.254-.043-.45-.177-.591z'/%3E %3C/svg%3E" alt="trending-icon" id="codechamp1IMG_20" /><span id="codechamp1SPAN_21">4.1k</span> happy students. <span id="codechamp1SPAN_22">Read reviews</span>
			</div>
		</div>
		<div id="codechamp1DIV_23">
		</div>
	</div>
</div>


{/* coding champ2 */}

<div id="codechamp2DIV_1">
	<div id="codechamp2DIV_2">
		<div id="codechamp2DIV_3">
			<div id="codechamp2DIV_4">
				<div id="codechamp2DIV_5">
					<div id="codechamp2DIV_6">
						<div id="codechamp2DIV_7">
							<img src={growth} alt="trending-icon" id="codechamp2IMG_8" /><span id="codechamp2SPAN_9">4.1k</span> happy students. <span id="codechamp2SPAN_10">See what they're saying.</span>
						</div>
					</div>
				</div>
			</div>
			<div id="codechamp2DIV_11">
				<div id="codechamp2DIV_12">
					<h2 id="codechamp2H2_13">
						COURSE OVERVIEW
					</h2>
					<p id="codechamp2DIV_14">
					{props.courseoverview}
					</p>
				</div>
				<div id="codechamp2DIV_15">
					<h2 id="codechamp2H2_16">
						TOPICS COVERED
					</h2>
					<ul id="codechamp2UL_17">
						<li id="codechamp2LI_18">
							{props.topicover1}
						</li>
						<li id="codechamp2LI_19">
							{props.topicover2}
						</li>
						<li id="codechamp2LI_20">
							{props.topicover3}
						</li>
						<li id="codechamp2LI_21">
						{props.topicover4}
						</li>
						<li id="codechamp2LI_22">
						{props.topicover5}
						</li>
						<li id="codechamp2LI_23">
							{props.topicover6}
						</li>
						<li id="codechamp2LI_24">
							{props.topicover7}
						</li>
						<li id="codechamp2LI_25">
						{props.topicover8}
						</li>
					</ul>
				</div>
			</div>
			<div id="codechamp2DIV_26">
				<div id="codechamp2DIV_27">
					<h2 id="codechamp2H2_28">
						{props.whycourse}
					</h2>
					<div id="codechamp2DIV_29">
						{props.whydetails}
					</div>
				</div>
			</div>
			<div id="codechamp2DIV_32">
				<div id="codechamp2DIV_33">
					<div id="codechamp2DIV_34">
						<h2 id="codechamp2H2_35">
							PICK A BATCH
						</h2><span id="codechamp2SPAN_36">Please select a batch according to your convenience to enroll now.</span>
					</div>
					<div id="codechamp2DIV_37">
					</div>
				</div>
			</div>
			<div id="codechamp2DIV_38">
				<div id="codechamp2DIV_39">
					<h2 id="codechamp2H2_40">
						SKILLS YOU WILL UNLOCK
					</h2>
					<div id="codechamp2DIV_41">
						<div id="codechamp2DIV_42">
							<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='35' height='35' viewBox='0 0 35 35'%3E %3Cdefs%3E %3ClinearGradient id='a' x1='0%25' x2='97.915%25' y1='39.241%25' y2='39.241%25'%3E %3Cstop offset='0%25' stop-color='%230BF5C2'/%3E %3Cstop offset='100%25' stop-color='%2304E1AF'/%3E %3C/linearGradient%3E %3ClinearGradient id='b' x1='0%25' y1='36.923%25' y2='36.923%25'%3E %3Cstop offset='0%25' stop-color='%230FFFCC'/%3E %3Cstop offset='100%25' stop-color='%2304E1AF'/%3E %3C/linearGradient%3E %3Cpath id='c' d='M24.003 1.775c1.855 0 3.367 1.5 3.367 3.34v13.849c0 1.621-.73 3.25-2.046 4.881-1.061 1.317-2.487 2.613-4.187 3.878a42.917 42.917 0 0 1-4.1 2.68 43.032 43.032 0 0 1-1.734.952l-.143.072-.465.23-.466-.23a29.324 29.324 0 0 1-.526-.273 43.032 43.032 0 0 1-1.351-.75 42.917 42.917 0 0 1-4.1-2.681c-1.7-1.265-3.126-2.561-4.187-3.878-1.316-1.631-2.046-3.26-2.046-4.881V5.114c0-1.838 1.513-3.339 3.367-3.339h18.617zm-9.3 27.586c.386-.206.818-.445 1.283-.715 1.33-.77 2.659-1.63 3.895-2.55 3.387-2.525 5.395-5.019 5.395-7.115V5.125c0-.701-.58-1.279-1.285-1.279H5.398c-.704 0-1.285.578-1.285 1.279V18.98c0 2.096 2.008 4.59 5.395 7.115a40.813 40.813 0 0 0 3.895 2.55 40.882 40.882 0 0 0 1.292.719l.008-.004z'/%3E %3Cfilter id='d' width='103.9%25' height='103.3%25' x='-2%25' y='-1.7%25' filterUnits='objectBoundingBox'%3E %3CfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3E %3CfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3E %3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3E %3CfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32775702 0'/%3E %3C/filter%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='url(%23a)' d='M26.36 0H2.93C1.318 0 0 1.31 0 2.91v17.456c0 7.274 14.645 14.547 14.645 14.547s14.644-7.273 14.644-14.547V2.909C29.29 1.31 27.971 0 26.36 0z' transform='translate(3)'/%3E %3Cpath fill='url(%23b)' d='M23.668 2.367H5.621c-1.24 0-2.256 1.004-2.256 2.231v13.388c0 5.58 11.28 11.157 11.28 11.157s11.279-5.578 11.279-11.157V4.598c0-1.227-1.015-2.231-2.256-2.231z' transform='translate(3)'/%3E %3Cg fill-rule='nonzero' transform='translate(3)'%3E %3Cuse fill='%230BBD9B' xlink:href='%23c'/%3E %3Cuse fill='%23000' filter='url(%23d)' xlink:href='%23c'/%3E %3C/g%3E %3Cg%3E %3Cpath fill='%230ABA98' d='M22.69 13.145a.894.894 0 0 0-.899.89h-7.824a.894.894 0 0 0-.899-.89.894.894 0 0 0-.898.89V18.8a.89.89 0 0 0 .596.838l4.81 1.703a.907.907 0 0 0 .605 0l4.81-1.703a.89.89 0 0 0 .597-.838v-4.766a.894.894 0 0 0-.899-.89z'/%3E %3Cpath fill='%2309A98A' d='M22.73 13.145a.894.894 0 0 0-.899.89H17.92v7.357a.907.907 0 0 0 .302-.051l4.81-1.703a.89.89 0 0 0 .597-.838v-4.766a.894.894 0 0 0-.899-.89z'/%3E %3Cpath fill='%231CA288' d='M24.924 12.494l-6.735-2.382a.904.904 0 0 0-.604 0l-6.735 2.382a.89.89 0 0 0-.596.839.89.89 0 0 0 .596.838l6.735 2.383a.907.907 0 0 0 .604 0l6.735-2.383a.89.89 0 0 0 .596-.838.89.89 0 0 0-.596-.839z'/%3E %3Cpath fill='%23298875' d='M18.221 16.554l6.735-2.383a.89.89 0 0 0 .596-.838.89.89 0 0 0-.596-.839l-6.735-2.383a.902.902 0 0 0-.302-.051v6.545a.907.907 0 0 0 .302-.051z'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E" alt="skill icon" id="codechamp2IMG_43" /><span id="codechamp2SPAN_45">{props.skill1}</span><span id="codechamp2SPAN_45">{props.skill2}</span><span id="codechamp2SPAN_45">{props.skill3}</span><span id="codechamp2SPAN_45">{props.skill4}</span><span id="codechamp2SPAN_45">{props.skill5}</span><span id="codechamp2SPAN_45">{props.skill6}</span><span id="codechamp2SPAN_45">{props.skill7}</span>
						</div>
					</div>
				</div>
				<div id="codechamp2DIV_51">
					<h2 id="codechamp2H2_52">
						COINS YOU WILL EARN
					</h2>
					<div id="codechamp2DIV_53">
						<div id="codechamp2DIV_54">
							<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='35' height='35' viewBox='0 0 35 35'%3E %3Cdefs%3E %3Cfilter id='a' width='170%25' height='170%25' x='-31.7%25' y='-31.7%25' filterUnits='objectBoundingBox'%3E %3CfeOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/%3E %3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1'/%3E %3CfeColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.146880661 0'/%3E %3CfeMerge%3E %3CfeMergeNode in='shadowMatrixOuter1'/%3E %3CfeMergeNode in='SourceGraphic'/%3E %3C/feMerge%3E %3C/filter%3E %3ClinearGradient id='d' x1='-23.862%25' x2='96.378%25' y1='53.401%25' y2='50%25'%3E %3Cstop offset='0%25' stop-color='%23FFDF64'/%3E %3Cstop offset='100%25' stop-color='%23FFD123'/%3E %3C/linearGradient%3E %3Cpath id='c' d='M29.872 15.019a15.005 15.005 0 0 1-.902 5.124 14.981 14.981 0 0 1-1.668 3.257 15.455 15.455 0 0 1-1.794 2.171c-.385.383-.789.745-1.211 1.085a14.875 14.875 0 0 1-9.361 3.296C6.687 29.95 0 23.262 0 15.02 0 6.796 6.642.128 14.851.083h.085a14.926 14.926 0 0 1 11.926 5.944 14.795 14.795 0 0 1 2.807 6.513 15.158 15.158 0 0 1 .203 2.479z'/%3E %3Cfilter id='b' width='143.5%25' height='143.5%25' x='-18.4%25' y='-18.4%25' filterUnits='objectBoundingBox'%3E %3CfeOffset dx='1' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/%3E %3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3E %3CfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0877490942 0'/%3E %3C/filter%3E %3ClinearGradient id='e' x1='82.236%25' x2='12.142%25' y1='50.717%25' y2='50.717%25'%3E %3Cstop offset='0%25' stop-color='%23F4BF1A'/%3E %3Cstop offset='100%25' stop-color='%23F4BF1A'/%3E %3C/linearGradient%3E %3Cpath id='f' d='M14.936 2.556h-.073c-6.825.02-12.345 5.563-12.335 12.387.01 6.824 5.546 12.35 12.371 12.35 6.826 0 12.362-5.526 12.372-12.35.01-6.824-5.51-12.367-12.335-12.387zm0 21.651c-5.078 0-9.194-4.115-9.194-9.191 0-5.076 4.116-9.191 9.194-9.191 5.077 0 9.193 4.115 9.193 9.191a9.19 9.19 0 0 1-9.193 9.194v-.003z'/%3E %3Cfilter id='g' width='104%25' height='104%25' x='-2%25' y='-2%25' filterUnits='objectBoundingBox'%3E %3CfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3E %3CfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3E %3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3E %3CfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.702540391 0 0 0 0 0.555144915 0 0 0 0 0.0962722056 0 0 0 1 0'/%3E %3C/filter%3E %3ClinearGradient id='h' x1='99.996%25' x2='0%25' y1='50.531%25' y2='49.437%25'%3E %3Cstop offset='0%25' stop-color='%23FFD123'/%3E %3Cstop offset='100%25' stop-color='%23FAE388'/%3E %3C/linearGradient%3E %3Cpath id='i' d='M16.213 15.016l2.99-5.176h-5.979z'/%3E %3Cfilter id='j' width='133.5%25' height='138.6%25' x='-16.7%25' y='-19.3%25' filterUnits='objectBoundingBox'%3E %3CfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3E %3CfeOffset dy='1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3E %3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3E %3CfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.823529412 0 0 0 0 0.643137255 0 0 0 0 0.0941176471 0 0 0 0.594514266 0'/%3E %3C/filter%3E %3Cpath id='k' d='M16.213 15.015L19.2 20.19h-5.977z'/%3E %3Cfilter id='l' width='133.5%25' height='138.6%25' x='-16.7%25' y='-19.3%25' filterUnits='objectBoundingBox'%3E %3CfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3E %3CfeOffset dy='1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3E %3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3E %3CfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.823529412 0 0 0 0 0.643137255 0 0 0 0 0.0941176471 0 0 0 0.594514266 0'/%3E %3C/filter%3E %3Cpath id='m' d='M13.224 9.84l2.99 5.176h-5.978z'/%3E %3Cfilter id='n' width='133.5%25' height='138.6%25' x='-16.7%25' y='-19.3%25' filterUnits='objectBoundingBox'%3E %3CfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3E %3CfeOffset dy='1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3E %3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3E %3CfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.823529412 0 0 0 0 0.643137255 0 0 0 0 0.0941176471 0 0 0 0.594514266 0'/%3E %3C/filter%3E %3Cpath id='o' d='M13.224 20.191l2.99-5.175h-5.978z'/%3E %3Cfilter id='p' width='133.5%25' height='138.6%25' x='-16.7%25' y='-19.3%25' filterUnits='objectBoundingBox'%3E %3CfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3E %3CfeOffset dy='1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3E %3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3E %3CfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.823529412 0 0 0 0 0.643137255 0 0 0 0 0.0941176471 0 0 0 0.409222147 0'/%3E %3C/filter%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd' filter='url(%23a)' transform='translate(3 3)'%3E %3Cg fill-rule='nonzero'%3E %3Cuse fill='%23000' filter='url(%23b)' xlink:href='%23c'/%3E %3Cuse fill='url(%23d)' xlink:href='%23c'/%3E %3C/g%3E %3Cg fill-rule='nonzero'%3E %3Cuse fill='url(%23e)' xlink:href='%23f'/%3E %3Cuse fill='%23000' filter='url(%23g)' xlink:href='%23f'/%3E %3C/g%3E %3Cpath stroke='%23000' stroke-width='.6' d='M14.851.083h.003'/%3E %3Cpath fill='url(%23h)' fill-rule='nonzero' d='M24.13 15.019c0 5.076-4.116 9.191-9.194 9.191-5.077 0-9.193-4.115-9.193-9.191 0-5.076 4.116-9.191 9.193-9.191 5.078 0 9.194 4.115 9.194 9.19z'/%3E %3Cuse fill='%23F4BF1A' xlink:href='%23i'/%3E %3Cuse fill='%23000' filter='url(%23j)' xlink:href='%23i'/%3E %3Cuse fill='%23F4BF1A' xlink:href='%23k'/%3E %3Cuse fill='%23000' filter='url(%23l)' xlink:href='%23k'/%3E %3Cg%3E %3Cuse fill='%23F4BF1A' xlink:href='%23m'/%3E %3Cuse fill='%23000' filter='url(%23n)' xlink:href='%23m'/%3E %3C/g%3E %3Cg%3E %3Cuse fill='%23F4BF1A' xlink:href='%23o'/%3E %3Cuse fill='%23000' filter='url(%23p)' xlink:href='%23o'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E" alt="coins icon" id="codechamp2IMG_55" /><span id="codechamp2SPAN_56">1000+</span>
						</div>
					</div>
				</div>
			</div>
			<div id="codechamp2DIV_57">
			</div>
		
			<div id="codechamp2DIV_61">
				<h2 id="codechamp2H2_62">
					PROJECTS YOU WILL BUILD
				</h2>
			</div>
			<div className='codechampdiv'>
			<div id="codechamp2DIV_63">
				<div id="codechamp2DIV_64">
					<div id="codechamp2DIV_65">
						<img src={props.projectimg1}alt="project-thumbnail" id="codechamp2IMG_66" />
						<div id="codechamp2DIV_67">
						</div>
						<div id="codechamp2DIV_68">
							{props.projectdesc1}
						</div>
					</div>
					<div id="codechamp2DIV_69">
						<img src={props.projectimg2} id="codechamp2IMG_70" />
						<div id="codechamp2DIV_71">
						</div>
						<div id="codechamp2DIV_72">
						{props.projectdesc2}
						</div>
					</div>
					<div id="codechamp2DIV_73">
						<img src={props.projectimg3} alt="project-thumbnail" id="codechamp2IMG_74" />
						<div id="codechamp2DIV_75">
						</div>
						<div id="codechamp2DIV_76">
							{props.projectdesc3}
						</div>
					</div>
					<div id="codechamp2DIV_77">
						<img src={props.projectimg4}alt="project-thumbnail" id="codechamp2IMG_78" />
						<div id="codechamp2DIV_79">
						</div>
						<div id="codechamp2DIV_80">
							{props.projectdesc4}
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</div>


{/* codechamp 3 */}

<div id="codechamp3DIV_1">
	<div id="codechamp3DIV_2">
		<div id="codechamp3DIV_3">
			<div id="codechamp3DIV_4">
				<h2 id="codechamp3H2_5">
					the campk12 advantage
				</h2>
			</div>
			<div id="codechamp3DIV_6">
				<div id="codechamp3DIV_7">
					<img src={props.advantageimg1} alt="card 1" id="codechamp3IMG_8" />
					<p id="codechamp3DIV_9">
						{props.advantagedes1}
					</p>
					
				</div>
				<div id="codechamp3DIV_11">
					<img src={props.advantageimg2} alt="card 2" id="codechamp3IMG_12" />
					<p id="codechamp3DIV_13">
						{props.advantagedes2}
					</p>
					
				</div>
				<div id="codechamp3DIV_15">
					<img src={props.advantageimg3} alt="card 3" id="codechamp3IMG_16" />
					<p id="codechamp3DIV_17">
						{props.advantagedes3}
					</p>
					
				</div>
			</div>
		</div>
	</div>
</div>




{/* coding champ 4 */}


<div id="codechamp4DIV_1">
	<div id="codechamp4DIV_2">
		<div id="codechamp4DIV_3">
			<div id="codechamp4DIV_4">
				<h2 id="codechamp4H2_5">
					REVIEWS FROM PAST STUDENTS
				</h2>
			</div>
			<div id="codechamp4DIV_6">
				<div id="codechamp4DIV_7">
					<div id="codechamp4DIV_8">
						<div id="codechamp4DIV_9">
							<div id="codechamp4DIV_10">
								<div id="codechamp4DIV_11">
								{props.studentdesc1}
								</div>
								<div id="codechamp4DIV_12">
									<img src={star} alt="active" id="codechamp4IMG_13" /><img src={star} alt="active" id="codechamp4IMG_14" /><img src={star} alt="active" id="codechamp4IMG_15" /><img src={star} alt="active" id="codechamp4IMG_16" /><img src={star} alt="active" id="codechamp4IMG_17" />
								</div>
								<div id="codechamp4DIV_18">
									<div id="codechamp4DIV_19">
										<div id="codechamp4DIV_20">
											{props.studentname1}
										</div>
										<div id="codechamp4DIV_21">
											{props.studentschool1}
										</div>
									</div>
									<div id="codechamp4DIV_22">
										<img src={location} alt="location" id="codechamp4IMG_23" />{props.studentlocation1}
									</div>
								</div>
							</div>
						</div>
						<div id="codechamp4DIV_24">
							<div id="codechamp4DIV_25">
								<div id="codechamp4DIV_26">
									{props.studentdesc2}
								</div>
								<div id="codechamp4DIV_27">
									<img src={star} alt="active" id="codechamp4IMG_28" /><img src={star}alt="active" id="codechamp4IMG_29" /><img src={star} alt="active" id="codechamp4IMG_30" /><img src={star}alt="active" id="codechamp4IMG_31" /><img src={star} alt="active" id="codechamp4IMG_32" />
								</div>
								<div id="codechamp4DIV_33">
									<div id="codechamp4DIV_34">
										<div id="codechamp4DIV_35">
											{props.studentname2}
										</div>
										<div id="codechamp4DIV_36">
											{props.studentschool2}
										</div>
									</div>
									<div id="codechamp4DIV_37">
										<img src={location}alt="location" id="codechamp4IMG_38" />{props.studentlocation2}
									</div>
								</div>
							</div>
						</div>
						<div id="codechamp4DIV_39">
							<div id="codechamp4DIV_40">
								<div id="codechamp4DIV_41">
								{props.studentdesc3}
								</div>
								<div id="codechamp4DIV_42">
									<img src={star} alt="active" id="codechamp4IMG_43" /><img src={star} alt="active" id="codechamp4IMG_44" /><img src={star}alt="active" id="codechamp4IMG_45" /><img src={star} alt="active" id="codechamp4IMG_46" /><img src={star} alt="active" id="codechamp4IMG_47" />
								</div>
								<div id="codechamp4DIV_48">
									<div id="codechamp4DIV_49">
										<div id="codechamp4DIV_50">
										{props.studentname3}
										</div>
										<div id="codechamp4DIV_51">
											{props.studentschool3}
										</div>
									</div>
									<div id="codechamp4DIV_52">
										<img src={location} alt="location" id="codechamp4IMG_53" />{props.studentlocation3}
									</div>
								</div>
							</div>
						</div>
						<div id="codechamp4DIV_54">
							<div id="codechamp4DIV_55">
								<div id="codechamp4DIV_56">
								{props.studentdesc4}
								</div>
								<div id="codechamp4DIV_57">
									<img src={star} alt="active" id="codechamp4IMG_58" /><img src={star} alt="active" id="codechamp4IMG_59" /><img src={star} alt="active" id="codechamp4IMG_60" /><img src={star} alt="active" id="codechamp4IMG_61" /><img src={star} alt="active" id="codechamp4IMG_62" />
								</div>
								<div id="codechamp4DIV_63">
									<div id="codechamp4DIV_64">
										<div id="codechamp4DIV_65">
										{props.studentname4}
										</div>
										<div id="codechamp4DIV_66">
											{props.studentschool4}
										</div>
									</div>
									<div id="codechamp4DIV_67">
										<img src={location} alt="location" id="codechamp4IMG_68" />{props.studentlocation4}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>










        </div>
    )
}

export default Codingchamp
