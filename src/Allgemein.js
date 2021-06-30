import React from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";

function Allgemein() {

  return (
        <div>
          <Kategorien/>
             <Link to="/Umfang" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
             </Link>
        </div>
  );
}

export default Allgemein;