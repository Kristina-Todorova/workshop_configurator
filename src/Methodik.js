import React from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";

function Methodik() {

  return (
        <div>
            <Kategorien/>

            <Link to="/Allgemein" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>
        </div>
  );
}

export default Methodik;