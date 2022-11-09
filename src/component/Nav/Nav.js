import React from 'react'
import {Link} from "react-router-dom";


import './Nav.css';

function Nav(){
    return(
   <>
   <nav className="nav">
      <ul className="items">
       <li><Link to="/">Home</Link></li> 
       <li><Link to="/about">About</Link></li> 
       <li><Link to="/contact">Contact</Link></li> 
       <li><Link to="/more">More</Link></li> 
        </ul>
      </nav>  
    </>
    );
  }
  export default Nav ;

  