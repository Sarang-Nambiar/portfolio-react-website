import { useEffect, useState } from "react";
import "../Stylesheets/Navbar.css";
import Drawer from "./Drawer";
import PersonIcon from '@mui/icons-material/Person';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EmailIcon from '@mui/icons-material/Email';
export default function Navbar({ aboutRef, projectsRef, contactRef }) {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 640);
  const [isDark, setIsDark] = useState(false);

  const links = [
    {
      name: "About",
      ref: aboutRef,
      icon: <PersonIcon/>
    },
    {
      name: "Projects",
      ref: projectsRef,
      icon: <LightbulbIcon/>
    },
    {
      name: "Contact",
      ref: contactRef,
      icon: <EmailIcon/>
    },
  ];

  const scrollToRef = (ref) => {
    const topPosition =
      ref.current.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 25) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div
        id="navbar"
        class={`fixed w-full flex flex-row justify-between pl-8 pr-8 pt-3 pb-4 items-center ${
          isDark
            ? "bg-black bg-opacity-50 backdrop-blur-md text-white outline outline-white outline-1"
            : ""
        }`}
      >
        <div className="logo font-bold sm:text-base text-lg">Sarang</div>
        {isSmall ?  <Drawer links={links} scrollTo={scrollToRef} isDark={isDark}/> :
          <ul className="links flex flex-row gap-8 cursor-pointer">
            {links.map((link) => {
              return <li onClick={() => scrollToRef(link.ref)}>{link.name}</li>
            })}
          </ul>
        }
      </div>
    </>
  );
}
