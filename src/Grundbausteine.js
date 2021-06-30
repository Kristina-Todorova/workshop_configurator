import React from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";

function Grundbausteine() {

  return (
        <div>
            <Kategorien/>

             <Link to="/Konfiguration" style={{ textDecoration: 'none', color:'black' }}>
             <Weiter/>
             </Link>
        </div>
  );
}

export default Grundbausteine;