import './Kategorien.css';
import './Ziel.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Button from '@material-ui/core/Button';

function Kategorien() {
  return (

    <div>
        <Header/>
        <div>
            <p className="stripee">
            _________
        </p>
        <p className="configurator">
            Workshop Konfigurator
        </p>
        </div>

        <div className="rectangles">
            &nbsp;&nbsp;Ziel des Workshops
        </div>

        <div className="rectangles">
            &nbsp;&nbsp;Fokusthema
        </div>

        <div className="rectangles">
            &nbsp;&nbsp;Methodik
        </div>

        <div className="rectangles">
            &nbsp;&nbsp;Allgemeine Informationen
        </div>

        <div className="rectangles">
            &nbsp;&nbsp;Umfang
        </div>

        <div className="rectangles">
            &nbsp;&nbsp;Grundbausteine
        </div>

        <div className="rectangles">
            &nbsp;&nbsp;Konfiguration
        </div>

        <div className="rectangles">
            &nbsp;&nbsp;Zusatzleistungen
        </div>

        <div className="rectangles">
            &nbsp;&nbsp;Zusammenfassung
        </div>

        <div className="infolabel">
           <p>Bitte wählen Sie die gewünschte Paketgröße aus.</p>
        </div>

        <div className="einkaufswagen">
            <p>Ihr Warenkorb ist leer.</p>
        </div>
        <Button variant="contained"
                style={{
                    width: "140px",
                    height: "50px",
                    backgroundColor: "#00ADEF",
                    fontFamily: "PT Serif",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    marginLeft: "1255px",
                    marginTop: "40px"
                }}>
            Weiter
        </Button>

        <Footer/>

    </div>
  );
}

export default Kategorien;
