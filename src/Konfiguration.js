import React, {useState, useContext} from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import GlobalDeepDive from "./global/GlobalDeepDive";
import GlobalGruppenarbeit from "./global/GlobalGruppenarbeit"
import GlobalBrainstorming from "./global/GlobalBrainstorming";
import GlobalState from "./global/GlobalState";
import GlobalCatering from "./global/GlobalCatering";
import GlobalTechnik from "./global/GlobalTechnik";
import GlobalInformative from "./global/GlobalInformative";
import GlobalAuftrag from "./global/GlobalAuftrag";
import GlobalErgebnis from "./global/GlobalErgebnis";
import GlobalFort from "./global/GlobalFort";
import "./Konfiguration.css";

function Konfiguration() {

    let [deepdive, setDeepdive] = useContext(GlobalDeepDive)
    let [gruppenarbeit, setGruppenarbeit] = useContext(GlobalGruppenarbeit)
    let [brainstorming, setBrainstorming] = useContext(GlobalBrainstorming)

    let [catering,setCatering] = useContext(GlobalCatering)
    let [technik,setTechnik] = useContext(GlobalTechnik)
    let [movie,setMovie] = useContext(GlobalState)


    let [informative,setInformative] = useContext(GlobalInformative)
    let [auftrag,setAuftrag] = useContext(GlobalAuftrag)
    let [ergebnis,setErgebnis] = useContext(GlobalErgebnis)
    let [fort,setFort] = useContext(GlobalFort)

    console.log(informative)

    function chooseGruppenarbeit() {
        setGruppenarbeit(prevState => !prevState)
    }

    function chooseDeepdive() {
        setDeepdive(prevState => !prevState)
    }

    function chooseBrainstorming() {
        setBrainstorming(prevState => !prevState)
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
            technik={technik}
            deepdive={deepdive}
            gruppenarbeit={gruppenarbeit}
            brainstorming={brainstorming}/>

             <Link to="/Zusatzleistungen" style={{ textDecoration: 'none', color:'black' }}>
             <Weiter/>
             </Link>

             <div className="square1" onClick={chooseGruppenarbeit} >
                <p className="title">Gruppenarbeit</p>
               <p className="textsquare">Ergänzen Sie Ihren Workshop um eine zusätzliche Gruppenaktivität passend zu Ihrem Thema. </p>
             </div>

             <div className="square2" onClick={chooseBrainstorming} >
                <p className="title">Brainstorming</p>
               <p className="textsquare">Ergänzen Sie den Workshop um ein Brainstorming in großer Runde </p>
             </div>

             <div className="square3" onClick={chooseDeepdive} >
                <p className="title">Deep Dive</p>
               <p className="textsquare">Ergänzen Sie Ihren Workshop um einen Deep Dive zu einem relevanten oder gewünschten Thema. </p>
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
                    marginTop:"-615px"
                    }} >
                    <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                    <p>Nachfolgend können Sie weitere Bausteine zur Personalisierung Ihres Workshops auswählen.</p>
             </div>
        </div>
  );
}

export default Konfiguration;