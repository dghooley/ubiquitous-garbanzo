import React from "react";
import author from "../../src/mecopy.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5"> 
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>Hello! I'm Derick, a user-focused, highly adaptive full stack web developer with a background in graphic design. I recently completed requirements for my certificate in Butler University Executive Education Full Stack Web Development Boot Camp. I use the MERN Stack (MongoDB, Express, ReactJS and NodeJS), GitHub, NoSQL, MySQL, and several Adobe Programs during website construction and deployment.</p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe