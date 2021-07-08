import React, { useState } from "react";
import "./Modal.css";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

export default function Modal () {

    const [modal, setModal] = useState(false);

    const openPopup = () => {
        setModal(!modal)

    };

     if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

    return (
        <>

        <Button variant="contained"
        onClick={openPopup}
        style={{
                    width: "120px",
                    height: "40px",
                    fontFamily: "PT Serif",
                    fontStyle: "normal",
                    backgroundColor:"lightgray",
                    fontWeight: "bold",
                    marginLeft: "1255px",
                    marginTop: "-15px"
                }}
                >
            Absenden
        </Button>

        {modal && (
        <div className="modal">
            <div
             onClick={openPopup}
             className="overlay">

            </div>
             <div className="modal-content">
                <h2>Vielen Dank!</h2>
                    <p>Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich mit Ihnen in Verbindung setzen.</p>

                 <Link to="/" style={{ textDecoration: 'none', color:'black' }}>
                 <Button variant="contained"
                    className='close-modal'
                    onClick={openPopup}>
                    Startseite
                    </Button>
                 </Link>


            </div>
         </div>
         )}
         <p>abc</p>
         </>
         );
    }