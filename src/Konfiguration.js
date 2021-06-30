import React from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";

function Konfiguration() {

  return (
        <div>
            <Kategorien/>

             <Link to="/Zusatzleistungen" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
             </Link>
        </div>
  );
}

export default Konfiguration;