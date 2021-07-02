import React from "react";
import Kategorien from "./Kategorien";
import "./Kontaktformular.css"
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import info_Icon from "./info_Icon.png";

function Kontaktformular() {

  return (
        <div>
            <Kategorien/>
            <form className="form">

                <div className="anrede">
                <TextField id="outlined-basic" label="Anrede" variant="filled" required="true"/>
                </div>

                <div className="vorname">
                <TextField id="outlined-basic" label="Vorname" variant="filled" required="true" />
                </div>

                <div  className="nachname">
                    <TextField id="outlined-basic" label="Nachname" variant="filled" required="true" />
                </div>

                <div className="firma">
                <TextField id="outlined-basic" label="Firma" variant="filled" required="true"/>
                </div>

                <div className="standort">
                <TextField id="outlined-basic" label="Standort" variant="filled" required="true"/>
                </div>

                <div className="email">
                <TextField id="outlined-basic" label="EMail-Adresse" variant="filled" required="true"/>
                </div>

                <div className="tel">
                <TextField id="outlined-basic" label="Telefonnummer" variant="filled" required="true"/>
                </div>

            </form>

            <Button variant="contained"

                style={{
                    width: "140px",
                    height: "50px",
                    fontFamily: "PT Serif",
                    fontStyle: "normal",
                    backgroundColor:"lightgray",
                    fontWeight: "bold",
                    marginLeft: "1255px",
                    marginTop: "7px"
                }}>
            Absenden
        </Button>
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
                    marginTop:"-485px"
                    }}>
                    <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                   <p>Bitte geben Sie nachfolgend Ihre Kontaktdaten an. </p>
            </div>
        </div>
  );
}

export default Kontaktformular;