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
import GlobalLeanCanvas from "./global/GlobalLeanCanvas";
import GlobalBusinessModel from "./global/GlobalBusinessModel";
import GlobalTechTalk from "./global/GlobalTechTalk";

import GlobalDeepDive from "./global/GlobalDeepDive";
import GlobalGruppenarbeit from "./global/GlobalGruppenarbeit"
import GlobalBrainstorming from "./global/GlobalBrainstorming";

import GlobalDigitalShift from "./global/GlobalDigitalShift";
import GlobalFutureSales from "./global/GlobalFutureSales";
import GlobalFutureRetail from "./global/GlobalFutureRetail";
import GlobalFutureMobility from "./global/GlobalFutureMobility";
import GlobalSustainability from "./global/GlobalSustainability";
import GlobalAfterSales from "./global/GlobalAfterSales";

import coins from "./coins.png";
import zeit from "./zeit.png";
import GlobalPrice from "./global/GlobalPrice";
import GlobalTime from "./global/GlobalTime";
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


function Zusatzleistungen() {

    let [catering,setCatering] = useContext(GlobalCatering)
    let [technik,setTechnik] = useContext(GlobalTechnik)
    let [movie,setMovie] = useContext(GlobalState)

    const cateringcolor = catering===true ? "#00ADEF" : "lightgray"
    const technikcolor = technik===true ? "#00ADEF" : "lightgray"
    const moviecolor = movie===true ? "#00ADEF" : "lightgray"

    let [pricecounter, setPriceCounter] = useContext(GlobalPrice)
    let [timecounter, setTimeCounter] = useContext(GlobalTime)

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

    console.log(informative)

    function chooseCatering() {
        setCatering(prevState => !prevState)
        setPriceCounter(catering===false ? pricecounter+350 : 0)
        setTimeCounter(catering===false ? timecounter+0.5 : 0)
    }

    function chooseTechnik() {
        setTechnik(prevState => !prevState)
        setPriceCounter(technik===false ? pricecounter+350 : 0)
        setTimeCounter(technik===false ? timecounter+0.5 : 0)
    }

    function chooseMovie() {
        setMovie(GlobalState => !GlobalState)
        setPriceCounter(movie===false ? pricecounter+350 : 0)
        setTimeCounter(movie===false ? timecounter+0.5 : 0)
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

            paketS={paketS}
            paketM={paketM}
            paketL={paketL}

            pricecounter={pricecounter}
            timecounter={timecounter}

            deutsch={deutsch}
            englisch={englisch}
            anderesprache={anderesprache}
            praesenz={praesenz}
            online={online}
            andereort={andereort}
            teilnehmer={teilnehmer}
            von={von}
            bis={bis}
            />

             <Link to="/Zusammenfassung" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
             </Link>

            <div className="sqr1" onClick={chooseCatering} style={{backgroundColor:cateringcolor}}>
                 <p className="title">Catering</p>
                <p className="textsquare">Für das leibliche Wohl der Teilnehmer empfehlen wir das Hinzubuchen eines Catering-Services.</p>

                <div className="timediv">

                    <img src={zeit} alt="icon" width="25px" height="25px" style={{marginLeft:"12%",marginTop:"19%"}}/>
                    <p className="zeit">0,5 Stunden</p>

                </div>

                <div className="pricediv">
                    <img src={coins} alt="icon" width="25px" height="25px" style={{marginRight:"70%", marginTop:"-19%"}}/>
                    <p className="pricetag1">350 EUR</p>
                </div>

            </div>

            <div className="sqr2" onClick={chooseTechnik} style={{backgroundColor:technikcolor}}>
                 <p className="title">Bereitstellung von Technik</p>
                <p className="textsquare">Sollte Ihr Unternehmen nicht über notwendige Ausstattung verfügen, können Sie unsere Ausstattung buchen.</p>
                <div className="timediv">

                    <img src={zeit} alt="icon" width="25px" height="25px" style={{marginLeft:"12%",marginTop:"19%"}}/>
                    <p className="zeit">0,5 Stunden</p>

                </div>

                <div className="pricediv">
                    <img src={coins} alt="icon" width="25px" height="25px" style={{marginRight:"70%", marginTop:"-19%"}}/>
                    <p className="pricetag1">350 EUR</p>
                </div>

            </div>

            <div className="sqr3" onClick={chooseMovie} style={{backgroundColor:moviecolor}}>
                 <p className="title">After-Movie</p>
                <p className="textsquare">Nach dem Workshop erhalten Sie einen kurzen Zusammenschnitt mit den wichtigsten Erkenntnissen.</p>

                <div className="timediv">

                    <img src={zeit} alt="icon" width="25px" height="25px" style={{marginLeft:"12%",marginTop:"25%"}}/>
                    <p className="zeit">0,5 Stunden</p>

                </div>

                <div className="pricediv">
                    <img src={coins} alt="icon" width="25px" height="25px" style={{marginRight:"70%", marginTop:"-25%"}}/>
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
                    }}>
                    <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                   <p>Nachfolgend können Sie Zusatzleistungen für Ihren Workshop auswählen.</p>
            </div>
        </div>
  );
}

export default Zusatzleistungen;