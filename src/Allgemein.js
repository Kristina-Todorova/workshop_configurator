import './Allgemein.css';
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext} from "react";
import GlobalSprache from "./global/GlobalSprache";
import GlobalOrt from "./global/GlobalOrt";
import GlobalTeilnehmer from "./global/GlobalTeilnehmer";
import GlobalZeitraum from "./global/GlobalZeitraum";
import {TextField} from "@material-ui/core";


function Allgemein() {

    let [sprache, setSprache ] = useContext(GlobalSprache)
    let [ort,setOrt] = useContext(GlobalOrt)
    let [teilnehmer,setTeilnehmer] = useContext(GlobalTeilnehmer)
    let [zeitraum,setZeitraum] = useContext(GlobalZeitraum)

    function chooseSprache() {
        setSprache(prevState => !prevState)
    }

    function chooseOrt() {
        setOrt(prevState => !prevState)
    }

    function chooseTeilnehmer() {
        setTeilnehmer(GlobalState => !GlobalState)
    }
    function chooseZeitraum() {
        setZeitraum(GlobalState => !GlobalState)
    }

  return (
        <div>

            <Kategorien

            sprache={sprache}
            ort={ort}
            teilnehmer={teilnehmer}
            zeitraum={zeitraum}/>

            <Link to="/Umfang" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>

             <div className="squaresprache" onClick={chooseSprache} >
                 <p className="allgemeintitle">Sprache</p>

                 <div className="sprachen">
                 <p>Deutsch</p>
                 </div>

                 <div className="sprachen1">
                 <p>Englisch</p>
                 </div>

                 <div className="sprachen2">
                 <p>Andere</p>
                 </div>

                 </div>


             <div className="squareort" onClick={chooseOrt}>
                <p className='allgemeintitle'>Ort</p>

                 <div className="sprachen">
                 <p>Online</p>
                 </div>

                 <div className="sprachen1">
                 <p>Präsenz</p>
                 </div>

                 <div className="sprachen2">
                 <p>Andere</p>
                 </div>

                </div>

             <div className="squarezeitraum" onClick={chooseZeitraum}>
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

             <div className="squareteilnehmer" onClick={chooseTeilnehmer}>
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