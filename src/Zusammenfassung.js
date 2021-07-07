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


    const ziel1 = props.ziel1;
    const fokus1 = props.fokus1;
    const methodik1 = props.methodik1;
    const allgemein1 = props.allgemein1;
    const umfang1 = props.umfang1;
    const grundbausteine1 = props.grundbausteine1;
    const konfiguration1 = props.konfiguration1;

    const catering1 = props.catering1;
    const technik1 = props.technik1;
    const movie1 = props.movie1;

    const deepdive1 = props.deepdive1;
    const brainstorming1 = props.brainstorming1;
    const gruppenarbeit1 = props.gruppenarbeit1;



  return (
            <div>
                <Kategorien


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
                        marginTop:"-615px"
                        }}>
                        <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                       <p>Im Folgenden werden alle von Ihnen ausgewählten Leistungen noch einmal aufgeführt.  Bitte kontrollieren Sie vor dem Abschluss des Vorgangs, ob alle Segmente richtig angezeigt werden.  Im nächsten Schritt kann der Workshop angefragt werden.</p>
                </div>

                  <div className="zielworkshop">
                    <p>Ziel des Workshops:</p>
                     {ziel1
                         ? <p>{props.ziel1}</p>
                         : <p className="leer">Kein Ziel ausgewählt</p>
                         }

                   </div>




                  <div className="fokusthema">
                    <p>Fokusthema:</p>
                    {fokus1
                          && <p className="cartitem">{props.fokus1}</p>
                          }
                    </div>
                  <div className="methodik">
                    <p>Methodik:</p>
                    {methodik1
                          && <p className="cartitem">{props.methodik1}</p>
                          }
                    </div>

                    <div className="allginfo">
                    <p>Allgemeine Infomation:</p>
                    </div>

                    <div className="umfang">
                    <p>Umfang:</p>
                    {umfang1
                           && <p className="cartitem">{props.umfang1}</p>
                           }
                    </div>

                    <div className="grundbausteine">
                    <p>Grundbausteine:</p>
                    </div>

                    <div className="konfiguration">
                    <p>Konfiguration:</p>
                    </div>

                    <div className="zusatzleistungen">
                    <p>Zusatzleistungen:</p>
                    {brainstorming1
                        && <p className="cartitem">{props.brainstorming1}</p>
                        }

                   {deepdive1
                        && <p className="cartitem">{props.deepdive1}</p>
                        }

                   {gruppenarbeit1
                        && <p className="cartitem">{props.gruppenarbeit1}</p>
                        }
                    </div>

                    <div className="dauer">
                    <p>Gesamtdauer: </p>
                    </div>

                    <div className="preis">
                    <p>Preis:</p>
                    </div>

            </div>
  );
}

export default Zusammenfassung;