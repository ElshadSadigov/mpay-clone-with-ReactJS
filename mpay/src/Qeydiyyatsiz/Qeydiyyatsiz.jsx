import React from "react";
import "./Qeydiyyatsiz.css";
import MiniBoxs from "./MiniBoxs";
// Photos
import Bank from "./Photos/Banklar.png";
import Gov from "./Photos/gov.png";
import Huquq from "./Photos/Huquq.png";
import Internet from "./Photos/internetgroup.png";
import Kommunal from "./Photos/Kommunal.png";
import Mobil from "./Photos/Mobil.png";
import More from "./Photos/more.png";
import Neqliyyat from "./Photos/Neqliyyat.png";
import OnlaynMagaza from "./Photos/Onlayn.png";
import PulQabi from "./Photos/Pulqabilar.png";
import Sigorta from "./Photos/Sigorta.png";
import Tehsil from "./Photos/Tehsil.png";
import Telefon from "./Photos/Telefon.png";
import Travel from "./Photos/travel.png";
import Tv from "./Photos/TV.png";
import Xeyriyye from "./Photos/Xeyriyye.png";
import Reklam from './Photos/Reklam.png'

function Qeydiyyatsiz() {
  return (
    <div className="qeydiyyatsiz">
      <div className="qeydiyyatsiz-header">
        <p>Ödənişlər</p>
        <h3>Qeydiyyatsız ödənişlər</h3>
      </div>

      <div className="qeydiyyatsiz-body">
        <MiniBoxs img={Kommunal} head="Kommunal" />
        <MiniBoxs img={Mobil} head="Mobil" />
        <MiniBoxs img={Bank} head="Bank" />
        <MiniBoxs img={Gov} head="Dövlət və bələdiyyə" />
        <MiniBoxs img={Tv} head="TV" />
        <MiniBoxs img={Internet} head="İnternet" />
        <MiniBoxs img={Telefon} head="Telefon" />
        <MiniBoxs img={Sigorta} head="Siğorta və səhiyyə" />
        <MiniBoxs img={PulQabi} head="E-Pulqabı" />
        <MiniBoxs img={OnlaynMagaza} head="Əyləncə və oyun" />
        <MiniBoxs img={Xeyriyye} head="Xeyriyyə və yardım" />
        <MiniBoxs img={Tehsil} head="Tehsil" />
        <MiniBoxs img={Travel} head="Turizm və səyahət" />
        <MiniBoxs img={Huquq} head="Hüquq" />
        <MiniBoxs img={Neqliyyat} head="Neqliyyat və Karqo" />
        <MiniBoxs img={More} head="Diğərləri" />
      </div>

      <div className="qeydiyyatsiz-reklam">
        <a href="#">
        <img src={Reklam} alt="" />
        </a>
        
      </div>
    </div>
  );
}

export default Qeydiyyatsiz;
