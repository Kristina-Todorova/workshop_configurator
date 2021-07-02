import './Kategorien.css';
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React from "react";

function Ziel() {
  return (

    <div>
        <Kategorien/>

        <Link to="/Fokus" style={{ textDecoration: 'none', color:'black' }}>
        <Weiter/>
        </Link>
        <div className="square1">
            <p className="title">Informative Sessions</p>
            <p className="textsquare"> Die disruptive Kraft der Digitalen Transformation verändert unser Leben, unsere Arbeit und erfordert kontinuierliches Lernen. Mit einer „Informative Session“ bringen Sie Expertenwissen zu aktuellen Technologie-Trends direkt zu Ihren Mitarbeitern.  </p>
        </div>

        <div className="square2">
            <p className="title">Ergebnisorientierte Sessions</p>
            <p className="textsquare">Welchen Einfluss hat die Digitalisierung auf mein Geschäftsmodell? Wie muss sich dieses ändern um nachhaltig erfolgreich zu sein? In diesen Sessions erarbeiten wir gemeinsam die Antworten zu diesen und vielen weiteren Fragen. </p>
        </div>

        <div className="square3">
            <p className="title">Auftragsklärung</p>
            <p className="textsquare">In diesem Gespräch identifizieren wir gemeinsam maßgebliche Hindernisse und Chancen für Ihr zukünftiges Geschäftsmodell und definieren einen Weg wie diese mit uns erfolgreich angegangen werden können.  </p>
        </div>

        <div className="square4">
            <p className="title">Informative Sessions</p>
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
