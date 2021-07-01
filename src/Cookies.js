import React from 'react';
import {Link} from "react-router-dom";
import AlertTitle from 'react-alert-template-basic';
import CookieConsent from "react-cookie-consent";
import { Alert } from 'reactstrap';

function Cookies() {

    return (

    <div className="cookie">
        <CookieConsent debug={true} buttonText="Einverstanden" >Wir verwenden Cookies</CookieConsent>
        </div>

    );
}

export default Cookies
