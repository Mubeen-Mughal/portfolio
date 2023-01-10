import '../header/header.scss';
import mylogo from '../../img/Mubeen.png'
import {RxHamburgerMenu} from 'react-icons/rx';
import{RxCross1} from 'react-icons/rx';
import { useState } from 'react';

export default function TopBar() {
  const[toggle,settoggle]=useState(false);
  return (
    <div className='topbar'>
     <div className='wrapper'>
       <div className='left'>
        <a href="#intro"><img src={mylogo} alt="Mubeen logo" /></a>
       </div>
       <div className='right'>
        {
        toggle?
        <RxCross1 onClick={()=>settoggle(!toggle)}></RxCross1>       
         :
         <RxHamburgerMenu onClick={()=>settoggle(!toggle)}></RxHamburgerMenu>
        }
        </div>
     </div>
     {/* Responsive Menu */}
     
     <ul className={`menu ${toggle ? 'right-[0px]' : 'right:[0-300px]'}`
     }>
          <li>
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
     </ul>
    </div>
  )
}