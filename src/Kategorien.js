import './Kategorien.css';
import './Ziel.css';
import Header from './Header.js';
import Footer from './Footer.js';
import {Link} from "react-router-dom";
import Einkaufswagen from "./Einkaufswagen";
import React, {useState} from "react";

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
    const teilnehmer = props.teilnehmer;

    const von = props.von;
    const bis = props.bis;

    let [zielcategory,setZielCategory] = useState(false)

    const zielcolor = zielcategory===true ? "#00ADEF" : "lightgray"

    function changeZielColor() {
        setZielCategory(prevState => !prevState)
        setFokusCategory(false)
        setMethodikCategory(false)
        setAllgemeinCategory(false)
        setUmfangCategory(false)
        setGrundCategory(false)
        setKonfiCategory(false)
        setZusatzCategory(false)
        setZusammenfassungCategory(false)
    }

    let [fokuscategory,setFokusCategory] = useState(false)

    const fokuscolor = fokuscategory===true ? "#00ADEF" : "lightgray"

    function changeFokusColor() {
        setFokusCategory(prevState => !prevState)
        setZielCategory(false)
        setMethodikCategory(false)
        setAllgemeinCategory(false)
        setUmfangCategory(false)
        setGrundCategory(false)
        setKonfiCategory(false)
        setZusatzCategory(false)
        setZusammenfassungCategory(false)
    }

    let [methodikcategory,setMethodikCategory] = useState(false)

    const methodikcolor = methodikcategory===true ? "#00ADEF" : "lightgray"

    function changeMethodikColor() {
        setMethodikCategory(prevState => !prevState)
        setFokusCategory(false)
        setZielCategory(false)
        setAllgemeinCategory(false)
        setUmfangCategory(false)
        setGrundCategory(false)
        setKonfiCategory(false)
        setZusatzCategory(false)
        setZusammenfassungCategory(false)
    }

    let [allgemeincategory,setAllgemeinCategory] = useState(false)

    const allgemeincolor = allgemeincategory===true ? "#00ADEF" : "lightgray"

    function changeAllgemeinColor() {
        setAllgemeinCategory(prevState => !prevState)
        setFokusCategory(false)
        setMethodikCategory(false)
        setZielCategory(false)
        setUmfangCategory(false)
        setGrundCategory(false)
        setKonfiCategory(false)
        setZusatzCategory(false)
        setZusammenfassungCategory(false)
    }

    let [umfangcategory,setUmfangCategory] = useState(false)

    const umfangcolor = umfangcategory===true ? "#00ADEF" : "lightgray"

    function changeUmfangColor() {
        setUmfangCategory(prevState => !prevState)
        setFokusCategory(false)
        setMethodikCategory(false)
        setAllgemeinCategory(false)
        setZielCategory(false)
        setGrundCategory(false)
        setKonfiCategory(false)
        setZusatzCategory(false)
        setZusammenfassungCategory(false)
    }

    let [grundcategory,setGrundCategory] = useState(false)

    const grundcolor = grundcategory===true ? "#00ADEF" : "lightgray"

    function changeGrundColor() {
        setGrundCategory(prevState => !prevState)
    }

    let [konficategory,setKonfiCategory] = useState(false)

    const konficolor = konficategory===true ? "#00ADEF" : "lightgray"

    function changeKonfiColor() {
        setKonfiCategory(prevState => !prevState)
        setFokusCategory(false)
        setMethodikCategory(false)
        setAllgemeinCategory(false)
        setUmfangCategory(false)
        setGrundCategory(false)
        setZielCategory(false)
        setZusatzCategory(false)
        setZusammenfassungCategory(false)
    }

    let [zusatzcategory,setZusatzCategory] = useState(false)

    const zusatzcolor = zusatzcategory===true ? "#00ADEF" : "lightgray"

    function changeZusatzColor() {
        setZusatzCategory(prevState => !prevState)
        setFokusCategory(false)
        setMethodikCategory(false)
        setAllgemeinCategory(false)
        setUmfangCategory(false)
        setGrundCategory(false)
        setKonfiCategory(false)
        setZielCategory(false)
        setZusammenfassungCategory(false)
    }

    let [zusammenfassungcategory,setZusammenfassungCategory] = useState(false)

    const zusammenfassungcolor = zusammenfassungcategory===true ? "#00ADEF" : "lightgray"

    function changeZusammenfassungColor() {
        setZusammenfassungCategory(prevState => !prevState)
        setFokusCategory(false)
        setMethodikCategory(false)
        setAllgemeinCategory(false)
        setUmfangCategory(false)
        setGrundCategory(false)
        setKonfiCategory(false)
        setZusatzCategory(false)
        setZielCategory(false)
    }


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


        <div className="rectangles" onClick={changeZielColor} onMouseOver={MouseOver} onMouseOut={MouseOut}
            style={{backgroundColor:zielcolor}}>

         <Link to="/Ziel" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Ziel des Workshops
            </p>
         </Link>

        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={changeFokusColor} style={{backgroundColor:fokuscolor}}>
            <Link to="/Fokus" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Fokusthema
            </p>
            </Link>
        </div>


        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={changeMethodikColor} style={{backgroundColor:methodikcolor}}>
            <Link to="/Methodik" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Methodik
            </p>
             </Link>
        </div>


        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={changeAllgemeinColor} style={{backgroundColor:allgemeincolor}}>
             <Link to="/Allgemein" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Allgemeine Informationen
            </p>
             </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={changeUmfangColor} style={{backgroundColor:umfangcolor}}>
            <Link to="/Umfang" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Umfang
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={changeGrundColor} style={{backgroundColor:grundcolor}}>
            <Link to="/Grundbausteine" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Grundbausteine
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={changeKonfiColor} style={{backgroundColor:konficolor}}>
            <Link to="/Konfiguration" style={{ textDecoration: 'none' , color:"black"}}>
            <p>
            &nbsp;&nbsp;Konfiguration
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={changeZusatzColor} style={{backgroundColor:zusatzcolor}}>
            <Link to="/Zusatzleistungen" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Zusatzleistungen
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={changeZusammenfassungColor} style={{backgroundColor:zusammenfassungcolor}}>
            <Link to="/Zusammenfassung" style={{ textDecoration: 'none', color:"black" }}>
            <p>
            &nbsp;&nbsp;Zusammenfassung
            </p>
            </Link>
        </div>

        <Einkaufswagen
            ziel= {informative===true
                ? <p className="cartitem1">{"Informative Session"}</p>
                : auftrag===true
                    ? <p className="cartitem1">{"Ergebnisorientierte Session"}</p>
                    : ergebnis===true
                        ? <p className="cartitem1">{"Auftragsklärung"}</p>
                        : fort===true
                            ?<p className="cartitem1">{"Coaching/Training Session"}</p>
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

            von={von}
            bis={bis}
            teilnehmer={teilnehmer}

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
