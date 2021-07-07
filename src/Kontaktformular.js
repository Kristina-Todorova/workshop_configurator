import React, {useContext} from "react";
import Kategorien from "./Kategorien";
import "./Kontaktformular.css"
import {TextField} from "@material-ui/core";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
import info_Icon from "./info_Icon.png";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GlobalInformative from "./global/GlobalInformative";
import GlobalAuftrag from "./global/GlobalAuftrag";
import GlobalErgebnis from "./global/GlobalErgebnis";
import GlobalFort from "./global/GlobalFort";
import GlobalDeepDive from "./global/GlobalDeepDive";
import GlobalGruppenarbeit from "./global/GlobalGruppenarbeit";
import GlobalBrainstorming from "./global/GlobalBrainstorming";
import GlobalState from "./global/GlobalState";
import GlobalCatering from "./global/GlobalCatering";
import GlobalTechnik from "./global/GlobalTechnik";
import GlobalDigitalShift from "./global/GlobalDigitalShift";
import GlobalFutureSales from "./global/GlobalFutureSales";
import GlobalFutureRetail from "./global/GlobalFutureRetail";
import GlobalFutureMobility from "./global/GlobalFutureMobility";
import GlobalSustainability from "./global/GlobalSustainability";
import GlobalAfterSales from "./global/GlobalAfterSales";
import GlobalDesignThinking from "./global/GlobalDesignThinking";
import GlobalDesignSprint from "./global/GlobalDesignSprint";
import GlobalLeanCanvas from "./global/GlobalLeanCanvas";
import GlobalBusinessModel from "./global/GlobalBusinessModel";
import GlobalTechTalk from "./global/GlobalTechTalk";
import GlobalDeutsch from "./global/GlobalDeutsch";
import GlobalEnglisch from "./global/GlobalEnglisch";
import GlobalAndereSprache from "./global/GlobalAndereSprache";
import GlobalPraesenz from "./global/GlobalPraesenz";
import GlobalOnline from "./global/GlobalOnline";
import GlobalAndereOrt from "./global/GlobalAndereOrt";
import GlobalTeilnehmer from "./global/GlobalTeilnehmer";
import GlobalVon from "./global/GlobalVon";
import GlobalBis from "./global/GlobalBis";
import GlobalPaketS from "./global/GlobalPaketS";
import GlobalPaketM from "./global/GlobalPaketM";
import GlobalPaketL from "./global/GlobalPaketL";
import GlobalPrice from "./global/GlobalPrice";
import GlobalTime from "./global/GlobalTime";


function Kontaktformular() {
  const [state, setState] = React.useState({
    checkedB: false
  });

const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

        let [informative,setInformative] = useContext(GlobalInformative)
    let [auftrag,setAuftrag] = useContext(GlobalAuftrag)
    let [ergebnis,setErgebnis] = useContext(GlobalErgebnis)
    let [fort,setFort] = useContext(GlobalFort)

    const infocolor = informative===true ? "#00ADEF" : "lightgray"
    const ergebniscolor = auftrag===true ? "#00ADEF" : "lightgray"
    const auftragcolor = ergebnis===true ? "#00ADEF" : "lightgray"
    const fortcolor = fort===true ? "#00ADEF" : "lightgray"

    let [deepdive, setDeepdive] = useContext(GlobalDeepDive)
    let [gruppenarbeit, setGruppenarbeit] = useContext(GlobalGruppenarbeit)
    let [brainstorming, setBrainstorming] = useContext(GlobalBrainstorming)

    let [movie,setMovie] = useContext(GlobalState)
    let [catering,setCatering] = useContext(GlobalCatering)
    let [technik,setTechnik] = useContext(GlobalTechnik)

    let [digitalShift,setDigitalShift] = useContext(GlobalDigitalShift)
    let [futureSales,setFutureSales] = useContext(GlobalFutureSales)
    let [futureRetail,setFutureRetail] = useContext(GlobalFutureRetail)
    let [futureMobility,setFutureMobility] = useContext(GlobalFutureMobility)
    let [sustainability,setSustainability] = useContext(GlobalSustainability)
    let [afterSales,setAfterSales] = useContext(GlobalAfterSales)

    let [designthinking,setDesignThinking] = useContext(GlobalDesignThinking)
    let [designsprint,setDesignSprint] = useContext(GlobalDesignSprint)
    let [leancanvas,setLeanCanvas] = useContext(GlobalLeanCanvas)
    let [businessmodel,setBusinessModel] = useContext(GlobalBusinessModel)
    let [techtalk,setTechTalk] = useContext(GlobalTechTalk)

    let [deutsch,setDeutsch] = useContext(GlobalDeutsch);
    let [englisch,setEnglisch] = useContext(GlobalEnglisch);
    let [anderesprache,setAndereSprache] = useContext(GlobalAndereSprache);

    let [praesenz,setPraesenz] = useContext(GlobalPraesenz);
    let [online,setOnline] = useContext(GlobalOnline);
    let [andereort,setAndereOrt] = useContext(GlobalAndereOrt);

    let [teilnehmer,setTeilnehmer] = useContext(GlobalTeilnehmer);
    let [von,setVon] = useContext(GlobalVon);
    let [bis,setBis] = useContext(GlobalBis);

    let [paketS,setPaketS] = useContext(GlobalPaketS)
    let [paketM,setPaketM] = useContext(GlobalPaketM)
    let [paketL,setPaketL] = useContext(GlobalPaketL)
    let [pricecounter, setPriceCounter] = useContext(GlobalPrice)
    let [timecounter, setTimeCounter] = useContext(GlobalTime)

    const [visible, setVisible] = React.useState(false);



  return (
        <div>
            <Kategorien
            informative={informative}
            auftrag={auftrag}
            ergebnis={ergebnis}
            fort={fort}

            movie={movie}
            catering={catering}
            technik={technik}

            deepdive={deepdive}
            gruppenarbeit={gruppenarbeit}
            brainstorming={brainstorming}

            designthinking={designthinking}
            designsprint={designsprint}
            leancanvas={leancanvas}
            businessmodel={businessmodel}
            techtalk={techtalk}

            digitalShift={digitalShift}
            futureSales={futureSales}
            futureRetail={futureRetail}
            futureMobility={futureMobility}
            sustainability={sustainability}
            afterSales={afterSales}

            deutsch={deutsch}
            englisch={englisch}
            anderesprache={anderesprache}
            praesenz={praesenz}
            online={online}
            andereort={andereort}
            teilnehmer={teilnehmer}
            von={von}
            bis={bis}

            paketS={paketS}
            paketM={paketM}
            paketL={paketL}
            pricecounter={pricecounter}
            timecounter={timecounter}
            />
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

                <div className="datenschutz">
                <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="red"
                            required="true"
                          />
                        }
                        label="Ich habe die Datenschutzerklärung gelesen und akzeptiere die Verarbeitung meiner Daten."
                      />
                      </div>
            </form>

                          <Modal />


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
                    marginTop:"-525px"
                    }}>
                    <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
                   <p>Bitte geben Sie nachfolgend Ihre Kontaktdaten an. </p>


            </div>
        </div>
  );
}

export default Kontaktformular;