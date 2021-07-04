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
