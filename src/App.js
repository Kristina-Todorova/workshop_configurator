import React, { Component } from 'react';
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


function App() {

  return (
        <main>
            <Switch>
                <Route path="/" component={Startseite} exact />
                <Route path="/Ziel" component={Ziel} />
                <Route path="/Fokus" component={Fokus} exact />
                <Route path="/Methodik" component={Methodik} exact />
                <Route path="/Allgemein" component={Allgemein} />
                <Route path="/Umfang" component={Umfang} />
                <Route path="/Grundbausteine" component={Grundbausteine} />
                <Route path="/Konfiguration" component={Konfiguration} />
                <Route path="/Zusatzleistungen" component={Zusatzleistungen} />
                <Route path="/Zusammenfassung" component={Zusammenfassung} />
                <Route path="/Kontaktformular" component={Kontaktformular} />
            </Switch>
        </main>
  );
}

export default App;
