import React from "react";
import icon_shopping_bag from "./icon_shopping_bag.png";
import "./Einkaufswagen.css";
import zeit from "./zeit.png";
import coins from "./coins.png";

function Einkaufswagen(props) {

    const ziel = props.ziel;
    const fokus = props.fokus;
    const methodik = props.methodik;
    const sprache = props.sprache;
    const ort = props.ort;
    const umfang = props.umfang;
    const grundbausteine = props.grundbausteine;

    const catering = props.catering;
    const technik = props.technik;
    const movie = props.movie;

    const deepdive = props.deepdive;
    const brainstorming = props.brainstorming;
    const gruppenarbeit = props.gruppenarbeit;

    const timecounter = props.timecounter;
    const pricecounter = props.pricecounter;
    const teilnehmer = props.teilnehmer;

  return (
        <div className="einkaufswagen">
            <img src={icon_shopping_bag} alt="icon" width="45px" height="45px" style={{paddingLeft: "100px", position:"absolute"}}/>
            <img src={zeit} alt="icon" width="30px" height="30px" style={{marginLeft: "15px", paddingTop:"60px", position:"absolute"}}/>
            <p className="cartitem" style={{marginLeft: "65px", paddingTop:"55px"}}>

                {timecounter
                ? <p>{props.timecounter} Stunden</p>
                : <p>0 Stunden</p>
                }


            </p>
            <img src={coins} alt="icon" width="30px" height="30px" style={{marginLeft: "15px", paddingTop:"15px", position:"absolute"}}/>
            <p className="cartitem" style={{marginLeft: "65px", marginTop:"34px"}}>

                {pricecounter
                ? <p>{props.pricecounter} Euro</p>
                : <p>0 Euro</p>
                }

            </p>

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

            {sprache
                && <p className="cartitem">{props.sprache}</p>
                }

            {ort
                && <p className="cartitem">{props.ort}</p>
                }

            {teilnehmer
                && <p className="cartitem">{props.teilnehmer}</p>
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