import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Startseite from "./Startseite";
import Ziel from "./Ziel";
import Fokus from "./Fokus";
import Methodik from "./Methodik";
import Allgemein from "./Allgemein";
import Umfang from "./Umfang";
import Grundbausteine from "./Grundbausteine";
import Konfiguration from "./Konfiguration";
import Zusatzleistungen from "./Zusatzleistungen";
import Zusammenfassung from "./Zusammenfassung";
import Kontaktformular from "./Kontaktformular";

import GlobalState from "./global/GlobalState";
import GlobalCatering from "./global/GlobalCatering";
import GlobalTechnik from "./global/GlobalTechnik";

import GlobalInformative from "./global/GlobalInformative";
import GlobalAuftrag from "./global/GlobalAuftrag";
import GlobalErgebnis from "./global/GlobalErgebnis";
import GlobalFort from "./global/GlobalFort";

import GlobalDeepDive from "./global/GlobalDeepDive";
import GlobalGruppenarbeit from "./global/GlobalGruppenarbeit"
import GlobalBrainstorming from "./global/GlobalBrainstorming";

import GlobalAfterSales from "./global/GlobalAfterSales";
import GlobalDigitalShift from "./global/GlobalDigitalShift";
import GlobalFutureSales from "./global/GlobalFutureSales";
import GlobalFutureRetail from "./global/GlobalFutureRetail";
import GlobalFutureMobility from "./global/GlobalFutureMobility";
import GlobalSustainability from "./global/GlobalSustainability";

import GlobalPaketS from "./global/GlobalPaketS";
import GlobalPaketM  from "./global/GlobalPaketM";
import GlobalPaketL from "./global/GlobalPaketL";

import GlobalPrice from "./global/GlobalPrice";
import GlobalTime from "./global/GlobalTime";

import GlobalDesignThinking from "./global/GlobalDesignThinking";
import GlobalDesignSprint from "./global/GlobalDesignSprint";
import GlobalLeanCanvas from "./global/GlobalLeanCanvas";
import GlobalBusinessModel from "./global/GlobalBusinessModel";
import GlobalTechTalk from "./global/GlobalTechTalk";

