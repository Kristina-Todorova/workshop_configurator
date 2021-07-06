import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import "./Methodik.css"
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext, useEffect} from "react";
import GlobalDesignThinking from "./global/GlobalDesignThinking";
import GlobalDesignSprint from "./global/GlobalDesignSprint";
import GlobalLeanCanvas from "./global/GlobalFutureRetail";
import GlobalBusinessModel from "./global/GlobalFutureMobility";
import GlobalTechTalk from "./global/GlobalSustainability";
import GlobalState from "./global/GlobalState";
import GlobalCatering from "./global/GlobalCatering"
import GlobalTechnik from "./global/GlobalTechnik";
import GlobalInformative from "./global/GlobalInformative";
import GlobalAuftrag from "./global/GlobalAuftrag";
import GlobalErgebnis from "./global/GlobalErgebnis";
import GlobalFort from "./global/GlobalFort";
import GlobalDeepDive from "./global/GlobalDeepDive";
import GlobalGruppenarbeit from "./global/GlobalGruppenarbeit"
import GlobalBrainstorming from "./global/GlobalBrainstorming";
import GlobalDigitalShift from "./global/GlobalDigitalShift";
import GlobalFutureSales from "./global/GlobalFutureSales";
import GlobalFutureRetail from "./global/GlobalFutureRetail";
import GlobalFutureMobility from "./global/GlobalFutureMobility";
import GlobalSustainability from "./global/GlobalSustainability";
import GlobalAfterSales from "./global/GlobalAfterSales";



function Methodik() {
    let [designThinking,setDesignThinking] = useContext(GlobalDesignThinking)
    let [designSprint,setDesignSprint] = useContext(GlobalDesignSprint)
    let [leanCanvas,setLeanCanvas] = useContext(GlobalLeanCanvas)
    let [businessModel,setBusinessModel] = useContext(GlobalBusinessModel)
    let [techTalk,setTechTalk] = useContext(GlobalTechTalk)

    let [informative,setInformative] = useContext(GlobalInformative)
    let [auftrag,setAuftrag] = useContext(GlobalAuftrag)
    let [ergebnis,setErgebnis] = useContext(GlobalErgebnis)
    let [fort,setFort] = useContext(GlobalFort)

    let [deepdive, setDeepdive] = useContext(GlobalDeepDive)
    let [gruppenarbeit, setGruppenarbeit] = useContext(GlobalGruppenarbeit)
    let [brainstorming, setBrainstorming] = useContext(GlobalBrainstorming)

    let [movie,setMovie] = useContext(GlobalState)
    let [catering,setCatering] = useContext(GlobalCatering)
    let [technik,setTechnik] = useContext(GlobalTechnik)

    let [digitalShift,setDigitalShift] = useContext(GlobalDigitalShift)
    let [futureSales,setFutureSales] = useContext(GlobalFutureSales)
    let [futureRetail,setFutureRetail] = useContext(GlobalFutureRetail)
    let [futureMobility,setFutureMobility] = useContext(GlobalFutureMobility)
    let [sustainability,setSustainability] = useContext(GlobalSustainability)
    let [afterSales,setAfterSales] = useContext(GlobalAfterSales)

    const designthinkingcolor = designThinking===true ? "#00ADEF" : "lightgray"
    const dscolor = designSprint===true ? "#00ADEF" : "lightgray"
    const lccolor = leanCanvas===true ? "#00ADEF" : "lightgray"
    const bmcolor = businessModel===true ? "#00ADEF" : "lightgray"
    const ttcolor = techTalk===true ? "#00ADEF" : "lightgray"

    function chooseDesignThinking() {
        setDesignThinking(prevState => !prevState)
        setDesignSprint(false)
        setLeanCanvas(false)
        setBusinessModel(false)
        setTechTalk(false)

    }

    function chooseDesignSprint() {
        setDesignSprint(prevState => !prevState)
        setDesignThinking(false)
        setLeanCanvas(false)
        setBusinessModel(false)
        setTechTalk(false)
    }

      function chooseLeanCanvas() {
        setLeanCanvas(prevState => !prevState)
        setDesignSprint(false)
        setDesignThinking(false)
        setBusinessModel(false)
        setTechTalk(false)
    }

      function chooseBusinessModel() {
        setBusinessModel(prevState => !prevState)
        setDesignSprint(false)
        setLeanCanvas(false)
        setDesignThinking(false)
        setTechTalk(false)
    }

      function chooseTechTalk() {
        setTechTalk(prevState => !prevState)
        setDesignSprint(false)
        setLeanCanvas(false)
        setBusinessModel(false)
        setDesignThinking(false)
    }


  return (
        <div>
            <Kategorien

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
            />

            <Link to="/Allgemein" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>
            <div className="square001" onClick={chooseDesignThinking} style={{backgroundColor:designthinkingcolor}}>
                <p className="title">Design Thinking</p>
                <p className="textsquare">Diese Technik hilft beim Lösen von Problemen und der Entwicklung neuer Ideen. Lernen Sie wie man Probleme nutzerentriert lösen kann.</p>
            </div>

            <div className="square002" onClick={chooseDesignSprint} style={{backgroundColor:dscolor}}>
                <p className="title">Design Sprint</p>
                <p className="textsquare">Führen Sie unter unserer fachkundigen Anleitung einen Design Sprint durch, der außergewöhnlihce Ergebnisse zu Tage fördern wird.</p>
            </div>

            <div className="square003" onClick={chooseLeanCanvas} style={{backgroundColor:lccolor}}>
                <p className="title">Lean Canvas</p>
                <p className="textsquare">Mithilfe des Lean Canvas kann Ihr Geschäftsmodell auf das Wesentliche reduziert werden, um neue Ideen zu generieren.</p>
            </div>

            <div className="square004" onClick={chooseBusinessModel} style={{backgroundColor:bmcolor}}>
                <p className="title">Business Model</p>
                <p className="textsquare">Wir leiten Ihr Team durch die Erstellung oder Optimierung Ihres Business Modells.</p>
            </div>

            <div className="square005" onClick={chooseTechTalk} style={{backgroundColor:ttcolor}}>
                <p className="title">Tech Talk</p>
                <p className="textsquare">Einer unserer Experten bringt Sie im ausgewählten Fachbereich, in kürzester Zeit, auf den neuesten Stand und inspiriert das ganze Team</p>
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
                    marginTop:"-294px"
                    }} >
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                <p>Bitte wählen Sie die gewünschte Methodik für Ihren Workshop aus. </p>

            </div>
        </div>
  );
}

export default Methodik;