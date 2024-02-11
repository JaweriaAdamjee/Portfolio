import React, { useState } from 'react'
import '../style-components/Contact.css'
const Contact = () => {
    const [mode, setMode] = useState(true)
  return (
    <>
  <div id='contact'  className="contact-container">
    <div className="contact-content" data-aos="zoom-in-up">
      <h1>Contacts</h1>
   <div className="row-box">
   <div className="col col-left"  >
        <h4>let's Make Your Brand Brilliant</h4>
        <p>If you would like to work with us or just want to get in touch, we’d love to hear from you!</p>
        <p><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i> jaweriadamjee@gmail.com</a></p>
        <p><a href=""><i class="fa fa-phone" aria-hidden="true"></i>+92-3062823408</a></p>
        
           
        <div class="contact-icon">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-github" aria-hidden="true"></i>
           </div>
      </div>
      <div className="col col-right" >
        <input type="text" placeholder='Enter the name ' required />
        <input type="email" placeholder='Enter your email' required />
        <textarea name="Message" placeholder='Message' id="" cols="5" rows="3" required></textarea>
        <input type="submit" value='Send' />
      </div>
   </div>
    </div>
  </div>
    </>
  )
}

export default Contact
