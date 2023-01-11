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
        <a href="#intro"><img src={mylogo} alt="Mubeen logo"/></a>
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
     
     <ul className={`menu ${toggle ? 'active' : 'nonactive'}`
     }>
          <li 
            onClick={()=>settoggle(false)}
          >
            <a href="#intro"
            >Home</a>
          </li>
          <li
           onClick={()=>settoggle(false)}
          >
            <a href="#portfolio">Portfolio</a>
          </li>
          <li
           onClick={()=>settoggle(false)}
          >
            <a href="#works">Works</a>
          </li>
          <li
           onClick={()=>settoggle(false)}
          >
            <a href="#testimonial">Testimonials</a>
          </li>
          <li
           onClick={()=>settoggle(false)}
          >
            <a href="#contact">Contact</a>
          </li>
     </ul>
    </div>
  )
}