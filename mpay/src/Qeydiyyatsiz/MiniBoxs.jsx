import React from 'react'
import './MiniBoxs.css'


function MiniBoxs(props) {
  return (
    <div className='miniboxs'>
    
      <img src={props.img} alt="" />
      <span>{props.head}</span>
    </div>
  )
}

export default MiniBoxs
