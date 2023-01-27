import React from 'react'
import './Footer.css'
import FooterImg from '../Header/Photos/homepage-logo.3372a385.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-img">
        <img src={FooterImg} alt="" />
      </div>
      <div className="footer-info">
        <a href="#">İSTİFADƏ ŞƏRTLƏRİ VƏ QAYDALARI </a>
        <a href="#">MƏXFİLİK SİYASƏTİ</a>
        <a href="#">AZ <i class="fa-sharp fa-solid fa-angle-down"></i></a>
      </div>
    </div>
  )
}

export default Footer