function App() {

    const [informative, setInformative] = useState(false);
    const [auftrag, setAuftrag] = useState(false);
    const [ergebnis, setErgebnis] = useState(false);
    const [fort, setFort] = useState(false);

    const [movie, setMovie] = useState(false);
    const [catering, setCatering] = useState(false);
    const [technik, setTechnik] = useState(false);

    const [brainstorming, setBrainstorming] = useState(false);
    const [deepdive,setDeepdive] = useState(false);
    const [gruppenarbeit, setGruppenarbeit] = useState (false);

    const [digitalShift, setDigitalShift] = useState(false);
    const [futureSales,setFutureSales] = useState(false);
    const [futureRetail,setFutureRetail] = useState(false);
    const [futureMobility,setFutureMobility] = useState(false);
    const [sustainability,setSustainability] = useState(false);
    const [afterSales,setAfterSales] = useState(false);

    const [paketS, setPaketS] = useState(false);
    const [paketM,setPaketM] = useState(false);
    const [paketL,setPaketL] = useState (false);

    const [pricecounter, setPriceCounter] = useState(0);
    const [timecounter, setTimeCounter] = useState(0);

    const [designThinking, setDesignThinking] = useState(false);
    const [designSprint, setDesignSprint] = useState(false);
    const [leanCanvas, setLeanCanvas] = useState(false);
    const [businessModel, setBusinessModel] = useState(false);
    const [techTalk, setTechTalk] = useState(false);

  return (
        <main>

            <GlobalTechnik.Provider value={[technik, setTechnik]}>
            <GlobalCatering.Provider value={[catering, setCatering]}>
            <GlobalState.Provider value={[movie, setMovie]}>

            <GlobalInformative.Provider value={[informative, setInformative]}>
            <GlobalAuftrag.Provider value={[auftrag,setAuftrag]}>
            <GlobalErgebnis.Provider value={[ergebnis, setErgebnis]}>
            <GlobalFort.Provider value={[fort,setFort]}>

            <GlobalBrainstorming.Provider value={[brainstorming, setBrainstorming]}>
            <GlobalDeepDive.Provider value={[deepdive, setDeepdive]}>
            <GlobalGruppenarbeit.Provider value={[gruppenarbeit, setGruppenarbeit]}>

            <GlobalSustainability.Provider value={[sustainability,setSustainability]}>
            <GlobalFutureMobility.Provider value={[futureMobility,setFutureMobility]}>
            <GlobalFutureRetail.Provider value={[futureRetail,setFutureRetail]}>
            <GlobalFutureSales.Provider value={[futureSales,setFutureSales]}>
            <GlobalDigitalShift.Provider value={[digitalShift,setDigitalShift]}>
            <GlobalAfterSales.Provider value={[afterSales,setAfterSales]}>

            <GlobalPaketS.Provider value={[paketS, setPaketS]}>
            <GlobalPaketM.Provider value={[paketM, setPaketM]}>
            <GlobalPaketL.Provider value={[paketL, setPaketL]}>

            <GlobalPrice.Provider value={[pricecounter, setPriceCounter]}>
            <GlobalTime.Provider value={[timecounter,setTimeCounter]}>

                <GlobalDesignThinking.Provider value={[designThinking, setDesignThinking]}>
                <GlobalDesignSprint.Provider value={[designSprint, setDesignSprint]}>
                <GlobalLeanCanvas.Provider value={[leanCanvas, setLeanCanvas]}>
                <GlobalBusinessModel.Provider value={[businessModel, setBusinessModel]}>
                <GlobalTechTalk.Provider value={[techTalk, setTechTalk]}>

                <Switch>
                    <Route exact path="/">
                        <Startseite/>
                    </Route>

                    <Route exact path="/Ziel">
                        <Ziel/>
                    </Route>

                    <Route exact path="/Fokus">
                        <Fokus/>
                    </Route>

                    <Route exact path="/Methodik">
                        <Methodik/>
                    </Route>

                    <Route exact path="/Allgemein">
                        <Allgemein/>
                    </Route>

                    <Route exact path="/Umfang">
                        <Umfang/>
                    </Route>

                    <Route exact path="/Grundbausteine">
                        <Grundbausteine/>
                    </Route>

                    <Route exact path="/Konfiguration">
                        <Konfiguration/>
                    </Route>

                    <Route exact path="/Zusatzleistungen">
                        <Zusatzleistungen/>
                    </Route>

                    <Route exact path="/Zusammenfassung">
                        <Zusammenfassung/>
                    </Route>

                    <Route exact path="/Kontaktformular">
                        <Kontaktformular/>
                    </Route>

                </Switch>

            </GlobalTechTalk.Provider>
            </GlobalBusinessModel.Provider>
            </GlobalLeanCanvas.Provider>
            </GlobalDesignSprint.Provider>
            </GlobalDesignThinking.Provider>

            </GlobalTime.Provider>
            </GlobalPrice.Provider>
            </GlobalPaketL.Provider>
            </GlobalPaketM.Provider>
            </GlobalPaketS.Provider>

            </GlobalAfterSales.Provider>
            </GlobalDigitalShift.Provider>
            </GlobalFutureSales.Provider>
            </GlobalFutureRetail.Provider>
            </GlobalFutureMobility.Provider>
            </GlobalSustainability.Provider>

            </GlobalGruppenarbeit.Provider>
            </GlobalDeepDive.Provider>
            </GlobalBrainstorming.Provider>

            </GlobalFort.Provider>
            </GlobalErgebnis.Provider>
            </GlobalAuftrag.Provider>
            </GlobalInformative.Provider>

            </GlobalState.Provider>
            </GlobalCatering.Provider>
            </GlobalTechnik.Provider>




        </main>

  );
}

export default App;
