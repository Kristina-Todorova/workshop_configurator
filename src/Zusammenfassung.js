import React from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import "./Zusammenfassung.css";

function Zusammenfassung(props) {

    const ziel = props.ziel;
    const fokus = props.fokus;
    const methodik = props.methodik;
    const allgemein = props.allgemein;
    const umfang = props.umfang;
    const grundbausteine = props.grundbausteine;
    const konfiguration = props.konfiguration;

    const catering = props.catering;
    const technik = props.technik;
    const movie = props.movie;

    const deepdive = props.deepdive;
    const brainstorming = props.brainstorming;
    const gruppenarbeit = props.gruppenarbeit;

  return (
            <div>
                <Kategorien/>

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
                     {ziel
                         ? <p>{props.ziel}</p>
                         : <p className="leer">Kein Ziel ausgewaehlt</p>
                         }

                   </div>




                  <div className="fokusthema">
                    <p>Fokusthema:</p>
                    </div>
                  <div className="methodik">
                    <p>Methodik:</p>
                    </div>

                    <div className="allginfo">
                    <p>Allgemeine Infomation:</p>
                    </div>

                    <div className="umfang">
                    <p>Umfang:</p>
                    </div>

                    <div className="grundbausteine">
                    <p>Grundbausteine:</p>
                    </div>

                    <div className="konfiguration">
                    <p>Konfiguration>:</p>
                    </div>

                    <div className="zusatzleistungen">
                    <p>Zusatzleistungen:</p>
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