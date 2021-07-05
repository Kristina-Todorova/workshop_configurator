import './Grundbausteine.css';
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext, useEffect} from "react";
import GlobalKeynote from "./global/GlobalKeynote";
import GlobalEinfuehrung from "./global/GlobalEinfuehrung";
import GlobalErarbeitung from "./global/GlobalErarbeitung";
import GlobalVortragZurUmsetzung from "./global/GlobalVortragZurUmsetzung";

function Grundbausteine() {
    let [keynote,setKeynote] = useContext(GlobalKeynote)
    let [einfuehrung,setEinfuehrung] = useContext(GlobalEinfuehrung)
    let [erarbeitung,setErarbeitung] = useContext(GlobalErarbeitung)
    let [vortragZurUmsetzung,setVortragZurUmsetzung] = useContext(GlobalVortragZurUmsetzung)

    function chooseKeynote() {
        setKeynote(prevState => !prevState)
    }

    function chooseEinfuehrung() {
        setEinfuehrung(prevState => !prevState)
    }

    function chooseErarbeitung() {
        setErarbeitung(GlobalState => !GlobalState)
    }
    function chooseVortragZurUmsetzung() {
        setVortragZurUmsetzung(GlobalState => !GlobalState)
    }

  return (
        <div>
            <Kategorien

            keynote={keynote}
            einfuehrung={einfuehrung}
            erarbeitung={erarbeitung}
            vortragZurUmsetzung={vortragZurUmsetzung}/>

             <Link to="/Konfiguration" style={{ textDecoration: 'none', color:'black' }}>
             <Weiter/>
             </Link>
             <div className="squaree0001" onClick={chooseKeynote} >
                 <p className="title">Keynote</p>
             </div>

             <div className="squaree0002" onClick={chooseEinfuehrung} >
                <p className="title">Einführung</p>
             </div>

             <div className="squaree0003" onClick={chooseErarbeitung} >
                 <p className="title">Erarbeitung</p>
             </div>

             <div className="squaree0004" onClick={chooseVortragZurUmsetzung} >
                 <p className="title">Vortrag zur Umsetzung</p>
             </div>

            <div className="infolabel"
                 style={{
                    fontFamily: "Arial",
                    fontStyle:"normal",
                    fontWeight:"normal",
                    fontSize:"14px",
                    lineHeight:"16px",
                    display:"flex",
                    alignItems:"center",
                    color:"#000000",
                    width: "820px",
                    height: "70px",
                    left: "345px",
                    top: "239px",
                    background: "rgba(0, 173, 239, 0.25)",
                    marginLeft: "300px",
                    marginTop:"-358px"
                    }} >
                    <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                    <p>Entsprechend Ihrer Auswahl wurden Ihnen folgende Grundbausteine zusammengestellt. Im nächsten Schritt können Sie Ihren Workshop personalisieren.</p>
            </div>
        </div>
  );
}

export default Grundbausteine;