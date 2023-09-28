import pfp from "../assets/aboutme_pic.jpg";
import { logos } from "../constants";
import "../Stylesheets/AboutMe.css";
import Header from "./Header";
import { aboutme } from "../constants";
import parse from "html-react-parser";

export default function AboutMe({ aboutRef }) {
  return (
    <>
      <div className="about-me flex flex-col gap-4" ref={aboutRef}>
        <Header headerName="About Me" />
        <img
          className="profile-pic w-[240px] h-[240px] rounded-full"
          src={pfp}
          alt="profile pic"
        />
        <div className="social-media flex justify-center gap-4">
          {logos.map((logo) => {
            return (
              <a href={logo.link}>
                <img src={logo.src} alt={logo.alt} width={48} height={48} />
              </a>
            );
          })}
        </div>
        <p className="w-3/4 mx-auto">
          {parse(aboutme)}
        </p>
      </div>
    </>
  );
}
