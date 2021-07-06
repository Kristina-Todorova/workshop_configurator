import './Allgemein.css';
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext} from "react";
import GlobalTeilnehmer from "./global/GlobalTeilnehmer";
import GlobalZeitraum from "./global/GlobalZeitraum";
import {TextField} from "@material-ui/core";

import GlobalDeutsch from "./global/GlobalDeutsch";
import GlobalEnglisch from "./global/GlobalEnglisch";
import GlobalAndereSprache from "./global/GlobalAndereSprache";

import GlobalPraesenz from "./global/GlobalPraesenz";
import GlobalOnline from "./global/GlobalOnline";
import GlobalAndereOrt from "./global/GlobalAndereOrt";


function Allgemein() {


    let [deutsch,setDeutsch] = useContext(GlobalDeutsch);
    let [englisch,setEnglisch] = useContext(GlobalEnglisch);
    let [anderesprache,setAndereSprache] = useContext(GlobalAndereSprache);

    let [praesenz,setPraesenz] = useContext(GlobalPraesenz);
    let [online,setOnline] = useContext(GlobalOnline);
    let [andereort,setAndereOrt] = useContext(GlobalAndereOrt);

    const deutschcolor = deutsch===true ? "#00ADEF" : "darkgrey"
    const englischcolor = englisch===true ? "#00ADEF" : "darkgrey"
    const andspcolor = anderesprache===true ? "#00ADEF" : "darkgrey"

    const onlinecolor = online===true ? "#00ADEF" : "darkgrey"
    const prascolor = praesenz===true ? "#00ADEF" : "darkgrey"
    const andortcolor = andereort===true ? "#00ADEF" : "darkgrey"


    function chooseDeutsch() {
        setDeutsch(prevState => !prevState)
        setEnglisch(false)
        setAndereSprache(false)
    }

    function chooseEnglisch() {
        setEnglisch(prevState => !prevState)
        setDeutsch(false)
        setAndereSprache(false)
    }

    function chooseAndereSprache() {
        setAndereSprache(prevState => !prevState)
        setEnglisch(false)
        setDeutsch(false)
    }

    function choosePraesenz() {
        setPraesenz(prevState => !prevState)
        setOnline(false)
        setAndereOrt(false)
    }

    function chooseOnline() {
        setOnline(prevState => !prevState)
        setPraesenz(false)
        setAndereOrt(false)
    }

    function chooseAndereOrt() {
        setAndereOrt(prevState => !prevState)
        setOnline(false)
        setPraesenz(false)
    }


  return (
        <div>

            <Kategorien
            deutsch={deutsch}
            englisch={englisch}
            anderesprache={anderesprache}

            praesenz={praesenz}
            online={online}
            andereort={andereort}
            />

            <Link to="/Umfang" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>

             <div className="squaresprache">
                 <p className="allgemeintitle">Sprache</p>

                 <div className="sprachen" onClick={chooseDeutsch} style={{backgroundColor:deutschcolor}}>
                 <p>Deutsch</p>
                 </div>

                 <div className="sprachen1" onClick={chooseEnglisch} style={{backgroundColor:englischcolor}}>
                 <p>Englisch</p>
                 </div>

                 <div className="sprachen2" onClick={chooseAndereSprache} style={{backgroundColor:andspcolor}}>
                 <p>Andere</p>
                 </div>

                 </div>


             <div className="squareort">
                <p className='allgemeintitle'>Ort</p>

                 <div className="sprachen" onClick={chooseOnline} style={{backgroundColor:onlinecolor}}>
                 <p>Online</p>
                 </div>

                 <div className="sprachen1" onClick={choosePraesenz} style={{backgroundColor:prascolor}}>
                 <p>Präsenz</p>
                 </div>

                 <div className="sprachen2" onClick={chooseAndereOrt} style={{backgroundColor:andortcolor}}>
                 <p>Andere</p>
                 </div>

                </div>

             <div className="squarezeitraum">
                <p className='allgemeintitle'>Zeitraum</p>

                 <form>
                  <TextField
                    id="date"
                    label="von"
                    type="date"
                    defaultValue="2021-07-08"
                    InputLabelProps={{
                      shrink: true,
                    }}

                     style={{
                        backgroundColor:"DDDDDD",
                        marginLeft:"170px",
                        marginTop:"-55px",

                    }}
                  />
                </form>

                 <form>
                  <TextField
                    id="date"
                    label="bis"
                    type="date"
                    defaultValue="2021-07-08"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{
                        backgroundColor:"DDDDDD",
                        marginLeft:"505px",
                        marginTop:"-68px"

                    }}
                  />
                </form>

                </div>

             <div className="squareteilnehmer">
                <p className='allgemeintitle'>Teilnehmer</p>
                 <form>
                 <TextField id="outlined-basic" label="Anzahl" variant="outlined" required="true" size="small"
                            style={{marginLeft:"170px",  marginTop:"-50px", backgroundColor:"white", width:"20%" }}/>
                </form>

                </div>

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
                    marginTop:"-365px"
                    }} >
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Bitte geben Sie uns allgemeine Informationen zu Ihrem Workshop.</p>
        </div>
        </div>
  );
}

export default Allgemein;