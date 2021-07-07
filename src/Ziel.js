import './Ziel.css';
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext} from "react";

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

import GlobalDigitalShift from "./global/GlobalDigitalShift";
import GlobalFutureSales from "./global/GlobalFutureSales";
import GlobalFutureRetail from "./global/GlobalFutureRetail";
import GlobalFutureMobility from "./global/GlobalFutureMobility";
import GlobalSustainability from "./global/GlobalSustainability";
import GlobalAfterSales from "./global/GlobalAfterSales";
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

function Ziel() {

    let [informative,setInformative] = useContext(GlobalInformative)
    let [auftrag,setAuftrag] = useContext(GlobalAuftrag)
    let [ergebnis,setErgebnis] = useContext(GlobalErgebnis)
    let [fort,setFort] = useContext(GlobalFort)

    const infocolor = informative===true ? "#00ADEF" : "lightgray"
    const ergebniscolor = auftrag===true ? "#00ADEF" : "lightgray"
    const auftragcolor = ergebnis===true ? "#00ADEF" : "lightgray"
    const fortcolor = fort===true ? "#00ADEF" : "lightgray"

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

    let [designthinking,setDesignThinking] = useContext(GlobalDesignThinking)
    let [designsprint,setDesignSprint] = useContext(GlobalDesignSprint)
    let [leancanvas,setLeanCanvas] = useContext(GlobalLeanCanvas)
    let [businessmodel,setBusinessModel] = useContext(GlobalBusinessModel)
    let [techtalk,setTechTalk] = useContext(GlobalTechTalk)

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

    function handleClick() {
        setInformative(prevState => !prevState)
        setAuftrag(false)
        setErgebnis(false)
        setFort(false)

    }

    function handleClickOne() {
        setAuftrag(prevState => !prevState)
        setInformative(false)
        setErgebnis(false)
        setFort(false)
    }

    function handleClickTwo() {
        setErgebnis(prevState => !prevState)
        setAuftrag(false)
        setInformative(false)
        setFort(false)
    }

    function handleClickThree() {
        setFort(prevState => !prevState)
        setAuftrag(false)
        setErgebnis(false)
        setInformative(false)
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

            designthinking={designthinking}
            designsprint={designsprint}
            leancanvas={leancanvas}
            businessmodel={businessmodel}
            techtalk={techtalk}

            digitalShift={digitalShift}
            futureSales={futureSales}
            futureRetail={futureRetail}
            futureMobility={futureMobility}
            sustainability={sustainability}
            afterSales={afterSales}

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

        <Link to="/Fokus" style={{ textDecoration: 'none', color:'black' }}>
        <Weiter/>
        </Link>
        <div className="kvadrat1" onClick={handleClick} style={{backgroundColor:infocolor}}>
            <p className="title">Informative Session</p>
            <p className="textsquare"> Die disruptive Kraft der Digitalen Transformation verändert unser Leben, unsere Arbeit und erfordert kontinuierliches Lernen. Mit einer „Informative Session“ bringen Sie Expertenwissen zu aktuellen Technologie-Trends direkt zu Ihren Mitarbeitern.  </p>
        </div>

        <div className="kvadrat2" onClick={handleClickOne} style={{backgroundColor:ergebniscolor}}>
            <p className="title">Ergebnisorientierte Sessions</p>
            <p className="textsquare">Welchen Einfluss hat die Digitalisierung auf mein Geschäftsmodell? Wie muss sich dieses ändern um nachhaltig erfolgreich zu sein? In diesen Sessions erarbeiten wir gemeinsam die Antworten zu diesen und vielen weiteren Fragen. </p>
        </div>

        <div className="kvadrat3" onClick={handleClickTwo} style={{backgroundColor:auftragcolor}}>
            <p className="title">Auftragsklärung</p>
            <p className="textsquare">In diesem Gespräch identifizieren wir gemeinsam maßgebliche Hindernisse und Chancen für Ihr zukünftiges Geschäftsmodell und definieren einen Weg wie diese mit uns erfolgreich angegangen werden können.  </p>
        </div>

        <div className="kvadrat4" onClick={handleClickThree} style={{backgroundColor:fortcolor}}>
            <p className="title">Coaching/Training</p>
            <p className="textsquare">Zielgerichtete Kompetenzentwicklung bildet den Grundstein für nachhaltigen Geschäftserfolg. Unser Seminarangebot bietet Ihnen praxisnahe, topaktuelle Qualifizierungen von erfahrenen Trainern, Consultants und Coaches.</p>
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
            marginTop:"-502px"
            }} >

            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Bitte wählen Sie das gewünschte Ziel des Workshops aus. </p>
        </div>
    </div>

  );
}

export default Ziel;
