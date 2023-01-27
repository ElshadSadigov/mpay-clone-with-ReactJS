import React from 'react'
import './FerqliOdenis.css'
import OdenisImg from './Photos/terminal.png'


function FerqliOdenis() {
  return (
    <div className='ferqli-odenis'>
      <div className="odenis-img">
        <img src={OdenisImg} alt="" />
      </div>
      <div className="odenis-text">
        <h2>Fərqli ödəniş vasitələri</h2>
        <p>Hesabınızı nağd şəkildə 3000-dən artıq mpay köşkü və yaxud bank kartı vasitəsilə ilə artıra bilərsiniz</p>
      </div>
    </div>
  )
}

export default FerqliOdenis
