import './Umfang.css';
import React, {useContext} from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import GlobalPaketS from "./global/GlobalPaketS";
import GlobalPaketM  from "./global/GlobalPaketM";
import GlobalPaketL from "./global/GlobalPaketL";
import coins from "./coins.png";
import GlobalPrice from "./global/GlobalPrice";
import GlobalTime from "./global/GlobalTime";

import GlobalInformative from "./global/GlobalInformative";
import GlobalAuftrag from "./global/GlobalAuftrag";
import GlobalErgebnis from "./global/GlobalErgebnis";
import GlobalFort from "./global/GlobalFort";

import GlobalDigitalShift from "./global/GlobalDigitalShift";
import GlobalFutureSales from "./global/GlobalFutureSales";
import GlobalFutureRetail from "./global/GlobalFutureRetail";
import GlobalFutureMobility from "./global/GlobalFutureMobility";
import GlobalSustainability from "./global/GlobalSustainability";
import GlobalAfterSales from "./global/GlobalAfterSales";

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
import GlobalDeepDive from "./global/GlobalDeepDive";
import GlobalGruppenarbeit from "./global/GlobalGruppenarbeit";
import GlobalBrainstorming from "./global/GlobalBrainstorming";
import GlobalCatering from "./global/GlobalCatering";
import GlobalTechnik from "./global/GlobalTechnik";
import GlobalState from "./global/GlobalState";



function Umfang() {

    let [informative,setInformative] = useContext(GlobalInformative)
    let [auftrag,setAuftrag] = useContext(GlobalAuftrag)
    let [ergebnis,setErgebnis] = useContext(GlobalErgebnis)
    let [fort,setFort] = useContext(GlobalFort)

    let [paketS,setPaketS] = useContext(GlobalPaketS)
    let [paketM,setPaketM] = useContext(GlobalPaketM)
    let [paketL,setPaketL] = useContext(GlobalPaketL)

    const scolor = paketS===true ? "#00ADEF" : "lightgray"
    const mcolor = paketM===true ? "#00ADEF" : "lightgray"
    const lpaketcolor = paketL===true ? "#00ADEF" : "lightgray"

    let [pricecounter, setPriceCounter] = useContext(GlobalPrice)
    let [timecounter, setTimeCounter] = useContext(GlobalTime)

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

    let [deepdive, setDeepdive] = useContext(GlobalDeepDive)
    let [gruppenarbeit, setGruppenarbeit] = useContext(GlobalGruppenarbeit)
    let [brainstorming, setBrainstorming] = useContext(GlobalBrainstorming)

    let [catering,setCatering] = useContext(GlobalCatering)
    let [technik,setTechnik] = useContext(GlobalTechnik)
    let [movie,setMovie] = useContext(GlobalState)


    function choosePaketS() {
        setPaketS(prevState => !prevState)
        setPaketM(false)
        setPaketL(false)
        setPriceCounter(pricecounter=0)
        setTimeCounter(timecounter=0)
        setTimeCounter(paketS===false ? timecounter+1 : 0)
    }

    function choosePaketM() {
        setPaketM(prevState => !prevState)
        setPaketS(false)
        setPaketL(false)
        setPriceCounter(pricecounter=0)
        setPriceCounter(paketM===false ? pricecounter+1000 : 0)
        setTimeCounter(timecounter=0)
        setTimeCounter(paketM===false ? timecounter+5 : 0)
    }

    function choosePaketL() {
        setPaketL(prevState => !prevState)
        setPaketS(false)
        setPaketM(false)
        setPriceCounter(pricecounter=0)
        setPriceCounter(paketL===false ? pricecounter+3000 : 0)
        setTimeCounter(timecounter=0)
        setTimeCounter(paketL===false ? timecounter+14 : 0)
    }

  return (
        <div>
            <Kategorien
            paketS={paketS}
            paketM={paketM}
            paketL={paketL}
            pricecounter={pricecounter}
            timecounter={timecounter}

            informative={informative}
            auftrag={auftrag}
            ergebnis={ergebnis}
            fort={fort}

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

            deepdive={deepdive}
            gruppenarbeit={gruppenarbeit}
            brainstorming={brainstorming}

            movie={movie}
            catering={catering}
            technik={technik}
            />

             <Link to="/Grundbausteine" style={{ textDecoration: 'none', color:'black' }}>
             <Weiter/>
             </Link>
             <div className="sqr01" onClick={choosePaketS} style={{backgroundColor:scolor}}>
                 <p className="title">Paket S </p>
                <p className="textsquare">Mit diesem Paket haben Sie die Möglichkeit einen ersten kostenlosen Überblick zu Ihrem gewünschten Thema zu erhalten.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    {"\n"} - Kostenlose Einführung
                     <br></br>
                    {"\n"} - Elemente: Keynote, Fragerunde
                     <br></br>
                    {"\n"} - Dauer: 1 Stunde</p>
                   <img src={coins} alt="icon" width="30px" height="30px" style={{marginLeft:"10%", marginTop:"19%"}}/>
                     <p className="minirect">ab 0 EUR</p>
             </div>

            <div className="sqr02" onClick={choosePaketM} style={{backgroundColor:mcolor}}>
                 <p className="title">Paket M</p>
                <p className="textsquare">Mit diesem Paket erhalten Sie einen grundlegenden Workshop zu Ihrem gewünschten Thema. Unsere Experten unterstützen Sie dabei druch die individuelle Vermittlung von Wissen.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {"\n"} - Vier themenbezogene Grundbausteine
                    <br></br>
                    {"\n"} - Hinzubuchen von Zusatzbausteinen und -leistungen möglich
                    <br></br>
                    {"\n"} - Dauer: 5 Stunden</p>
                <div className="minirect1">
                     <img src={coins} alt="icon" width="30px" height="30px" style={{ marginLeft:"5%",marginTop:"2%"}}/>
                     <p className="textt">ab 1000 EUR </p>
                 </div>
                <div className="minirect3">
                     <p className="texttt"> Empfohlen </p>
                 </div>
            </div>

            <div className="sqr03" onClick={choosePaketL} style={{backgroundColor:lpaketcolor}}>
                 <p className="title">Paket L</p>
                <p className="textsquare">Dieses Paket enthält einen umfangreichen Workshop zu Ihrem gewp´ünschten Thema. Unsere Experten unterstützen Sie durch die Vermittlung von Wissen bei der Erarbeitung Ihrer Inhalte und geben Ihnen Handlungsempfehlungen.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {"\n"} - Sechs themenbezogene Grundbausteine
                    <br></br>
                    {"\n"} - Hinzubuchen von Zusatzbausteinen und -leistungen möglich
                    <br></br>
                    {"\n"} - Dauer: 14 Stunde (2 Werktage)</p>
                     <img src={coins} alt="icon" width="30px" height="30px" style={{marginRight:"50%", marginTop:"-4%", marginLeft:"10%"}}/>
                    <p className="minirect2">ab 3000 EUR </p>
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
                    marginTop:"-528px"
                    }} >
                <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                <p>Bitte wählen Sie die gewünschte Paketgröße aus. Das ausgewählte Paket kann im Folgenden noch personalisiert werden.</p>
            </div>

        </div>
  );
}

export default Umfang;