import React from 'react'
import Nav from '../Components/Nav'
import { FiPhone } from "react-icons/fi";
import { CiLocationOn, CiMail } from "react-icons/ci";
function Contact() {
  return (
    <>
        <Nav/>
        
        {/* <p className='about-heading'>Contact us</p>
        <div className="about-head">
        <h1>Get in Touch</h1>
        <p>Have questions, want to provide feedback? We'd love to hear from you!.</p>
        </div>

        <div className="infos">
          <div className="contact">
            <div>
              <div className="text-icon">
                <FiPhone className='fa-ico' />
                <h5> Phone</h5>
                 </div>
              
              <p className='infop'>+234 123 456 7890</p>
            </div>
            <div>
              <div className="text-icon">
                <CiMail className='fa-ico' /> 
                <h5>Email</h5>
                </div>
              <p className='infop'>welcome@FoodHive.com</p>
            </div>
            <div>
              <div className="text-icon">
                <CiLocationOn className='fa-ico' />
                <h5>  Address</h5>
              </div>
              <p className='infop address'>123 Ikeja <br />
                Lagos, Nigeria</p>
            </div>

            <div className='business-text'>
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
              <p>Saturday: 10:00 AM - 11:00 PM</p>
              <p>Sunday: 10:00 AM - 9:00 PM</p>
            </div>
   
          </div>
          <div className="message">
            <h2>Send a message</h2>
            <label htmlFor="">Name</label><br />
            <input type="text" placeholder='Your Name' />
              <br />
            <label htmlFor="">Email</label><br />
            <input type="email" placeholder='Your email' />
              <br />
            <label htmlFor="">Subject</label><br />
            <input type="text" placeholder='Your subject' />

              <br />
            <label htmlFor="">Message</label><br />
            <input type="text" placeholder='Your message' className='field-message'  />
            <br />
            <button type="submit" className='btn-submit'>Send message</button>
            
          </div>
        </div> */}

        <div className="contact-section">
  <p className="contact-heading">Contact us</p>

  <div className="contact-head">
    <h1>Get in Touch</h1>
    <p>Have questions or want to provide feedback? We'd love to hear from you!</p>
  </div>

  <div className="infos">
    <div className="contact-info">
      <div className="contact-item">
        <div className="text-icon">
          <FiPhone className="fa-ico" />
          <h5>Phone</h5>
        </div>
        <p className="infop">+234 123 456 7890</p>
      </div>

      <div className="contact-item">
        <div className="text-icon">
          <CiMail className="fa-ico" />
          <h5>Email</h5>
        </div>
        <p className="infop">welcome@FoodHive.com</p>
      </div>

      <div className="contact-item">
        <div className="text-icon">
          <CiLocationOn className="fa-ico" />
          <h5>Address</h5>
        </div>
        <p className="infop">
          123 Ikeja<br />
          Lagos, Nigeria
        </p>
      </div>

      <div className="business-text">
        <h4>Business Hours</h4>
        <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
        <p>Saturday: 10:00 AM - 11:00 PM</p>
        <p>Sunday: 10:00 AM - 9:00 PM</p>
      </div>
    </div>

    <form className="message">
      <h2>Send a message</h2>

      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Your Name" required />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Your email" required />
      </div>

      <div className="form-group">
        <label>Subject</label>
        <input type="text" placeholder="Your subject" />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea
          placeholder="Your message"
          rows={5}
          className="field-message"
          required
        />
      </div>

      <button type="submit" className="btn-submit">
        Send Message
      </button>
    </form>
  </div>
</div>
    </>
  )
}

export default Contact

