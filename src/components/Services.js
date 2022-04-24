import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'*/
import { faDesktop, faFileCode, faEye, faShieldHalved,  } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">what i can offer</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Web Design</h3>
                                <p>Each project receives individual attention and follow through during all phases of new product development.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                                <h3>Web Development</h3>
                                <p>Your website will be built using the latest, most responsive front-end frameworks and libraries.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faEye} size="2x"/></div>
                                <h3>Responsive Design</h3>
                                <p>Your website will be optimized for user-friendly viewing on an array of different devices.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faShieldHalved} size="2x"/></div>
                                <h3>Safety</h3>
                                <p>By using both client-side and server-side validation, your website will remain secure through production.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services