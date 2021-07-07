import './Kategorien.css';
import './Ziel.css';
import Header from './Header.js';
import Footer from './Footer.js';
import {Link} from "react-router-dom";
import Einkaufswagen from "./Einkaufswagen";
import React from "react";

function Kategorien(props) {

    const informative = props.informative
    const auftrag = props.auftrag
    const ergebnis = props.ergebnis
    const fort = props.fort

    const catering = props.catering
    const technik = props.technik
    const movie = props.movie

    const gruppenarbeit = props.gruppenarbeit
    const brainstorming = props.brainstorming
    const deepdive = props.deepdive

    const digitalShift = props.digitalShift
    const futureSales = props.futureSales
    const futureRetail = props.futureRetail
    const futureMobility = props.futureMobility
    const sustainability = props.sustainability
    const aftersales = props.afterSales

    const paketS = props.paketS
    const paketM = props.paketM
    const paketL = props.paketL

    const pricecounter = props.pricecounter
    const timecounter = props.timecounter

    const designthinking = props.designthinking;
    const designsprint = props.designsprint;
    const leancanvas = props.leancanvas;
    const businessmodel = props.businessmodel;
    const techtalk = props.techtalk;

    const deutsch = props.deutsch;
    const englisch = props.englisch;
    const anderesprache = props.anderesprache;

    const online = props.online;
    const praesenz = props.praesenz;
    const andereort = props.andereort;
    const teilnehmer = props.teilnehmer


    function MouseOver(event) {
        event.target.style.background = '#00ADEF';
      }
      function MouseOut(event){
        event.target.style.background="";
      }

  return (

    <div>
        <Header/>
        <div>

            <p className="stripee">
            _________
        </p>
        <p className="configurator">
            Workshop Konfigurator
        </p>
        </div>


        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} >

         <Link to="/Ziel" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Ziel des Workshops
            </p>
         </Link>

        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Fokus" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Fokusthema
            </p>
            </Link>
        </div>


        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Methodik" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Methodik
            </p>
             </Link>
        </div>


        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
             <Link to="/Allgemein" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Allgemeine Informationen
            </p>
             </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Umfang" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Umfang
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Grundbausteine" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Grundbausteine
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Konfiguration" style={{ textDecoration: 'none' , color:"black"}}>
            <p>
            &nbsp;&nbsp;Konfiguration
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Zusatzleistungen" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Zusatzleistungen
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Zusammenfassung" style={{ textDecoration: 'none', color:"black" }}>
            <p>
            &nbsp;&nbsp;Zusammenfassung
            </p>
            </Link>
        </div>
        <Einkaufswagen
            ziel= {informative===true
                ? <p className="cartitem">{"Informative Session"}</p>
                : auftrag===true
                    ? <p className="cartitem">{"Ergebnisorientierte Session"}</p>
                    : ergebnis===true
                        ? <p className="cartitem">{"Auftragsklärung"}</p>
                        : fort===true
                            ?<p className="cartitem">{"Coaching/Training Session"}</p>
                                : <p className="leer">Ihr Warenkorb ist leer.</p>
                    }

            fokus= {digitalShift===true
                ? <p className="cartitem">{"Digital Shift"}</p>
                : futureSales===true
                    ? <p className="cartitem">{"Future Sales"}</p>
                    : futureRetail===true
                        ? <p className="cartitem">{"Future Retail"}</p>
                        : futureMobility===true
                            ? <p className="cartitem">{"Future Mobility"}</p>
                            : sustainability===true
                                ? <p className="cartitem">{"Sustainability"}</p>
                                : aftersales ===true
                                    ? <p className="cartitem">{"After Sales"}</p>
                                    : ""
                    }

            grundbausteine="Grundbausteine"


            methodik= {designthinking===true
                ? <p className="cartitem">{"Design Thinking"}</p>
                : designsprint===true
                    ? <p className="cartitem">{"Design Sprint"}</p>
                    : leancanvas===true
                        ? <p className="cartitem">{"Lean Canvas"}</p>
                        : businessmodel===true
                            ? <p className="cartitem">{"Business Model"}</p>
                            : techtalk===true
                                ? <p className="cartitem">{"Tech Talk"}</p>
                                : ""
                    }

            sprache={deutsch===true
                    ? <p className="cartitem">{"Deutsch"}</p>
                    : englisch===true
                        ? <p className="cartitem">{"Englisch"}</p>
                        : anderesprache===true
                            ? <p className="cartitem">{"Andere Sprache"}</p>
                            : ""
                    }

            ort={online===true
                    ? <p className="cartitem">{"Online"}</p>
                    : praesenz===true
                        ? <p className="cartitem">{"Präsenz"}</p>
                        : andereort===true
                            ? <p className="cartitem">{"Anderer Ort"}</p>
                            : ""
                    }

            teilnehmer={props.teilnehmer}

            umfang= {paketS===true
                    ? <p className="cartitem">{"Paket S"}</p>
                    : paketM===true
                        ? <p className="cartitem">{"Paket M"}</p>
                        : paketL===true
                            ? <p className="cartitem">{"Paket L"}</p>
                            : ""
                    }

            catering={catering===true && <p className="cartitem">{"Catering"}</p>}
            technik={technik===true && <p className="cartitem">{"Technik"}</p>}
            movie={movie===true && <p className="cartitem">{"After-Movie"}</p>}

            deepdive={deepdive===true && <p className="cartitem">{"Deep Dive"}</p>}
            brainstorming={brainstorming===true && <p className="cartitem">{"Brainstorming"}</p>}
            gruppenarbeit={gruppenarbeit===true && <p className="cartitem">{"Gruppenarbeit"}</p>}

            timecounter = {timecounter}
            pricecounter = {pricecounter}

            />


        <Footer/>

    </div>
  );
}

export default Kategorien;
