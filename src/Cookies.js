import React from 'react';
import {Link} from "react-router-dom";
import AlertTitle from 'react-alert-template-basic';
import CookieConsent from "react-cookie-consent";
import { Alert } from 'reactstrap';

function Cookies() {

    return (

    <div className="cookie">
        <CookieConsent debug={true} buttonText="Einverstanden"
        style={{
        background: "white",
        color: "#00ADEF" }}
        buttonStyle={{
        background: "#00ADEF",
         color: "white",

        }}>
            <p style={{fontWeight:"bold"}}> Wir verwenden Cookies</p>
            <p style={{
           color: "black"
           }}> Wir verwenden Cookies, Tracking- und (Re-)Targeting-Technologien. </p>
           <p style={{
           color: "black"
           }}>Damit wollen wir unsere Webseiten nutzerfreundlicher gestalten und fortlaufend verbessern sowie Ihnen für Sie passende Angebote und Werbung anzeigen. Wenn Sie die Webseiten weiter nutzen, stimmen Sie dadurch der Verwendung von Cookies zu mit der Ausnahme von Cookies für Google-Marketing-Produkte.

             </p>
  <p style={{
   color: "black"
   }}> Google-Marketing-Produkte kommen nur zum Einsatz, wenn Sie auf „Einverstanden“ klicken.</p> </CookieConsent>
        </div>

    );
}

export default Cookies



