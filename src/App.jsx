import bg from "./assets/background.jpg";
import "./App.css";
import Navbar from "./Components/Navbar";
import React from "react";
import { useEffect, useState, useRef } from "react";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import TypewriterComponent from "typewriter-effect";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function App() {
  const [scroll, setScroll] = useState(0);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  `;
  function handleScroll() {
    const container_top = document
      .querySelector(".container")
      .getBoundingClientRect().top;
    if (container_top > 0) {
      setScroll(window.scrollY);
    } else {
      setScroll(window.innerHeight);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <img
        src={bg}
        className="background bg-cover fixed w-full h-full -z-10"
        alt="portfolio background"
        style={{ filter: `blur(${scroll / 200}px)` }}
      />
      <Navbar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className="main-header relative">
        <div className="welcome-text sm:text-9xl text-7xl sm:pt-7 h-[100vh] text-black relative pt-12">
          <h1>
            Welcome!
            <div className="block sm:text-[2rem] text-[1.25rem] font-light">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm Sarang, an aspiring AI Software Developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(
                      "Looking for Summer Internship positions in 2024!"
                    )
                    .pauseFor(2000)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
        </div>
      </div>
      <div className="container relative flex flex-col m-auto xl:max-w-[60%] md:max-w-[80%] max-w-[90%] rounded-[14px] pt-12 pb-12 xl:pr-[6.25rem] xl:pl-[6.25rem] lg:pr-[3rem] lg:pl-[3rem] md:pr-[1.5rem] md:pl-[1.5rem] gap-8 opacity-90 justify-center bg-[#DFDFDF]">
        <Reveal keyframes={fadeInUp} triggerOnce>
          <AboutMe aboutRef={aboutRef} />
          <Projects projectsRef={projectsRef} />
          <Contact contactRef={contactRef} />
        </Reveal>
      </div>
      <div className="footer text-gray-300 pt-4 pb-4 text-xs">
        <p>&copy; 2023 Sarang Nambiar</p>
        <p>Background photo by Sarang Nambiar, as featured on <a href="https://flic.kr/p/2oMnaeS" className="underline">Flickr</a></p>
      </div>
    </div>
  );
}

export default App;
