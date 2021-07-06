import './Umfang.css';
import React, {useContext} from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import GlobalPaketS from "./global/GlobalPaketS";
import GlobalPaketM  from "./global/GlobalPaketM";
import GlobalPaketL from "./global/GlobalPaketL";
import coins from "./coins.png";

function Umfang() {
    let [paketS,setPaketS] = useContext(GlobalPaketS)
    let [paketM,setPaketM] = useContext(GlobalPaketM)
    let [paketL,setPaketL] = useContext(GlobalPaketL)

    const scolor = paketS===true ? "#00ADEF" : "lightgray"
    const mcolor = paketM===true ? "#00ADEF" : "lightgray"
    const lpaketcolor = paketL===true ? "#00ADEF" : "lightgray"

    function choosePaketS() {
        setPaketS(prevState => !prevState)
        setPaketM(false)
        setPaketL(false)
    }

    function choosePaketM() {
        setPaketM(prevState => !prevState)
        setPaketS(false)
        setPaketL(false)
    }

    function choosePaketL() {
        setPaketL(prevState => !prevState)
        setPaketS(false)
        setPaketM(false)
    }

  return (
        <div>
            <Kategorien
            paketS={paketS}
            paketM={paketM}
            paketL={paketL}/>

             <Link to="/Grundbausteine" style={{ textDecoration: 'none', color:'black' }}>
             <Weiter/>
             </Link>
             <div className="sqr01" onClick={choosePaketS} style={{backgroundColor:scolor}}>
                 <p className="title">Paket S </p>
                <p className="textsquare">Mit diesem Paket haben Sie die Möglichkeit einen ersten kostenlosen Überblick zu Ihrem gewünschten Thema zu erhalten.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    {"\n"} - Kostenlose Einführung
                     <br></br>
                    {"\n"} - Elemente: Keynote, Fragerunde
                     <br></br>
                    {"\n"} - Dauer: 1 Stunde</p>
                   <img src={coins} alt="icon" width="30px" height="30px" style={{marginLeft:"10%", marginTop:"19%"}}/>
                     <p className="minirect">ab 0 EUR</p>
             </div>

            <div className="sqr02" onClick={choosePaketM} style={{backgroundColor:mcolor}}>
                 <p className="title">Paket M</p>
                <p className="textsquare">Mit diesem Paket erhalten Sie einen grundlegenden Workshop zu Ihrem gewünschten Thema. Unsere Experten unterstützen Sie dabei druch die individuelle Vermittlung von Wissen.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {"\n"} - Vier themenbezogene Grundbausteine
                    <br></br>
                    {"\n"} - Hinzubuchen von Zusatzbausteinen und -leistungen möglich
                    <br></br>
                    {"\n"} - Dauer: 5 Stunden</p>
                <div className="minirect1">
                     <img src={coins} alt="icon" width="30px" height="30px" style={{ marginLeft:"5%",marginTop:"2%"}}/>
                     <p className="textt">ab 1000 EUR </p>
                 </div>
                <div className="minirect3">
                     <p className="texttt"> Empfohlen </p>
                 </div>
            </div>

            <div className="sqr03" onClick={choosePaketL} style={{backgroundColor:lpaketcolor}}>
                 <p className="title">Paket L</p>
                <p className="textsquare">Dieses Paket enthält einen umfangreichen Workshop zu Ihrem gewp´ünschten Thema. Unsere Experten unterstützen Sie durch die Vermittlung von Wissen bei der Erarbeitung Ihrer Inhalte und geben Ihnen Handlungsempfehlungen.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {"\n"} - Sechs themenbezogene Grundbausteine
                    <br></br>
                    {"\n"} - Hinzubuchen von Zusatzbausteinen und -leistungen möglich
                    <br></br>
                    {"\n"} - Dauer: 14 Stunde (2 Werktage)</p>
                     <img src={coins} alt="icon" width="30px" height="30px" style={{marginRight:"50%", marginTop:"-4%", marginLeft:"10%"}}/>
                    <p className="minirect2">ab 3000 EUR </p>
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
                    marginTop:"-520px"
                    }} >
                <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                <p>Bitte wählen Sie die gewünschte Paketgröße aus. Das ausgewählte Paket kann im Folgenden noch personalisiert werden.</p>
            </div>

        </div>
  );
}

export default Umfang;