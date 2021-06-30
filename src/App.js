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
                <Route path="/Allgemein" component={Allgemein} exact />
                <Route path="/Umfang" component={Umfang} exact />
                <Route path="/Grundbausteine" component={Grundbausteine} exact />
                <Route path="/Konfiguration" component={Konfiguration} exact />
                <Route path="/Zusatzleistungen" component={Zusatzleistungen} exact />
                <Route path="/Zusammenfassung" component={Zusammenfassung} exact />
                <Route path="/Kontaktformular" component={Kontaktformular} exact />
            </Switch>
        </main>
  );
}

export default App;
