import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className="contact-company-name">
        <span>mpay © MPAY QSC</span>
      </div>
      <div className="contact-info">
        <div className="contact-sosial-media">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="contact-cont">
            <a href="#">+994 12 404 48 88</a>
            <a href="#">contact@mpay.az</a>
            <span>Albert Aqarunov küç. 7B, AZ1075 Bakı, Azərbaycan</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
