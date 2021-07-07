import './Allgemein.css';
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext} from "react";
import GlobalTeilnehmer from "./global/GlobalTeilnehmer";
import {TextField} from "@material-ui/core";

import GlobalInformative from "./global/GlobalInformative";
import GlobalAuftrag from "./global/GlobalAuftrag";
import GlobalErgebnis from "./global/GlobalErgebnis";
import GlobalFort from "./global/GlobalFort";

import GlobalDeutsch from "./global/GlobalDeutsch";
import GlobalEnglisch from "./global/GlobalEnglisch";
import GlobalAndereSprache from "./global/GlobalAndereSprache";

import GlobalPraesenz from "./global/GlobalPraesenz";
import GlobalOnline from "./global/GlobalOnline";
import GlobalAndereOrt from "./global/GlobalAndereOrt";
import GlobalVon from "./global/GlobalVon";
import GlobalBis from "./global/GlobalBis";

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
import GlobalPaketS from "./global/GlobalPaketS";
import GlobalPaketM from "./global/GlobalPaketM";
import GlobalPaketL from "./global/GlobalPaketL";
import GlobalPrice from "./global/GlobalPrice";
import GlobalTime from "./global/GlobalTime";
import GlobalDeepDive from "./global/GlobalDeepDive";
import GlobalGruppenarbeit from "./global/GlobalGruppenarbeit";
import GlobalBrainstorming from "./global/GlobalBrainstorming";
import GlobalCatering from "./global/GlobalCatering";
import GlobalTechnik from "./global/GlobalTechnik";
import GlobalState from "./global/GlobalState";


