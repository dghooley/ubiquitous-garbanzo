import React from "react"
import hBooker from "../Images/hBooker.png";
import horiseon from "../Images/horiseon.png";
import runBuddy from "../Images/runBuddy.png";
import where2watch from "../Images/where2watch.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

    // hBooker
    const openPopupboxforhBooker = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={hBooker} alt="Hotel Booking App..." />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://h-booker.herokuapp.com/", "_blank")}>https://h-booker.herokuapp.com/</a> 
                <br></br>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Patsax/h-booker")}>https://github.com/Patsax/h-booker</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfighBooker = {
        titleBar: {
            enable: true,
            text: "H-Booker Hotel Booking App"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // Horiseon Project
    const openPopupboxforhoriseon = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={horiseon} alt="Horiseon Landing Page..." />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://dghooley.github.io/horiseonProject/")}>https://dghooley.github.io/horiseonProject/</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfighoriseon = {
        titleBar: {
            enable: true,
            text: "Horiseon Landing Page"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // Run Buddy Project
    const openPopupboxforrunBuddy = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={runBuddy} alt="Run Buddy App..." />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://dghooley.github.io/run-buddy/")}>https://dghooley.github.io/run-buddy/</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigrunBuddy = {
        titleBar: {
            enable: true,
            text: "Run Buddy App"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // Where2Watch
    const openPopupboxforwhere2watch = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={where2watch} alt="API Search Engine..." />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://saadsyed98.github.io/Where2Watch/", "_blank")}>https://saadsyed98.github.io/Where2Watch/</a> 
                <br></br>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/saadsyed98/Where2Watch.git")}>https://github.com/saadsyed98/Where2Watch.git</a>
            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigwhere2watch = {
        titleBar: {
            enable: true,
            text: "API Search Engine"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxforhBooker}>
                        <img className="portfolio-image" src={hBooker} alt="Hotel Booking App..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxforhoriseon}> 
                        <img className="portfolio-image" src={horiseon} alt="Horiseon Landing Page..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxforrunBuddy}>
                        <img className="portfolio-image" src={runBuddy} alt="RunBuddy App..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxforwhere2watch}> 
                        <img className="portfolio-image" src={where2watch} alt="API Search Engine..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfighBooker} />
            <PopupboxContainer {...popupboxConfighoriseon} />
            <PopupboxContainer {...popupboxConfigrunBuddy} />
            <PopupboxContainer {...popupboxConfigwhere2watch} />

        </div>
    )
}
export default Portfolio;