import React from "react";
import icon_shopping_bag from "./icon_shopping_bag.png";
import "./Einkaufswagen.css";
import zeit from "./zeit.png";
import coins from "./coins.png";

function Einkaufswagen(props) {

    const ziel = props.ziel;
    const fokus = props.fokus;
    const methodik = props.methodik;
    const allgemein = props.allgemein;
    const umfang = props.umfang;
    const grundbausteine = props.grundbausteine;

    const catering = props.catering;
    const technik = props.technik;
    const movie = props.movie;

    const deepdive = props.deepdive;
    const brainstorming = props.brainstorming;
    const gruppenarbeit = props.gruppenarbeit;

  return (
        <div className="einkaufswagen">
            <img src={icon_shopping_bag} alt="icon" width="45px" height="45px" style={{paddingLeft: "100px", position:"absolute"}}/>
            <img src={zeit} alt="icon" width="30px" height="30px" style={{marginLeft: "15px", paddingTop:"60px", position:"absolute"}}/>
            <p className="cartitem" style={{marginLeft: "65px", paddingTop:"65px"}}>0 Stunden</p>
            <img src={coins} alt="icon" width="30px" height="30px" style={{marginLeft: "15px", paddingTop:"15px", position:"absolute"}}/>
            <p className="cartitem" style={{marginLeft: "65px", marginTop:"35px"}}>0 Euro</p>

            {ziel
                ? <p className="cartitem">{props.ziel}</p>
                : <p className="leer">Ihr Warenkorb ist leer.</p>
                }

            {fokus
                && <p className="cartitem">{props.fokus}</p>
                }

            {methodik
                && <p className="cartitem">{props.methodik}</p>
                }

            {allgemein
                && <p className="cartitem">{props.allgemein}</p>
                }

           {umfang
                && <p className="cartitem">{props.umfang}</p>
                }

           {grundbausteine
                && <p className="cartitem">{props.grundbausteine}</p>
                }

           {catering
                && <p className="cartitem">{props.catering}</p>
                }

           {technik
                && <p className="cartitem">{props.technik}</p>
                }

           {movie
                && <p className="cartitem">{props.movie}</p>
                }

           {brainstorming
                && <p className="cartitem">{props.brainstorming}</p>
                }

           {deepdive
                && <p className="cartitem">{props.deepdive}</p>
                }

           {gruppenarbeit
                && <p className="cartitem">{props.gruppenarbeit}</p>
                }

        </div>
  );
}

export default Einkaufswagen;