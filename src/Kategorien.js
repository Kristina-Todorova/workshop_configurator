import './Kategorien.css';
import './Ziel.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Button from '@material-ui/core/Button';
import info_Icon from './info_Icon.png';
import icon_shopping_bag from './icon_shopping_bag.png'
import {Link} from "react-router-dom";

function Kategorien() {

    function MouseOver(event) {
        event.target.style.background = '#00ADEF';
      }
      function MouseOut(event){
        event.target.style.background="";
      }

      function Click(event){
          event.target.style.background="red";
      }

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


        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut} >

         <Link to="/Ziel" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Ziel des Workshops
            </p>
         </Link>

        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Fokus" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Fokusthema
            </p>
            </Link>
        </div>


        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Methodik" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Methodik
            </p>
             </Link>
        </div>


        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
             <Link to="/Allgemein" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Allgemeine Informationen
            </p>
             </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Umfang" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Umfang
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Grundbausteine" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Grundbausteine
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Konfiguration" style={{ textDecoration: 'none' , color:"black"}}>
            <p>
            &nbsp;&nbsp;Konfiguration
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Zusatzleistungen" style={{ textDecoration: 'none', color:"black"}}>
            <p>
            &nbsp;&nbsp;Zusatzleistungen
            </p>
            </Link>
        </div>

        <div className="rectangles" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Link to="/Zusammenfassung" style={{ textDecoration: 'none', color:"black" }}>
            <p>
            &nbsp;&nbsp;Zusammenfassung
            </p>
            </Link>
        </div>

        <div className="infolabel">
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Bitte wählen Sie die gewünschte Paketgröße aus.</p>
        </div>

        <div className="einkaufswagen">
            <img src={icon_shopping_bag} alt="icon" width="45px" height="45px" style={{paddingLeft: "100px"}}/>
            <p className="leer">Ihr Warenkorb ist leer.</p>
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
