import React from "react";
import icon_shopping_bag from "./icon_shopping_bag.png";
import "./Einkaufswagen.css"
import zeit from "./zeit.png"

function Einkaufswagen() {

  return (
        <div className="einkaufswagen">
            <img src={icon_shopping_bag} alt="icon" width="45px" height="45px" style={{paddingLeft: "100px"}}/>
            <img src={zeit} alt="icon" width="45px" height="45px" style={{margin:"-20%",}}/>

            <p className="leer">Ihr Warenkorb ist leer.</p>
        </div>
  );
}

export default Einkaufswagen;