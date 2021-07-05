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

    const shiftcolor = digitalShift===true ? "#00ADEF" : "lightgray"
    const salescolor = futureSales===true ? "#00ADEF" : "lightgray"
    const retailcolor = futureRetail===true ? "#00ADEF" : "lightgray"
    const mobilitycolor = futureMobility===true ? "#00ADEF" : "lightgray"
    const sustainabilitycolor = sustainability===true ? "#00ADEF" : "lightgray"
    const aftersalescolor = afterSales===true ? "#00ADEF" : "lightgray"

    function chooseDigitalShift() {
        setDigitalShift(prevState => !prevState)
        setFutureSales(false)
        setFutureRetail(false)
        setFutureMobility(false)
        setSustainability(false)
        setAfterSales(false)
    }

    function chooseFutureSales() {
        setFutureSales(prevState => !prevState)
        setDigitalShift(false)
        setFutureRetail(false)
        setFutureMobility(false)
        setSustainability(false)
        setAfterSales(false)
    }

      function chooseFutureRetail() {
        setFutureRetail(prevState => !prevState)
          setFutureSales(false)
        setDigitalShift(false)
        setFutureMobility(false)
        setSustainability(false)
        setAfterSales(false)
    }

      function chooseFutureMobility() {
        setFutureMobility(prevState => !prevState)
          setFutureSales(false)
        setFutureRetail(false)
        setDigitalShift(false)
        setSustainability(false)
        setAfterSales(false)
    }

      function chooseSustainability() {
        setSustainability(prevState => !prevState)
          setFutureSales(false)
        setFutureRetail(false)
        setFutureMobility(false)
        setDigitalShift(false)
        setAfterSales(false)
    }

      function chooseAfterSales() {
        setAfterSales(prevState => !prevState)
          setFutureSales(false)
        setFutureRetail(false)
        setFutureMobility(false)
        setSustainability(false)
        setDigitalShift(false)
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
            <div className="square01" onClick={chooseDigitalShift} style={{backgroundColor:shiftcolor}}>
                <p className="title">Digital Shift</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square02" onClick={chooseFutureSales} style={{backgroundColor:salescolor}}>
                <p className="title">Future Sales</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square03" onClick={chooseFutureRetail} style={{backgroundColor:retailcolor}}>
                <p className="title">Future Retail</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square04" onClick={chooseFutureMobility} style={{backgroundColor:mobilitycolor}}>
                <p className="title">Future Mobility</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square05" onClick={chooseSustainability} style={{backgroundColor:sustainabilitycolor}}>
                <p className="title">Sustainability</p>
                <p className="textsquare"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>

            <div className="square06" onClick={chooseAfterSales} style={{backgroundColor:aftersalescolor}}>
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
                    marginTop:"-501px"
                    }} >
            <img src={info_Icon} alt="info icon" width="45px" height="45px" style={{margin:"5px"}}/>
           <p>Bitte wählen Sie den gewünschten Themenbereich für Ihren Workshop aus. </p>
        </div>
        </div>
  );
}

export default Fokus;