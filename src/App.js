import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Aboutus from './component/Aboutus';
import Appinfo from './component/Appinfo';
import Contactus from './component/Contactus';
import Counsell from './component/Counsell';
import Footer from './component/Footer';
import Home from './component/Home';
import How from './component/How';
import Navbar from './component/Navbar';
import Ourmentor from './component/Ourmentor';
import Ourteachp from './component/Ourteachp';
import { Payment } from './component/Payment';
import Proceed from './component/Proceed';
import { Register } from './component/Register';
import Review from './component/Review';
import Scratch from './component/Scratch';
import Why from './component/Why';
import React,{useEffect} from 'react'
import Login from './component/Login';
import Signup from './component/Signup';
import Phillosophy from './component/Phillosophy';
import Contactcodejuni from './component/Contactcodejuni';
import Schools from './component/Schools';
import Ourstory from './component/Ourstory';
import Codingchamps from './component/Codingchamps';
import anush from "../src/image/anushree.png";

function App() {


  
  useEffect(()=>{
    console.log(window.scrollY)

  })
     



 
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} >
    <div className="App">
      <Switch>
<Route exact path='/'>
  
  <Navbar></Navbar>
  <Home></Home>
  {/* <Footer></Footer> */}
</Route>
<Route exact path='/home' ><Navbar></Navbar>
<Home></Home>

</Route>
<Route exact path='/aboutus'><Aboutus></Aboutus><Footer></Footer></Route>
<Route exact path='/mentor'><Ourmentor></Ourmentor></Route>
<Route exact path='/courses'><Navbar></Navbar><Appinfo></Appinfo><Scratch></Scratch><Counsell></Counsell></Route>
<Route exact path='/how'><How></How></Route>
<Route exact path='/whycode'><Why></Why></Route>
<Route exact path='/ourteachp'><Ourteachp></Ourteachp></Route>
<Route exact path='/contact'><Navbar></Navbar><Contactus></Contactus><Footer></Footer></Route>
<Route exact path='/review'> <Review></Review></Route>
<Route exact path='/proceed' ><Proceed></Proceed></Route>
<Route exact path='/checkout'><Payment></Payment></Route>
<Route exact path='/register'><Register></Register></Route>
<Route exact path='/signup'><Navbar></Navbar> <Login></Login> <Footer></Footer></Route>
<Route exact path='/login'><Navbar></Navbar> <Signup></Signup> <Footer></Footer></Route>
<Route exact path='/phillosophy'><Phillosophy></Phillosophy></Route>
<Route exact path='/contactjuni'><Contactcodejuni></Contactcodejuni></Route>
<Route exact path='/school'><Schools></Schools></Route>
<Route exact path='/ourstory'><Ourstory></Ourstory></Route>
<Route exact path='/champ'>   <Codingchamps
coursename='Coding Champ'
coursedetail=' Scratch Programming &amp; App development'
level='Level'
levelnumber='1'
grade='Grade'
gradenumber='1-4'
courseoverview='	Students are introduced to programming through the captivating medium of story telling. Students will use their imagination to design a story with multiple scenes, multiple characters, dialogues, and animations. They will write code to bring their characters and story to life. Students will build logical foundations of programming, which will be useful to them regardless of which coding language they pursue in the future. They will code using MIT Scratch, a visual programming tool from MIT that makes it incredibly easy and fun for young students to learn to code.'

topicover1='Introduction to Block-based Coding'
topicover2='Algorithmic skills'
topicover3='Time based sequencing'
topicover4='Event-based triggers'
topicover5='Introduction to control blocks'
topicover6='introduction to creative animation'
topicover7='Block-based Programming'
topicover8='Event-based triggers'

whycourse='ENROL YOUR CHILD IN ONE OF THE TOP ANIMATION COURSES FOR KIDS'
whydetails='Ever wondered what goes inside creative houses like Pixar and Disney? Movies like Toy Story and Rata'

skill1='Animation'
skill2='MIT'
skill3='Graphics'
skill4='Story'
skill5='story'
skill6='sory'
skill7='loop'



projectimg1={anush}
projectdesc1='Draw &amp; Animate Sprites'
projectimg2={anush}
projectdesc2='Code a Dialogue between Characters'
projectimg3={anush}
projectdesc3='Multi-scene story with Music &amp; Interactions'
projectimg4={anush}

advantageimg1={anush}
advantagedes1='learn interactively'
advantageimg2={anush}
advantagedes2='Learn from anywhere.'
advantageimg3={anush}
advantagedes3='Learn from the pioneers.'



studentdesc1='	I absolutely loved the course. My favorite part was making a story about my family in Scratch and showing it to my family afterwards.'
studentname1='Raunak, Grade 3'
studentschool1='Aditya Birla World Academy'
studentlocation1='Mumbai'

studentdesc2='It sounded amazing when i read and heard about this course, but in reality it was way, way, way more amazing.'
studentname2='Aditya, Grade 3'
studentschool2='Mercedes-Benz international school'
studentlocation2='Mumbai'

studentdesc3='	It sounded amazing when i read and heard about this course, but in reality it was way, way, way more amazing.'
studentname3='	Pippa, Grade 4'
studentschool3='Cathedral &amp; John Connon School'
studentlocation3='Mumbai'

studentdesc4='	I loved this so much. There is lots of fun in this course and all this will help me to live my life.'
studentname4='Manas, Grade 3'
studentschool4='Campion School'
studentlocation4='Mumbai'

>
  
  
  
  
  
  
  
  
  
  </Codingchamps> <Footer></Footer> </Route>


  <Route exact path='/master'><Codingchamps
