import '../intro/Intro.scss';
import profileimg from '../../img/profile.png';
import Downarrow from '../../img/downarrow.png';
import { init } from 'ityped'
import { useEffect,useRef } from 'react';
export default function Intro() {

  const textRef=useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
     strings: ['Developer',"Designer","Content Creator"], 
    });
  },[]);
  return (
    <div className='intro' id="intro">
      <div className='left'>
        <div className='imgcontainer'>
        <img src={profileimg} alt="Profile Image"/>
        </div>
      </div>
      <div className='right'>
      <div className='wrapper'>
        <h2>Hi There, I'm</h2>
        <h1>Mubeen Arshad</h1>
        <h3>Freelance <span ref={textRef}></span></h3>
        <img src={Downarrow} alt="Down arrow" className='arrow-img'/>
      </div>
      </div>
    </div>
  ) 
}


 