import React from 'react'
import './SecilmisOdenis.css'
import WebImg from './Photos/web.f6.png'


function SecilmisOdenis() {
  return (
    <div className='secilmis-odenis'>
      <div className="secilmis-text">
        <h2>Seçilmiş ödənişlər</h2>
        <p>Tez-tez etdiyiniz ödənişlərinizi Seçilmişlərə əlavə edərək daha sürətli ödəyin</p>
      </div>
      <div className="secilmis-img">
        <img src={WebImg} alt="" />
      </div>
    </div>
  )
}

export default SecilmisOdenis
