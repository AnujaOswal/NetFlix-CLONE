import React,{useEffect} from 'react'
import "./Nav.css"
import { useState } from "react"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Nav=()=> {

  const [show, handleshow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
      
    return () => {
     // window.removeEventListener("scroll");
    };
  }, []);
    return (
      <nav className={`nav ${show && "nav__black"}`}>
           <div className="nav__contents">
            <img
						src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
						alt='Netflix-Logo'
						className='nav__logo'
					/>
            <img
            onClick={() => history.push("/profile")}
						src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
						alt='Netlix-User'
						className='nav__avatar'
					/>  
                       
        </div>
      </nav>  
    )
}

export default Nav;
