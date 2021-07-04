import React from "react";
import icon_shopping_bag from "./icon_shopping_bag.png";
import "./Einkaufswagen.css"

function Einkaufswagen(props) {

    const ziel = props.ziel;
    const fokus = props.fokus;
    const methodik = props.methodik;
    const allgemein = props.allgemein;
    const umfang = props.umfang;
    const grundbausteine = props.grundbausteine;
    const konfiguration = props.konfiguration;

    const catering = props.catering;
    const technik = props.technik;
    const movie = props.movie;

  return (
        <div className="einkaufswagen">
            <img src={icon_shopping_bag} alt="icon" width="45px" height="45px" style={{paddingLeft: "100px"}}/>


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

           {konfiguration
                && <p className="cartitem">Zusätzlich: {props.konfiguration}</p>
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
        </div>
  );
}

export default Einkaufswagen;