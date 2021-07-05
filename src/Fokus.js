import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import "./Fokus.css"
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext, useEffect} from "react";
import GlobalDigitalShift from "./global/GlobalDigitalShift";
import GlobalFutureSales from "./global/GlobalFutureSales";
import GlobalFutureRetail from "./global/GlobalFutureRetail";
import GlobalFutureMobility from "./global/GlobalFutureMobility";
import GlobalSustainability from "./global/GlobalSustainability";
import GlobalAfterSales from "./global/GlobalAfterSales";
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


function Fokus() {
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

    const shiftcolor = digitalShift===true ? "#00ADEF" : "lightgray"
    const salescolor = futureSales===true ? "#00ADEF" : "lightgray"
    const retailcolor = futureRetail===true ? "#00ADEF" : "lightgray"
    const mobilitycolor = futureMobility===true ? "#00ADEF" : "lightgray"
    const sustainabilitycolor = sustainability===true ? "#00ADEF" : "lightgray"
    const aftersalescolor = afterSales===true ? "#00ADEF" : "lightgray"

    function chooseDigitalShift() {
        setDigitalShift(prevState => !prevState)
        setFutureSales(false)
        setFutureRetail(false)
        setFutureMobility(false)
        setSustainability(false)
        setAfterSales(false)
    }

    function chooseFutureSales() {
        setFutureSales(prevState => !prevState)
        setDigitalShift(false)
        setFutureRetail(false)
        setFutureMobility(false)
        setSustainability(false)
        setAfterSales(false)
    }

      function chooseFutureRetail() {
        setFutureRetail(prevState => !prevState)
          setFutureSales(false)
        setDigitalShift(false)
        setFutureMobility(false)
        setSustainability(false)
        setAfterSales(false)
    }

      function chooseFutureMobility() {
        setFutureMobility(prevState => !prevState)
          setFutureSales(false)
        setFutureRetail(false)
        setDigitalShift(false)
        setSustainability(false)
        setAfterSales(false)
    }

      function chooseSustainability() {
        setSustainability(prevState => !prevState)
          setFutureSales(false)
        setFutureRetail(false)
        setFutureMobility(false)
        setDigitalShift(false)
        setAfterSales(false)
    }

      function chooseAfterSales() {
        setAfterSales(prevState => !prevState)
          setFutureSales(false)
        setFutureRetail(false)
        setFutureMobility(false)
        setSustainability(false)
        setDigitalShift(false)
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
            designthinking={designThinking}
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

            <Link to="/Methodik" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>
            <div className="square01" onClick={chooseDigitalShift} style={{backgroundColor:shiftcolor}}>
                <p className="title">Digital Shift</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square02" onClick={chooseFutureSales} style={{backgroundColor:salescolor}}>
                <p className="title">Future Sales</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square03" onClick={chooseFutureRetail} style={{backgroundColor:retailcolor}}>
                <p className="title">Future Retail</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square04" onClick={chooseFutureMobility} style={{backgroundColor:mobilitycolor}}>
                <p className="title">Future Mobility</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square05" onClick={chooseSustainability} style={{backgroundColor:sustainabilitycolor}}>
                <p className="title">Sustainability</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square06" onClick={chooseAfterSales} style={{backgroundColor:aftersalescolor}}>
                <p className="title">After Sales</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
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
                    marginTop:"-501px"
                    }} >
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Bitte wählen Sie den gewünschten Themenbereich für Ihren Workshop aus. </p>
        </div>
        </div>
  );
}

export default Fokus;