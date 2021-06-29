import './App.css';
import Header from './Header.js';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Footer from "./Footer";


function Startseite() {

  return (

    <div className="App">
        <Header/>
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

        <p className="layer4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

            <p className="layer5">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse</p>

        </div>
    </div>
  );
}

export default Startseite;
