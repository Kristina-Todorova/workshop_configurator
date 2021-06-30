import './Kategorien.css';
import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import {Link} from "react-router-dom";

function Ziel() {
  return (

    <div>
        <Kategorien/>

        <Link to="/Fokus" style={{ textDecoration: 'none', color:'black' }}>
        <Weiter/>
        </Link>
        <div className="square1">
            <p className="title">Informative Sessions</p>
            <p className="textsquare"> SQUARE 1 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. </p>
        </div>

        <div className="square2">
            <p className="title">Ergebnisorientierte Sessions</p>
            <p className="textsquare">SQUARE 2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. </p>
        </div>

        <div className="square3">
            <p className="title">Auftragsklärung</p>
            <p className="textsquare">SQUARE 3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. </p>
        </div>

        <div className="square4">
            <p className="title">Informative Sessions</p>
            <p className="textsquare">SQUARE 4 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. </p>
        </div>
    </div>

  );
}

export default Ziel;
