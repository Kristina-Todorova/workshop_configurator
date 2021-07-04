import Kategorien from "./Kategorien";
import Weiter from "./Weiter";
import "./Fokus.css"
import {Link} from "react-router-dom";
import info_Icon from "./info_Icon.png";
import React, {useState, useContext, useEffect} from "react";
import GlobalDigitalShift from "./global/GlobalDigitalShift";
import GlobalFutureSales from "./global/GlobalFutureSales";
import GlobalFutureRetail from "./global/GlobalFutureRetail";
import GlobalFutureMobility from "./global/GlobalFutureMobility";
import GlobalSustainability from "./global/GlobalSustainability";
import GlobalAfterSales from "./global/GlobalAfterSales";


function Fokus() {
    let [digitalShift,setDigitalShift] = useContext(GlobalDigitalShift)
    let [futureSales,setFutureSales] = useContext(GlobalFutureSales)
    let [futureRetail,setFutureRetail] = useContext(GlobalFutureRetail)
    let [futureMobility,setFutureMobility] = useContext(GlobalFutureMobility)
    let [sustainability,setSustainability] = useContext(GlobalSustainability)
    let [afterSales,setAfterSales] = useContext(GlobalAfterSales)

    function chooseDigitalShift() {
        setDigitalShift(prevState => !prevState)
    }

    function chooseFutureSales() {
        setFutureSales(prevState => !prevState)
    }

      function chooseFutureRetail() {
        setFutureRetail(prevState => !prevState)
    }

      function chooseFutureMobility() {
        setFutureMobility(prevState => !prevState)
    }

      function chooseSustainability() {
        setSustainability(prevState => !prevState)
    }

      function chooseAfterSales() {
        setAfterSales(prevState => !prevState)
    }

  return (
        <div>
            <Kategorien

            digitalShift={digitalShift}
            futureSales={futureSales}
            futureRetail={futureRetail}
            futureMobility={futureMobility}
            sustainability={sustainability}
            afterSales={afterSales}/>

            <Link to="/Methodik" style={{ textDecoration: 'none', color:'black' }}>
            <Weiter/>
            </Link>
            <div className="square01" onClick={chooseDigitalShift} >
                <p className="title">Digital Shift</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square02" onClick={chooseFutureSales} >
                <p className="title">Future Sales</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square03" onClick={chooseFutureRetail} >
                <p className="title">Future Retail</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square04" onClick={chooseFutureMobility} >
                <p className="title">Future Mobility</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square05" onClick={chooseSustainability} >
                <p className="title">Sustainability</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square06" onClick={chooseAfterSales} >
                <p className="title">After Sales</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>



            <div className="infolabel"
                 style={{
                    fontFamily: "Arial",
                    fontStyle:"normal",
                    fontWeight:"normal",
                    fontSize:"14px",
                    lineHeight:"16px",
                    display:"flex",
                    alignItems:"center",
                    color:"#000000",
                    width: "820px",
                    height: "70px",
                    left: "345px",
                    top: "239px",
                    background: "rgba(0, 173, 239, 0.25)",
                    marginLeft: "300px",
                    marginTop:"-615px"
                    }} >
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Bitte wählen Sie den gewünschten Themenbereich für Ihren Workshop aus. </p>
        </div>
        </div>
  );
}

export default Fokus;