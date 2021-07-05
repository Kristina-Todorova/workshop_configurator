import React from 'react';
import CookieConsent from "react-cookie-consent";
import "./Cookies.scss"

function Cookies() {

    return (

    <div className="cookie">
        <CookieConsent debug={true} disableStyles buttonText="Einverstanden"
        location="none"
        cookieName="myAwesomeCookieName2"
        overlayClasses="overlayclass"

        style={{
        background: "white",
        alignItems: "left",
        color: "black" }}
        buttonStyle={{
        background: "#00ADEF",
        color: "white",

  }}> <b>Wir verwenden Cookies</b>
   <span style={{ fontSize: "15px" }}>
   <p style={{
   color: "black"
   }}> Wir verwenden Cookies, Tracking- und (Re-)Targeting-Technologien. </p>
   <p style={{
   color: "black"
   }}>Damit wollen wir unsere Webseiten nutzerfreundlicher gestalten und fortlaufend verbessern sowie Ihnen für Sie passende Angebote und Werbung anzeigen. Wenn Sie die Webseiten weiter nutzen, stimmen Sie dadurch der Verwendung von Cookies zu mit der Ausnahme von Cookies für Google-Marketing-Produkte.

 </p>
  <p style={{
   color: "black"
   }}> Google-Marketing-Produkte kommen nur zum Einsatz, wenn Sie auf „Einverstanden“ klicken.</p> </span></CookieConsent>
        </div>

    );
}

export default Cookies



