import React from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";

function Fokus() {

  return (
        <div>
            <Kategorien/>

            <Link to="/Methodik" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>
        </div>
  );
}

export default Fokus;