import React from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";

function Grundbausteine() {

  return (
        <div>
            <Kategorien/>

             <Link to="/Konfiguration" style={{ textDecoration: 'none', color:'black' }}>
             <Weiter/>
             </Link>
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
                    marginTop:"-615px"
                    }} >
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Entsprechend Ihrer Auswahl wurden Ihnen folgende Grundbausteine zusammengestellt. Im nächsten Schritt können Sie Ihren Workshop personalisieren.</p>
        </div>
        </div>
  );
}

export default Grundbausteine;