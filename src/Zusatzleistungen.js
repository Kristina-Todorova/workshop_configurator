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
import GlobalDesignThinking from "./global/GlobalDesignThinking";
import GlobalDesignSprint from "./global/GlobalDesignSprint";
import GlobalLeanCanvas from "./global/GlobalFutureRetail";
import GlobalBusinessModel from "./global/GlobalFutureMobility";
import GlobalTechTalk from "./global/GlobalSustainability";
import GlobalDeepDive from "./global/GlobalDeepDive";
import GlobalGruppenarbeit from "./global/GlobalGruppenarbeit"
import GlobalBrainstorming from "./global/GlobalBrainstorming";
import GlobalDigitalShift from "./global/GlobalDigitalShift";
import GlobalFutureSales from "./global/GlobalFutureSales";
import GlobalFutureRetail from "./global/GlobalFutureRetail";
import GlobalFutureMobility from "./global/GlobalFutureMobility";
import GlobalSustainability from "./global/GlobalSustainability";
import GlobalAfterSales from "./global/GlobalAfterSales";


function Zusatzleistungen() {

    let [catering,setCatering] = useContext(GlobalCatering)
    let [technik,setTechnik] = useContext(GlobalTechnik)
    let [movie,setMovie] = useContext(GlobalState)

    const cateringcolor = catering===true ? "#00ADEF" : "lightgray"
    const technikcolor = technik===true ? "#00ADEF" : "lightgray"
    const moviecolor = movie===true ? "#00ADEF" : "lightgray"


    let [informative,setInformative] = useContext(GlobalInformative)
    let [auftrag,setAuftrag] = useContext(GlobalAuftrag)
    let [ergebnis,setErgebnis] = useContext(GlobalErgebnis)
    let [fort,setFort] = useContext(GlobalFort)

    let [deepdive, setDeepdive] = useContext(GlobalDeepDive)
    let [gruppenarbeit, setGruppenarbeit] = useContext(GlobalGruppenarbeit)
    let [brainstorming, setBrainstorming] = useContext(GlobalBrainstorming)

    let [digitalShift,setDigitalShift] = useContext(GlobalDigitalShift)
    let [futureSales,setFutureSales] = useContext(GlobalFutureSales)
    let [futureRetail,setFutureRetail] = useContext(GlobalFutureRetail)
    let [futureMobility,setFutureMobility] = useContext(GlobalFutureMobility)
    let [sustainability,setSustainability] = useContext(GlobalSustainability)
    let [afterSales,setAfterSales] = useContext(GlobalAfterSales)

    let [designThinking,setDesignThinking] = useContext(GlobalDesignThinking)
    let [designSprint,setDesignSprint] = useContext(GlobalDesignSprint)
    let [leanCanvas,setLeanCanvas] = useContext(GlobalLeanCanvas)
    let [businessModel,setBusinessModel] = useContext(GlobalBusinessModel)
    let [techTalk,setTechTalk] = useContext(GlobalTechTalk)


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
            technik={technik}
            deepdive={deepdive}
            gruppenarbeit={gruppenarbeit}
            brainstorming={brainstorming}
            digitalShift={digitalShift}
            futureSales={futureSales}
            futureRetail={futureRetail}
            futureMobility={futureMobility}
            sustainability={sustainability}
            afterSales={afterSales}
            designThinking={designThinking}
            designSprint={designSprint}
            leanCanvas={leanCanvas}
            businessModel={businessModel}
            techTalk={techTalk}
            />

             <Link to="/Zusammenfassung" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
             </Link>

            <div className="sqr1" onClick={chooseCatering} style={{backgroundColor:cateringcolor}}>
                 <p className="title">Catering</p>
                <p className="textsquare">Für das leibliche Wohl der Teilnehmer empfehlen wir das Hinzubuchen eines Catering-Services.</p>
            </div>

            <div className="sqr2" onClick={chooseTechnik} style={{backgroundColor:technikcolor}}>
                 <p className="title">Bereitstellung von Technik</p>
                <p className="textsquare">Sollte Ihr Unternehmen nicht über notwendige Ausstattung verfügen, können Sie unsere Ausstattung buchen.</p>
            </div>

            <div className="sqr3" onClick={chooseMovie} style={{backgroundColor:moviecolor}}>
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
                    marginTop:"-392px"
                    }}>
                    <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                   <p>Nachfolgend können Sie Zusatzleistungen für Ihren Workshop auswählen.</p>
            </div>
        </div>
  );
}

export default Zusatzleistungen;