coursename='Scratch Programming'
coursedetail='Animation &amp; Storytelling with Code'
level='Level'
levelnumber='1'
grade='Grade'
gradenumber='1-4'
courseoverview='	Students are introduced to programming through the captivating medium of story telling. Students will use their imagination to design a story with multiple scenes, multiple characters, dialogues, and animations. They will write code to bring their characters and story to life. Students will build logical foundations of programming, which will be useful to them regardless of which coding language they pursue in the future. They will code using MIT Scratch, a visual programming tool from MIT that makes it incredibly easy and fun for young students to learn to code.'

topicover1='Introduction to Block-based Coding'
topicover2='Algorithmic skills'
topicover3='Time based sequencing'
topicover4='Event-based triggers'
topicover5='Introduction to control blocks'
topicover6='introduction to creative animation'
topicover7='Block-based Programming'
topicover8='Event-based triggers'

whycourse='ENROL YOUR CHILD IN ONE OF THE TOP ANIMATION COURSES FOR KIDS'
whydetails='Ever wondered what goes inside creative houses like Pixar and Disney? Movies like Toy Story and Rata'

skill1='Animation'
skill2='MIT'
skill3='Graphics'
skill4='Story'
skill5='story'
skill6='sory'
skill7='loop'



projectimg1={anush}
projectdesc1='Draw &amp; Animate Sprites'
projectimg2=''
projectdesc2='Code a Dialogue between Characters'
projectimg3=''
projectdesc3='Multi-scene story with Music &amp; Interactions'
projectimg4='Final Project'

advantageimg1={anush}
advantagedes1='learn interactively'
advantageimg2=''
advantagedes2='Learn from anywhere.'
advantageimg3=''
advantagedes3='Learn from the pioneers.'



studentdesc1='	I absolutely loved the course. My favorite part was making a story about my family in Scratch and showing it to my family afterwards.'
studentname1='Raunak, Grade 3'
studentschool1='Aditya Birla World Academy'
studentlocation1='Mumbai'

studentdesc2='It sounded amazing when i read and heard about this course, but in reality it was way, way, way more amazing.'
studentname2='Aditya, Grade 3'
studentschool2='Mercedes-Benz international school'
studentlocation2='Mumbai'

studentdesc3='	It sounded amazing when i read and heard about this course, but in reality it was way, way, way more amazing.'
studentname3='	Pippa, Grade 4'
studentschool3='Cathedral &amp; John Connon School'
studentlocation3='Mumbai'

studentdesc4='	I loved this so much. There is lots of fun in this course and all this will help me to live my life.'
studentname4='Manas, Grade 3'
studentschool4='Campion School'
studentlocation4='Mumbai'

>
  
  
  
  
  
  
  
  
  
  </Codingchamps></Route>



  <Route exact path='/pro'><Codingchamps
coursename='Scratch Programming'
coursedetail='Animation &amp; Storytelling with Code'
level='Level'
levelnumber='1'
grade='Grade'
gradenumber='1-4'
courseoverview='	Students are introduced to programming through the captivating medium of story telling. Students will use their imagination to design a story with multiple scenes, multiple characters, dialogues, and animations. They will write code to bring their characters and story to life. Students will build logical foundations of programming, which will be useful to them regardless of which coding language they pursue in the future. They will code using MIT Scratch, a visual programming tool from MIT that makes it incredibly easy and fun for young students to learn to code.'

topicover1='Introduction to Block-based Coding'
topicover2='Algorithmic skills'
topicover3='Time based sequencing'
topicover4='Event-based triggers'
topicover5='Introduction to control blocks'
topicover6='introduction to creative animation'
topicover7='Block-based Programming'
topicover8='Event-based triggers'

whycourse='ENROL YOUR CHILD IN ONE OF THE TOP ANIMATION COURSES FOR KIDS'
whydetails='Ever wondered what goes inside creative houses like Pixar and Disney? Movies like Toy Story and Rata'

skill1='Animation'
skill2='MIT'
skill3='Graphics'
skill4='Story'
skill5='story'
skill6='sory'
skill7='loop'



projectimg1='anush'
projectdesc1='Draw &amp; Animate Sprites'
projectimg2='leelu'
projectdesc2='Code a Dialogue between Characters'
projectimg3=''
projectdesc3='Multi-scene story with Music &amp; Interactions'
projectimg4='Final Project'

advantageimg1=''
advantagedes1='learn interactively'
advantageimg2=''
advantagedes2='Learn from anywhere.'
advantageimg3=''
advantagedes3='Learn from the pioneers.'



studentdesc1='	I absolutely loved the course. My favorite part was making a story about my family in Scratch and showing it to my family afterwards.'
studentname1='Raunak, Grade 3'
studentschool1='Aditya Birla World Academy'
studentlocation1='Mumbai'

studentdesc2='It sounded amazing when i read and heard about this course, but in reality it was way, way, way more amazing.'
studentname2='Aditya, Grade 3'
studentschool2='Mercedes-Benz international school'
studentlocation2='Mumbai'

studentdesc3='	It sounded amazing when i read and heard about this course, but in reality it was way, way, way more amazing.'
studentname3='	Pippa, Grade 4'
studentschool3='Cathedral &amp; John Connon School'
studentlocation3='Mumbai'

studentdesc4='	I loved this so much. There is lots of fun in this course and all this will help me to live my life.'
studentname4='Manas, Grade 3'
studentschool4='Campion School'
studentlocation4='Mumbai'

>
  
  
  
  
  
  
  
  
  
  </Codingchamps></Route>


      </Switch>
 


    </div>
    </BrowserRouter>
  );
}

export default App;
