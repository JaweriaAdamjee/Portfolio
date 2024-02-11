import React from 'react'
import '../style-components/Main.css'

const Main = () => {
  return (
    <>

    <div id='main' className="main-container">
            <div className="main-content">
                <h1 data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Hey, i'm Jaweria</h1>
                <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="3000">Passionate Full Stack Web Developer specializing in the MERN stack and Next.js. Proven experience across diverse web applications and technologies. Actively seeking open positions for both employment and freelance work. Let's collaborate to create meaningful impact</p>
                <div class="main-btn" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
            <a href="images/CV.pdf" download="Arfeen's Cv" class="btn">Download Cv<i class="fa fa-download" aria-hidden="true"></i></a>
            <a href="https://pk.linkedin.com/" target="_blank" class="btn">let's Connect</a>
           </div>
        </div>
      </div>
    
    </>
  )
}

export default Main
