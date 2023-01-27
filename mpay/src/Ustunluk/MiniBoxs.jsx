import React from 'react'
import './Ustunluk.css'


function MiniBoxs(props) {
  return (
    <div className='mini-boxs'>
      <h4>{props.head}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default MiniBoxs
