import React from 'react'
import './Header.css'
import HeaderLogo from './Photos/homepage-logo.3372a385.svg'

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src={HeaderLogo} alt="Header Logo" />
        <ul className='header-ul'>
            <li><a href="#">Niyə mpay</a></li>
            <li><a href="#">Qeydiyyatsız ödəniş</a></li>
            <li><a href="#">F.A.Q</a></li>
            <li><a href="#">Əlaqə</a></li>
        </ul>
      </div>
      <div className="header-right">
        <div className="header-languge">
            <span><a href="#">AZ</a><i class="fa-solid fa-angle-down"></i></span>
            <ul>
                <li><a href="#">AZ</a></li>
                <li><a href="#">EN</a></li>
                <li><a href="#">RU</a></li>
            </ul>
        </div>
        <div className="header-login">
            <button>Daxil ol</button>
            <button>Qeydiyyat</button>
        </div>
      </div>
    </div>
  )
}

export default Header
