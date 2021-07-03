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


function App() {


    const [movie, setMovie] = useState(false);
    const [catering, setCatering] = useState(false);
    const [technik, setTechnik] = useState(false);


  return (
        <main>
             <GlobalTechnik.Provider value={[technik, setTechnik]}>
            <GlobalCatering.Provider value={[catering, setCatering]}>
            <GlobalState.Provider value={[movie, setMovie]}>

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
            </GlobalState.Provider>
            </GlobalCatering.Provider>
             </GlobalTechnik.Provider>
        </main>

  );
}

export default App;
