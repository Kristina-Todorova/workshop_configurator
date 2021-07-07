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

  }}> <h2>Wir verwenden Cookies</h2>
   <span style={{ fontSize: "15px" }}>
   <p style={{
   color: "black"
   }}> Wir verwenden Cookies, Tracking- und (Re-)Targeting-Technologien. </p>
   <p style={{
   color: "black"
   }}>

       Damit wollen wir unsere Webseite nutzerfreundlicher gestalten und fortlaufend verbessern sowie Ihnen für Sie passende Angebote und Werbung anzeigen. Wenn Sie die Webseite weiter nutzen, stimmen Sie dadurch der Verwendung von Cookies zu mit der Ausnahme von Cookies für Google-Marketing-Produkte.
       <br></br>
       <br></br><br></br>
       Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren. Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im Rahmen Ihrer Nutzung der Dienste gesammelt haben.
 </p>
  <p style={{
   color: "black"
   }}> Google-Marketing-Produkte kommen nur zum Einsatz, wenn Sie auf „Einverstanden“ klicken.</p> </span></CookieConsent>
        </div>

    );
}

export default Cookies



