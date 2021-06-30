import React from "react";
import Kategorien from "./Kategorien";
import "./Kontaktformular.css"
import {TextField} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
        </div>
  );
}

export default Kontaktformular;