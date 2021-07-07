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

import GlobalDesignThinking from "./global/GlobalDesignThinking";
import GlobalDesignSprint from "./global/GlobalDesignSprint";
import GlobalLeanCanvas from "./global/GlobalLeanCanvas";
import GlobalBusinessModel from "./global/GlobalBusinessModel";
import GlobalTechTalk from "./global/GlobalTechTalk";

import "./Konfiguration.css";
import coins from "./coins.png";
import zeit from "./zeit.png";

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

function Konfiguration() {

    let [informative,setInformative] = useContext(GlobalInformative)
    let [auftrag,setAuftrag] = useContext(GlobalAuftrag)
    let [ergebnis,setErgebnis] = useContext(GlobalErgebnis)
    let [fort,setFort] = useContext(GlobalFort)

    let [deepdive, setDeepdive] = useContext(GlobalDeepDive)
    let [gruppenarbeit, setGruppenarbeit] = useContext(GlobalGruppenarbeit)
    let [brainstorming, setBrainstorming] = useContext(GlobalBrainstorming)

    const ddcolor = deepdive==true ? "#00ADEF" : "lightgray"
    const gacolor = gruppenarbeit==true ? "#00ADEF" : "lightgray"
    const bscolor = brainstorming==true ? "#00ADEF" : "lightgray"

    let [catering,setCatering] = useContext(GlobalCatering)
    let [technik,setTechnik] = useContext(GlobalTechnik)
    let [movie,setMovie] = useContext(GlobalState)

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
            brainstorming={brainstorming}

            digitalShift={digitalShift}
            futureSales={futureSales}
            futureRetail={futureRetail}
            futureMobility={futureMobility}
            sustainability={sustainability}
            afterSales={afterSales}

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

             <Link to="/Zusatzleistungen" style={{ textDecoration: 'none', color:'black' }}>
             <Weiter/>
             </Link>

             <div className="square1" onClick={chooseGruppenarbeit} style={{backgroundColor:gacolor}}>
                <p className="title">Gruppenarbeit</p>
               <p className="textsquare">Ergänzen Sie Ihren Workshop um eine zusätzliche Gruppenaktivität passend zu Ihrem Thema. </p>

                 <div className="timediv">

                    <img src={zeit} alt="icon" width="25px" height="25px" style={{marginLeft:"12%",marginTop:"27%"}}/>
                    <p className="zeit">0,5 Stunden</p>

                </div>

                <div className="pricediv">
                    <img src={coins} alt="icon" width="25px" height="25px" style={{marginRight:"70%", marginTop:"-27%"}}/>
                    <p className="pricetag1">350 EUR</p>
                </div>

             </div>

             <div className="square2" onClick={chooseBrainstorming} style={{backgroundColor:bscolor}} >
                <p className="title">Brainstorming</p>
               <p className="textsquare">Ergänzen Sie den Workshop um ein Brainstorming in großer Runde </p>

                 <div className="timediv">

                    <img src={zeit} alt="icon" width="25px" height="25px" style={{marginLeft:"12%",marginTop:"35%"}}/>
                    <p className="zeit">0,5 Stunden</p>

                </div>

                <div className="pricediv">
                    <img src={coins} alt="icon" width="25px" height="25px" style={{marginRight:"70%", marginTop:"-35%"}}/>
                    <p className="pricetag1">350 EUR</p>
                </div>


             </div>


             <div className="square3" onClick={chooseDeepdive} style={{backgroundColor:ddcolor}} >
                <p className="title">Deep Dive</p>
               <p className="textsquare">Ergänzen Sie Ihren Workshop um einen Deep Dive zu einem relevanten oder gewünschten Thema. </p>

                 <div className="timediv">

                    <img src={zeit} alt="icon" width="25px" height="25px" style={{marginLeft:"12%",marginTop:"19%"}}/>
                    <p className="zeit">0,5 Stunden</p>

                </div>

                <div className="pricediv">
                    <img src={coins} alt="icon" width="25px" height="25px" style={{marginRight:"70%", marginTop:"-19%"}}/>
                    <p className="pricetag1">350 EUR</p>
                </div>

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
                    }} >
                    <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                    <p>Nachfolgend können Sie weitere Bausteine zur Personalisierung Ihres Workshops auswählen.</p>
             </div>
        </div>
  );
}

export default Konfiguration;