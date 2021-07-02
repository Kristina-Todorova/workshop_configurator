import './App.css';
import Header from './Header.js';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Cookies from "./Cookies";


function Startseite() {

  return (

    <div className="App">
        <Header/>
        <Cookies/>
        <div className="rectangle">

            <p className="stripe">
            _________
        </p>

        <p className="layer1">
            Herzlich Willkommen
        </p>


        <p className={"layer2"}>im Mercedes-Benz Workshop Konfigurator</p>

        </div>

        <Link to="/Ziel" style={{ textDecoration: 'none', color:'black' }}>
        <Button
                variant="contained"
                style={{
                    width: "140px",
                    height: "50px",
                    backgroundColor: "#00ADEF",
                    fontFamily: "PT Serif",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    marginTop: "-610px",
                    marginLeft: "-330px"
                }}>
                Starten
            </Button>
        </Link>

        <div className="info">

        <p className="layer3">
            _____________
            <br/>
            Über den Konfigurator
        </p>

        <p className="layer4">Zielgerichtete Kompetenzentwicklung und -weiterbildung bilden den Grundstein für einen nachhaltigen Geschäftserfolg. Unser Ziel ist es daher, Kompetenzen in verschiedenen Fachbereichen zu vermitteln und bei der wirkungsvollen Umsetzung in der täglichen Praxis zu unterstützen.

            Durch ein breites Themenspektrum und erfahrene Trainer, Consultants und Coaches können wir Ihnen praxisnahe, topaktuelle Workshops bieten. </p>
            <p className="layer5">Mithilfe der im Workshop neu erworbenen Kenntnisse können Sie Ihr Unternehmen für die Zukunft rüsten und Prozesse und Strategien weiter verbessern. Zudem haben Sie die Möglichkeit sich konstant weiterzubilden und bestehendes Wissen effektiv aufzufrischen.

Der Mercedes-Benz Consulting Workshop Konfigurator unterstützt Sie dabei in der Buchung Ihres Workshops um diesen Ihren individuellen Bedürfnissen nach zu gestalten. Damit wollen wir den größtmöglichen Erfolg Ihres Workshops erzielen.

</p>

        </div>
    </div>
  );
}

export default Startseite;
