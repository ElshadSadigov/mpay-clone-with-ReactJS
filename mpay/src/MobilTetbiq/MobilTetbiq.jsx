import React from 'react'
import './MobilTetbiq.css'
import GooglePay from './Photos/GooglePlay.png'
import AppStore from './Photos/AppStore.png'
import AppGallery from './Photos/AppGallery.png'
import MobileTetbiq from './Photos/MobilTetbiq-img.png'


function MobilTetbiq() {
  return (
    <div className='mobil-tetbiq'>
      <div className="mobil-text">
        <h2>Mobil tətbiqimizi yükləyin</h2>
        <p>Daha rahat və hər zaman əlçatan ödənişlər üçün mobil tətbiqimizi kəşf edin</p>
        <div className="mobil-install">
            <a href="#"><img src={GooglePay} alt="" /></a>
            <a href="#"><img src={AppStore} alt="" /></a>
            <a href="#"><img src={AppGallery} alt="" /></a>
        </div>
      </div>
      <div className="mobil-img">
        <img src={MobileTetbiq} alt="" />
      </div>
    </div>
  )
}

export default MobilTetbiq