function Allgemein() {


    let [deutsch,setDeutsch] = useContext(GlobalDeutsch);
    let [englisch,setEnglisch] = useContext(GlobalEnglisch);
    let [anderesprache,setAndereSprache] = useContext(GlobalAndereSprache);

    let [praesenz,setPraesenz] = useContext(GlobalPraesenz);
    let [online,setOnline] = useContext(GlobalOnline);
    let [andereort,setAndereOrt] = useContext(GlobalAndereOrt);

    let [teilnehmer,setTeilnehmer] = useContext(GlobalTeilnehmer);
    let [von,setVon] = useContext(GlobalVon);
    let [bis,setBis] = useContext(GlobalBis);

    let [informative,setInformative] = useContext(GlobalInformative)
    let [auftrag,setAuftrag] = useContext(GlobalAuftrag)
    let [ergebnis,setErgebnis] = useContext(GlobalErgebnis)
    let [fort,setFort] = useContext(GlobalFort)

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

    let [paketS,setPaketS] = useContext(GlobalPaketS)
    let [paketM,setPaketM] = useContext(GlobalPaketM)
    let [paketL,setPaketL] = useContext(GlobalPaketL)
    let [pricecounter, setPriceCounter] = useContext(GlobalPrice)
    let [timecounter, setTimeCounter] = useContext(GlobalTime)

    let [deepdive, setDeepdive] = useContext(GlobalDeepDive)
    let [gruppenarbeit, setGruppenarbeit] = useContext(GlobalGruppenarbeit)
    let [brainstorming, setBrainstorming] = useContext(GlobalBrainstorming)

    let [catering,setCatering] = useContext(GlobalCatering)
    let [technik,setTechnik] = useContext(GlobalTechnik)
    let [movie,setMovie] = useContext(GlobalState)

    const deutschcolor = deutsch===true ? "#00ADEF" : "darkgrey"
    const englischcolor = englisch===true ? "#00ADEF" : "darkgrey"
    const andspcolor = anderesprache===true ? "#00ADEF" : "darkgrey"

    const onlinecolor = online===true ? "#00ADEF" : "darkgrey"
    const prascolor = praesenz===true ? "#00ADEF" : "darkgrey"
    const andortcolor = andereort===true ? "#00ADEF" : "darkgrey"


    function chooseDeutsch() {
        setDeutsch(prevState => !prevState)
        setEnglisch(false)
        setAndereSprache(false)
    }

    function chooseEnglisch() {
        setEnglisch(prevState => !prevState)
        setDeutsch(false)
        setAndereSprache(false)
    }

    function chooseAndereSprache() {
        setAndereSprache(prevState => !prevState)
        setEnglisch(false)
        setDeutsch(false)
    }

    function choosePraesenz() {
        setPraesenz(prevState => !prevState)
        setOnline(false)
        setAndereOrt(false)
    }

    function chooseOnline() {
        setOnline(prevState => !prevState)
        setPraesenz(false)
        setAndereOrt(false)
    }

    function chooseAndereOrt() {
        setAndereOrt(prevState => !prevState)
        setOnline(false)
        setPraesenz(false)
    }


  return (
        <div>

            <Kategorien
            deutsch={deutsch}
            englisch={englisch}
            anderesprache={anderesprache}

            praesenz={praesenz}
            online={online}
            andereort={andereort}
            teilnehmer={teilnehmer}

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

            von={von}
            bis={bis}

            paketS={paketS}
            paketM={paketM}
            paketL={paketL}
            pricecounter={pricecounter}
            timecounter={timecounter}

            deepdive={deepdive}
            gruppenarbeit={gruppenarbeit}
            brainstorming={brainstorming}

            movie={movie}
            catering={catering}
            technik={technik}
            />

            <Link to="/Umfang" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>

             <div className="squaresprache">
                 <p className="allgemeintitle">Sprache</p>

                 <div className="sprachen" onClick={chooseDeutsch} style={{backgroundColor:deutschcolor}}>
                 <p>Deutsch</p>
                 </div>

                 <div className="sprachen1" onClick={chooseEnglisch} style={{backgroundColor:englischcolor}}>
                 <p>Englisch</p>
                 </div>

                 <div className="sprachen2" onClick={chooseAndereSprache} style={{backgroundColor:andspcolor}}>
                 <p>Andere</p>
                 </div>

                 </div>


             <div className="squareort">
                <p className='allgemeintitle'>Ort</p>

                 <div className="sprachen" onClick={chooseOnline} style={{backgroundColor:onlinecolor}}>
                 <p>Online</p>
                 </div>

                 <div className="sprachen1" onClick={choosePraesenz} style={{backgroundColor:prascolor}}>
                 <p>Präsenz</p>
                 </div>

                 <div className="sprachen2" onClick={chooseAndereOrt} style={{backgroundColor:andortcolor}}>
                 <p>Andere</p>
                 </div>

                </div>

             <div className="squarezeitraum">
                <p className='allgemeintitle'>Zeitraum</p>

                 <form>
                  <TextField
                    id="date"
                    label="von"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}

                     style={{
                        backgroundColor:"DDDDDD",
                        marginLeft:"170px",
                        marginTop:"-55px",
                    }}
                    onChange={(event) => {setVon(event.target.value)}}
                  />
                </form>

                 <form>
                  <TextField
                    id="date"
                    label="bis"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{
                        backgroundColor:"DDDDDD",
                        marginLeft:"505px",
                        marginTop:"-68px"
                    }}
                    onChange={(event) => {setBis(event.target.value)}}
                  />
                </form>

                </div>

             <div className="squareteilnehmer">
                <p className='allgemeintitle'>Teilnehmer</p>
                 <form>
                 <TextField id="outlined-basic" label="Anzahl" variant="outlined" required="true" size="small"
                            style={{marginLeft:"170px",  marginTop:"-50px", backgroundColor:"white", width:"20%" }}
                            onChange={(event) => {setTeilnehmer(event.target.value)}}
                 />
                </form>

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
                    marginTop:"-377px"
                    }} >
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Bitte geben Sie uns allgemeine Informationen zu Ihrem Workshop.</p>
        </div>
        </div>
  );
}

export default Allgemein;