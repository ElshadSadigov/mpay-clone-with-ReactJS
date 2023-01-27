import React from 'react'
import './MobilKocurme.css'
import MobileImg from './Photos/transfer.be70798e.png'

function MobilKocurme() {
  return (
    <div className='mobile-kocurme'>
      <div className="mobile-img">
        <img src={MobileImg} alt="" />
      </div>
      <div className="mobile-text">
        <h2>Pul köçürmələri asan olmalıdır</h2>
        <p>Alan istifadəçini kontakt siyahısından seçin, məbləği daxil edib göndərin. Bu qədər sadə!</p>
      </div>
    </div>
  )
}

export default MobilKocurme
