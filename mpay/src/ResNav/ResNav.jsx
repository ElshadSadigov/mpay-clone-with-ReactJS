import React, { useRef } from "react";
import "./ResNav.css";

function ResNav() {

  const navRef = useRef();
  const resRef = useRef();
  
  const ShowNavbar = () =>{
    navRef.current.classList.toggle('active')
    resRef.current.classList.toggle('res-active')
  }

  return (
    <div className="res-navbar" ref={resRef}>
      <div className="fixed-btn" onClick={ShowNavbar} >
        <div className="btn-1"></div>
        <div className="btn-2"></div>
        <div className="btn-3"></div>
      </div>
      <div className="res-texts" ref={navRef}>
        <li><a href="#">NİYƏ MPAY</a></li>
        <li><a href="#">QEYDİYYATSIZ ÖDƏNİŞ</a></li>
        <li><a href="#">F.A.Q</a></li>
        <li><a href="#">ƏLAQƏ</a></li>
      </div>
      
    </div>
  );
}

export default ResNav;
