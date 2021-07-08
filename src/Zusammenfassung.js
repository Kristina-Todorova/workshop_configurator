import React, {useState, useContext, useEffect} from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import "./Zusammenfassung.css";
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
import GlobalTeilnehmer from "./global/GlobalTeilnehmer";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    maxWidth: 300,
  },
});

function Zusammenfassung(props) {

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

                <Link to="/Kontaktformular" style={{ textDecoration: 'none', color:'black' }}>
                <Weiter/>
                </Link>

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
                        marginTop:"-635px"
                        }}>
                        <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                       <p>Im Folgenden werden alle von Ihnen ausgewählten Leistungen noch einmal aufgeführt.  Bitte kontrollieren Sie vor dem Abschluss des Vorgangs, ob alle Segmente richtig angezeigt werden.  Im nächsten Schritt kann der Workshop angefragt werden.</p>
                </div>

                  <div className="zielworkshop">
                    <p>Ziel des Workshops:</p> </div>

                    <div className="row1">
                     {informative===true
                        ? <p className="cartitem12">{"Informative Session"}</p>
                        : auftrag===true
                            ? <p className="cartitem12">{"Ergebnisorientierte Session"}</p>
                            : ergebnis===true
                                ? <p className="cartitem12">{"Auftragsklärung"}</p>
                                : fort===true
                                    ?<p className="cartitem12">{"Coaching/Training Session"}</p>
                                        : <p className="leer">Ihr Warenkorb ist leer.</p>
                            }
                   </div>


                  <div className="fokusthema">

                    <p>Fokusthema:</p> </div>

                <div className="row2">
                    {digitalShift===true
                ? <p className="cartitemm">{"Digital Shift"}</p>
                : futureSales===true
                    ? <p className="cartitemm">{"Future Sales"}</p>
                    : futureRetail===true
                        ? <p className="cartitemm">{"Future Retail"}</p>
                        : futureMobility===true
                            ? <p className="cartitemm">{"Future Mobility"}</p>
                            : sustainability===true
                                ? <p className="cartitemm">{"Sustainability"}</p>
                                : afterSales ===true
                                    ? <p className="cartitemm">{"After Sales"}</p>
                                    : ""
                    }
                    </div>


                  <div className="methodik">
                    <p>Methodik:</p> </div>
                  <div className="row3">
                      {designthinking===true
                ? <p className="cartitemm">{"Design Thinking"}</p>
                : designsprint===true
                    ? <p className="cartitemm">{"Design Sprint"}</p>
                    : leancanvas===true
                        ? <p className="cartitemm">{"Lean Canvas"}</p>
                        : businessmodel===true
                            ? <p className="cartitemm">{"Business Model"}</p>
                            : techtalk===true
                                ? <p className="cartitemm">{"Tech Talk"}</p>
                                : ""
                    }

                    </div>


                    <div className="allginfo">
                    <p>Allgemeine Infomation:</p></div>
                    <div className="row4">
                        {deutsch===true
                            ? <p className="cartitemm">{"Deutsch"}</p>
                            : englisch===true
                                ? <p className="cartitemm">{"Englisch"}</p>
                                : anderesprache===true
                                    ? <p className="cartitemm">{"Andere Sprache"}</p>
                                    : ""
                            }

                        {online===true
                                ? <p className="cartitemm">{"Online"}</p>
                                : praesenz===true
                                    ? <p className="cartitemm">{"Präsenz"}</p>
                                    : andereort===true
                                        ? <p className="cartitemm">{"Anderer Ort"}</p>
                                        : ""
                                }

                        &nbsp;&nbsp; Von: {von}
                        &nbsp;&nbsp;&nbsp; Bis:{bis}
                        <p>
                        &nbsp;&nbsp; {teilnehmer} Teilnehmer </p>

                    </div>



            <div className="rightside"  >

                    <div className="umfang">
                    <p>Umfang:</p> </div>

                    <div className="row5">

                    {paketS===true
                    ? <p className="cartitemm">{"Paket S"}</p>
                    : paketM===true
                        ? <p className="cartitemm">{"Paket M"}</p>
                        : paketL===true
                            ? <p className="cartitemm">{"Paket L"}</p>
                            : ""
                    }
                    </div>

                    <div className="konfiguration">
                    <p>Konfiguration:</p> </div>
                    <div className="row6">

                        {deepdive===true && <p className="cartitemm">{"Deep Dive"}</p>}
                        {brainstorming===true && <p className="cartitemm">{"Brainstorming"}</p>}
                        {gruppenarbeit===true && <p className="cartitemm">{"Gruppenarbeit"}</p>}


                    </div>

                    <div className="zusatzleistungen">

                    <p>Zusatzleistungen:</p> </div>

                    <div className='row7'>
                        {catering===true && <p className="cartitemm">{"Catering"}</p>}
                        {technik===true && <p className="cartitemm">{"Technik"}</p>}
                        {movie===true && <p className="cartitemm">{"After-Movie"}</p>}

                    </div>

                </div>



                <div className="dauer">
                    <p>Gesamtdauer: </p></div>
                    <div className="row8">
                        {timecounter} Std.
                    </div>

                <div className="preis">
                    <p>Preis:</p></div>
                    <div className='row9'>
                    <span>
                        {pricecounter} &euro;</span>
                    </div>

            </div>
  );
}

export default Zusammenfassung;