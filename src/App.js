/*import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-tsparticles';
import Navbar from './components/Navbar';
import Header from "./components/Header";


    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets



  function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}  


export default App;
*/
import React from 'react';
import ReactDom from 'react-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-particles-js";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
/* mport Testimonials from "./components/Testimonials"; */
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Particles
        className="tsparticles-canvas-el"
        // params={{
        //   particles: {
        //     number: {
        //       value: 30,
        //       density: {
        //         enable: true,
        //         value_area: 900,
        //       },
        //     },
        //     shape: {
        //       type: "circle",
        //       stroke: {
        //         width: 6,
        //         color: "#f9ab00",
        //       },
        //     },
        //   },
        // }}

        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#f9ab00",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />

      <Contacts />
      <Footer />

    </>
  );
}

export default App;

