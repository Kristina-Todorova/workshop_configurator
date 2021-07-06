import './Allgemein.css';
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext, useEffect} from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import GlobalSprache from "./global/GlobalSprache";
import GlobalOrt from "./global/GlobalOrt";
import GlobalTeilnehmer from "./global/GlobalTeilnehmer";
import GlobalZeitraum from "./global/GlobalZeitraum";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


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

             <div className="square00001" onClick={chooseSprache} >
                 <p className="title">Sprache</p>
                 <p className="auswahlmoeglichkeit">Englisch </p>
                 </div>


             <div className="square00002" onClick={chooseOrt}>
                <p className='title'>Ort</p>
                </div>

             <div className="square00003" onClick={chooseZeitraum}>
                <p className='title'>Zeitraum</p>
                </div>
             <div className="square00004" onClick={chooseTeilnehmer}>
                <p className='title'>Teilnehmer</p>
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
                    marginTop:"-615px"
                    }} >
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Bitte geben Sie uns allgemeine Informationen zu Ihrem Workshop.</p>
        </div>
        </div>
  );
}

export default Allgemein;