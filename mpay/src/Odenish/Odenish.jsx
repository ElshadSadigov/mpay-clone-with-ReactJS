import React from 'react'
import "./Odenish.css"
import AppGallery from './Photos/app_gallery.f2c9dacd.png'
import AppStore from './Photos/app_store.b82e2cc4.png'
import GooglePlay from './Photos/google_play.19e0efd1.png'
import Main from './Photos/main.b90efa55.png'

function Odenish() {
  return (
    <div className='odenish'>
      <div className="odenish-left">
        <h2>
        Ödənişlərinizi <span>mpay</span> ilə idarə edin!
        </h2>
        <p>Sürətli, təhlükəsiz və sərfəli ödənişlər üçün mpay istifadə edin.</p>
        <div className="odenish-download">
            <a href="#"><img src={GooglePlay} alt="" /></a>
            <a href="#"><img src={AppStore} alt="" /></a>
            <a href="#"><img src={AppGallery} alt="" /></a>
        </div>
      </div>
      <div className="odenish-right">
        <img src={Main} alt="" />
      </div>
    </div>
  )
}











export default Odenish;