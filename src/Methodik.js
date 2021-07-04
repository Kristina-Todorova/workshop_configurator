import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import "./Methodik.css"
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext, useEffect} from "react";
import GlobalDesignThinking from "./global/GlobalDesignThinking";
import GlobalDesignSprint from "./global/GlobalDesignSprint";
import GlobalLeanCanvas from "./global/GlobalFutureRetail";
import GlobalBusinessModel from "./global/GlobalFutureMobility";
import GlobalTechTalk from "./global/GlobalSustainability";



function Methodik() {
    let [designThinking,setDesignThinking] = useContext(GlobalDesignThinking)
    let [designSprint,setDesignSprint] = useContext(GlobalDesignSprint)
    let [leanCanvas,setLeanCanvas] = useContext(GlobalLeanCanvas)
    let [businessModel,setBusinessModel] = useContext(GlobalBusinessModel)
    let [techTalk,setTechTalk] = useContext(GlobalTechTalk)


    function chooseDesignThinking() {
        setDesignThinking(prevState => !prevState)
    }

    function chooseDesignSprint() {
        setDesignSprint(prevState => !prevState)
    }

      function chooseLeanCanvas() {
        setLeanCanvas(prevState => !prevState)
    }

      function chooseBusinessModel() {
        setBusinessModel(prevState => !prevState)
    }

      function chooseTechTalk() {
        setTechTalk(prevState => !prevState)
    }


  return (
        <div>
            <Kategorien

            designThinking={designThinking}
            designSprint={designSprint}
            leanCanvas={leanCanvas}
            businessModel={businessModel}
            techTalk={techTalk}/>


            <Link to="/Allgemein" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>
            <div className="square001" onClick={chooseDesignThinking} >
                <p className="title">Design Thinking</p>
                <p className="textsquare"> Diese Technik hilft beim Lösen von Problemen und der Entwicklung neuer Ideen. Lernen Sie wie man Probleme nutzerentriert lösen kann.</p>
            </div>

            <div className="square002" onClick={chooseDesignSprint} >
                <p className="title">Design Sprint</p>
                <p className="textsquare">Führen Sie unter unserer fachkundigen Anleitung einen Design Sprint durch, der außergewöhnlihce Ergebnisse zu Tage fördern wird.</p>
            </div>

            <div className="square003" onClick={chooseLeanCanvas} >
                <p className="title">Lean Canvas</p>
                <p className="textsquare"> Mithilfe des Lean Canvas kann Ihr Geschäftsmodell auf das Wesentliche reduziert werden, um neue Ideen zu generieren.</p>
            </div>

            <div className="square004" onClick={chooseBusinessModel} >
                <p className="title">Business Model</p>
                <p className="textsquare"> Wir leiten Ihr Team durch die Erstellung oder Optimierung Ihres Business Modells.</p>
            </div>

            <div className="square005" onClick={chooseTechTalk} >
                <p className="title">Tech Talk</p>
                <p className="textsquare"> Einer unserer Experten bringt Sie im ausgewählten Fachbereich, in kürzester Zeit, auf den neuesten Stand und inspiriert das ganze Team</p>
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
                <p>Bitte wählen Sie die gewünschte Methodik für Ihren Workshop aus. </p>

            </div>
        </div>
  );
}

export default Methodik;