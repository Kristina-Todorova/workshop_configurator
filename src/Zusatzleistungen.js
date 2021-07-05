import React, {useState,useContext} from "react";
import Kategorien from "./Kategorien";
import "./Zusatzleistungen.css"
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import GlobalState from "./global/GlobalState";
import GlobalCatering from "./global/GlobalCatering";
import GlobalTechnik from "./global/GlobalTechnik";
import GlobalInformative from "./global/GlobalInformative";
import GlobalAuftrag from "./global/GlobalAuftrag";
import GlobalErgebnis from "./global/GlobalErgebnis";
import GlobalFort from "./global/GlobalFort";


function Zusatzleistungen() {

    let [catering,setCatering] = useContext(GlobalCatering)
    let [technik,setTechnik] = useContext(GlobalTechnik)
    let [movie,setMovie] = useContext(GlobalState)

    let [informative,setInformative] = useContext(GlobalInformative)
    let [auftrag,setAuftrag] = useContext(GlobalAuftrag)
    let [ergebnis,setErgebnis] = useContext(GlobalErgebnis)
    let [fort,setFort] = useContext(GlobalFort)

    console.log(informative)

    function chooseCatering() {
        setCatering(prevState => !prevState)
    }

    function chooseTechnik() {
        setTechnik(prevState => !prevState)
    }

    function chooseMovie() {
        setMovie(GlobalState => !GlobalState)
    }

  return (
        <div>
            <Kategorien
            informative={informative}
            auftrag={auftrag}
            ergebnis={ergebnis}
            fort={fort}
            movie={movie}
            catering={catering}
            technik={technik}/>

             <Link to="/Zusammenfassung" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
             </Link>

            <div className="sqr1" onClick={chooseCatering}>
                 <p className="title">Catering</p>
                <p className="textsquare">Für das leibliche Wohl der Teilnehmer empfehlen wir das Hinzubuchen eines Catering-Services.</p>
            </div>

            <div className="sqr2" onClick={chooseTechnik}>
                 <p className="title">Bereitstellung von Technik</p>
                <p className="textsquare">Sollte Ihr Unternehmen nicht über notwendige Ausstattung verfügen, können Sie unsere Ausstattung buchen.</p>
            </div>

            <div className="sqr3" onClick={chooseMovie}>
                 <p className="title">After-Movie</p>
                <p className="textsquare">Nach dem Workshop erhalten Sie einen kurzen Zusammenschnitt mit den wichtigsten Erkenntnissen.</p>
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
                    marginTop:"-375px"
                    }}>
                    <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                   <p>Nachfolgend können Sie Zusatzleistungen für Ihren Workshop auswählen.</p>
            </div>
        </div>
  );
}

export default Zusatzleistungen;