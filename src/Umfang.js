import React, {useContext} from "react";
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import GlobalPaketS from "./global/GlobalPaketS";
import GlobalPaketM  from "./global/GlobalPaketM";
import GlobalPaketL from "./global/GlobalPaketM";

function Umfang() {
    let [paketS,setPaketS] = useContext(GlobalPaketS)
    let [paketM,setPaketM] = useContext(GlobalPaketM)
    let [PaketL,setPaketL] = useContext(GlobalPaketL)

    function choosePaketS() {
        setPaketS(prevState => !prevState)
    }

    function choosePaketM() {
        setPaketM(prevState => !prevState)
    }

    function choosePaketL() {
        setPaketL(GlobalState => !GlobalState)
    }

  return (
        <div>
            <Kategorien

            paketS={paketS}
            paketM={paketM}
            paketL={PaketL}/>

             <Link to="/Grundbausteine" style={{ textDecoration: 'none', color:'black' }}>
             <Weiter/>
             </Link>
             <div className="sqr01" onClick={choosePaketS}>
                 <p className="title">Paket S</p>
                <p className="textsquare">Mit diesem Paket haben Sie die Möglichkeit einen ersten kostenlosen Überblick zu Ihrem gewünschten Thema zu erhalten.
                    {"\n"} - Kostenlose Einführung
                    {"\n"} - Elemente: Keynote, Fragerunde
                    {"\n"} - Dauer: 1 Stunde</p>
            </div>

            <div className="sqr02" onClick={choosePaketM}>
                 <p className="title">Paket M</p>
                <p className="textsquare">Mit diesem Paket erhalten Sie einen grundlegenden Workshop zu Ihrem gewünschten Thema. Unsere Experten unterstützen Sie dabei druch die individuelle Vermittlung von Wissen.
                    {"\n"} - Vier themenbezogene Grundbausteine
                    {"\n"} - Hinzubuchen von Zusatzbausteinen und -leistungen möglich
                    {"\n"} - Dauer: 5 Stunde</p>
            </div>

            <div className="sqr03" onClick={choosePaketL}>
                 <p className="title">Paket L</p>
                <p className="textsquare">Dieses Paket enthält einen umfangreichen Workshop zu Ihrem gewp´ünschten Thema. Unsere Experten unterstützen Sie durch die Vermittlung von Wissen bei der Erarbeitung Ihrer Inhalte und geben Ihnen Handlungsempfehlungen.
                    {"\n"} - Sechs themenbezogene Grundbausteine
                    {"\n"} - Hinzubuchen von Zusatzbausteinen und -leistungen möglich
                    {"\n"} - Dauer: 14 Stunde (2 Werktage)</p>
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
           <p>Bitte wählen Sie die gewünschte Paketgröße aus. Das ausgewählte Paket kann im Folgenden noch personalisiert werden.</p>
        </div>
        </div>
  );
}

export default Umfang;