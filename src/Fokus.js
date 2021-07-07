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

import GlobalDesignThinking from "./global/GlobalDesignThinking";
import GlobalDesignSprint from "./global/GlobalDesignSprint";
import GlobalLeanCanvas from "./global/GlobalLeanCanvas";
import GlobalBusinessModel from "./global/GlobalBusinessModel";
import GlobalTechTalk from "./global/GlobalTechTalk";
import GlobalDeutsch from "./global/GlobalDeutsch";
import GlobalEnglisch from "./global/GlobalEnglisch";
import GlobalAndereSprache from "./global/GlobalAndereSprache";
import GlobalPraesenz from "./global/GlobalPraesenz";
import GlobalOnline from "./global/GlobalOnline";
import GlobalAndereOrt from "./global/GlobalAndereOrt";
import GlobalTeilnehmer from "./global/GlobalTeilnehmer";
import GlobalVon from "./global/GlobalVon";
import GlobalBis from "./global/GlobalBis";
import GlobalPaketS from "./global/GlobalPaketS";
import GlobalPaketM from "./global/GlobalPaketM";
import GlobalPaketL from "./global/GlobalPaketL";
import GlobalPrice from "./global/GlobalPrice";
import GlobalTime from "./global/GlobalTime";


function Fokus() {
    let [digitalShift,setDigitalShift] = useContext(GlobalDigitalShift)
    let [futureSales,setFutureSales] = useContext(GlobalFutureSales)
    let [futureRetail,setFutureRetail] = useContext(GlobalFutureRetail)
    let [futureMobility,setFutureMobility] = useContext(GlobalFutureMobility)
    let [sustainability,setSustainability] = useContext(GlobalSustainability)
    let [afterSales,setAfterSales] = useContext(GlobalAfterSales)

    let [designthinking,setDesignThinking] = useContext(GlobalDesignThinking)
    let [designsprint,setDesignSprint] = useContext(GlobalDesignSprint)
    let [leancanvas,setLeanCanvas] = useContext(GlobalLeanCanvas)
    let [businessmodel,setBusinessModel] = useContext(GlobalBusinessModel)
    let [techtalk,setTechTalk] = useContext(GlobalTechTalk)

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

    let [deutsch,setDeutsch] = useContext(GlobalDeutsch);
    let [englisch,setEnglisch] = useContext(GlobalEnglisch);
    let [anderesprache,setAndereSprache] = useContext(GlobalAndereSprache);

    let [praesenz,setPraesenz] = useContext(GlobalPraesenz);
    let [online,setOnline] = useContext(GlobalOnline);
    let [andereort,setAndereOrt] = useContext(GlobalAndereOrt);

    let [teilnehmer,setTeilnehmer] = useContext(GlobalTeilnehmer);
    let [von,setVon] = useContext(GlobalVon);
    let [bis,setBis] = useContext(GlobalBis);

    let [paketS,setPaketS] = useContext(GlobalPaketS)
    let [paketM,setPaketM] = useContext(GlobalPaketM)
    let [paketL,setPaketL] = useContext(GlobalPaketL)
    let [pricecounter, setPriceCounter] = useContext(GlobalPrice)
    let [timecounter, setTimeCounter] = useContext(GlobalTime)

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

            designthinking={designthinking}
            designsprint={designsprint}
            leancanvas={leancanvas}
            businessmodel={businessmodel}
            techtalk={techtalk}

            deutsch={deutsch}
            englisch={englisch}
            anderesprache={anderesprache}
            praesenz={praesenz}
            online={online}
            andereort={andereort}
            teilnehmer={teilnehmer}
            von={von}
            bis={bis}

            paketS={paketS}
            paketM={paketM}
            paketL={paketL}
            pricecounter={pricecounter}
            timecounter={timecounter}


            />

            <Link to="/Methodik" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>
            <div className="square01" onClick={chooseDigitalShift} style={{backgroundColor:shiftcolor}}>
                <p className="title">Digital Shift</p>
                <p className="textsquare"> Gemeinsam mit Ihnen gehen wir die Digitalisierung an und probieren aus, was möglich ist. Die neuen Technologien bieten viele Chancen.
</p>
            </div>

            <div className="square02" onClick={chooseFutureSales} style={{backgroundColor:salescolor}}>
                <p className="title">Future Sales</p>
                <p className="textsquare"> Ob Online Sales, neue Vertriebsnetzstrategien oder Serviceformate – wir adaptieren das Übermorgen und entwickeln gemeinsam den Weg dorthin.</p>
            </div>

            <div className="square03" onClick={chooseFutureRetail} style={{backgroundColor:retailcolor}}>
                <p className="title">Future Retail</p>
                <p className="textsquare">Die Herausforderung im Future Retail besteht darin, auf alle Kunden-Bedürfnisse eine gute Antwort zu haben – ohne heute zu wissen, was morgen kommt.</p>
            </div>

            <div className="square04" onClick={chooseFutureMobility} style={{backgroundColor:mobilitycolor}}>
                <p className="title">Future Mobility</p>
                <p className="textsquare"> Die Digitalisierung ermöglicht ein vernetztes, durchgehend zugängliches Mobilitätsangebot entlang der Kundenbedürfnisse zu etablieren. </p>
            </div>

            <div className="square05" onClick={chooseSustainability} style={{backgroundColor:sustainabilitycolor}}>
                <p className="title">Sustainability</p>
                <p className="textsquare">Mit einem verantwortungsvollen Blick fürs Ganze gehen wir gemeinsam die Chancen neuer Entwicklungen an und überführen diese frühzeitig in nachhaltige Geschäftsmodelle.</p>
            </div>

            <div className="square06" onClick={chooseAfterSales} style={{backgroundColor:aftersalescolor}}>
                <p className="title">After Sales</p>
                <p className="textsquare"> Wir stellen die Weichen für eine dauerhafte Bindung. Ob bei der Transformation der Werkstatt, bei innovativen Services oder digitalisierten Prozessen zur Kundenbindung.</p>
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
                    marginTop:"-521px"
                    }} >
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Bitte wählen Sie den gewünschten Themenbereich für Ihren Workshop aus. </p>
        </div>
        </div>
  );
}

export default Fokus;