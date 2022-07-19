import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Resume from "../assets/Resume.pdf"

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Web Design and Development</h1>
                <Typed
                    className="typed-text"
                    strings={["Interface Design", "Web Development", "Web Design", "Product Development", "Graphic Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link>


                {/*<div class="btn-main">
                    <a href={Resume} target="_blank" rel="nonreferrer">Resume</a>
    </div>*/}
            </div>
        </div>
    )
}

export default Header