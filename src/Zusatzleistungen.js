import React from "react";
import Kategorien from "./Kategorien";
import "./Zusatzleistungen.css"

function Zusatzleistungen() {

  return (
        <div>
            <Kategorien/>
            <div className="sqr1">
                 <p className="title">Catering</p>
                <p className="textsquare">Für das leibliche Wohl der Teilnehmer empfehlen wir das Hinzubuchen eines Catering-Services.</p>
            </div>

            <div className="sqr2">
                 <p className="title">Bereitstellung von Technik</p>
                <p className="textsquare">Sollte Ihr Unternehmen nicht über notwendige Ausstattung verfügen, können Sie unsere Ausstattung buchen.</p>
            </div>

            <div className="sqr3">
                 <p className="title">Informative Sessions</p>
            </div>
        </div>
  );
}

export default Zusatzleistungen;