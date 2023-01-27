import React from 'react'
import './MiniBoxs.css'
import MiniBoxs from './MiniBoxs'

function Ustunluk() {
  return (
    <div className='ustunluk'>
      <div className="ustunluk-head">
        <span>Niyə mpay</span>
        <h3>Üstünlüklərimiz</h3>
      </div>
      <div className="ustunluk-body">
        <MiniBoxs 
        head = 'Komissiyasız ödənişlər'
        text = 'Bir çox xidmət üzrə komissiyasız ödənişlərdən yararlanın'/>
        
        <MiniBoxs 
        head = 'Yüzlərlə xidmət'
        text = '17 kateqoriyada 600-dən çox xidməti rahatlıqla ödəyin'/>
        <MiniBoxs 
        head = 'Sadə və rahat interfeys'
        text = 'Qarışıq və anlaşılmayan dizayna YOX deyirik. Sadə və rahat anlaşılan tətbiqimizlə xidmətinizdəyik.'/>
        <MiniBoxs 
        head = 'Xərclərə nəzarət'
        text = 'Ödəniş tarixçənizi bir səhifədə asanlıqla təqib edin'/>

      </div>
    </div>
  )
}

export default Ustunluk
