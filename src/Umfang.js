import React from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";

function Umfang() {

  return (
        <div>
            <Kategorien/>

             <Link to="/Grundbausteine" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
             </Link>
        </div>
  );
}

export default Umfang;