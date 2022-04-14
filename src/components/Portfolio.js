import React from "react"
import hBooker from "../Images/hBooker.png";
import horiseon from "../Images/horiseon.png";
import runBuddy from "../Images/runBuddy.png";
import scheduler from "../Images/scheduler.png";
import where2watch from "../Images/where2watch.png";

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">hBooker</h1>
                <div className="image-box-wrapper row-justify-content-center">
                    <img className="portfolio-image" src={hBooker} alt="Hotel Booking App..."/>
                </div>
                {/* - */}
                <h1 className="text-uppercase text-center py-5">horiseon</h1>
                <div className="image-box-wrapper row-justify-content-center">
                    <img className="portfolio-image" src={horiseon} alt="Horiseon Landing Page..."/>
                </div>
                {/* - */}
                <h1 className="text-uppercase text-center py-5">runBuddy</h1>
                <div className="image-box-wrapper row-justify-content-center">
                    <img className="portfolio-image" src={runBuddy} alt="RunBuddy App..."/>
                </div>
                {/* - */}
                <h1 className="text-uppercase text-center py-5">scheduler</h1>
                <div className="image-box-wrapper row-justify-content-center">
                    <img className="portfolio-image" src={scheduler} alt="Workday Scheduler..."/>
                </div>
                {/* - */}
                <h1 className="text-uppercase text-center py-5">where2watch</h1>
                <div className="image-box-wrapper row-justify-content-center">
                    <img className="portfolio-image" src={where2watch} alt="API Search Engine..."/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio