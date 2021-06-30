import React from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";

function Zusammenfassung() {

  return (
        <div>
            <Kategorien/>

            <Link to="/Kontaktformular" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>
        </div>
  );
}

export default Zusammenfassung;