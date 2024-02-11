import React from 'react'
import '../style-components/Navbar.css'
const Navbar = () => {
  return (
   <>
  
 <div className="nav-container"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
   <div className="nav-logo">
   <img  src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
    <h3>Jaweria Adamjee</h3>
   </div>
    <div className="nav-items">
        <ul>
            <li><a href="#main">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    <div className="nav-social-link">
    
        

            <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
          
    </div>
 </div>
   </>
  )
}

export default Navbar
