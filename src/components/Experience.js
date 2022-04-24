import React from "react"

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2003-2011</h3>
                        <p>IMPRESSO, LLC | FREELANCE GRAPHIC DESIGNER : Produced digital logos, printed materials and design systems for local business owners.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018</h3>
                        <p>AXIOM MARKETING | GRAPHIC DESIGNER : Day-to-day duties included production of large-format billboards, printed materials and small-format motion graphics for clients throughout the greater tri-state area.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2020</h3>
                        <p>IVY TECH COMMUNITY COLLEGE | SUPPLEMENTAL INSTRUCTOR : Assisted students through coursework as necessary via walk-ins, email or text. Areas of focus included Computer Information Systems and Visual Communications</p>
                    </div>
                </div>{/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021-2022</h3>
                        <p>BUTLER UNIVERSITY | EXECUTIVE EDUCATION FULL STACK WEB DEVELOPMENT BOOTCAMP : 24 weeks; learned back end technologies using real-world project-based examples. Implemented complex logical conditions to meet objectives, develop a concept for a website and follow through production to deployment. Created robust web applications and services.</p>
                    </div>
                </div>{/* - */}
                
            </div>
        </div>
    )
}

export default Experience;