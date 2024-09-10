import "./App.css";
import { useState } from "react";
import Footer from "./components/footer";
import Skills from "./components/skills";
import ThemeSwitcher from "./components/theme";
import Projects from "./components/projects";
import ScrollToTopButton from "./components/scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const handleHireMeClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mohdmaaz.612054.it@mhssce.ac.in&su=Hiring%20Inquiry",
      "_blank"
    );
  };
  const [activeLink, setActiveLink] = useState("");
  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div>
        <header>
          <h1 className="logo">Mohammad Maaz</h1>
          <ul className="navlist">
            <li>
              <ThemeSwitcher></ThemeSwitcher>
            </li>
            <li>
              <a
                href="#section1"
                className="navli"
                onClick={() => handleClick("about")}
                style={{
                  color: activeLink === "about" ? "rgb(175, 64, 53)" : "",
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className="navli"
                onClick={() => handleClick("projects")}
                style={{
                  color: activeLink === "projects" ? "rgb(175, 64, 53)" : "",
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#section3"
                className="navli"
                onClick={() => handleClick("skills")}
                style={{
                  color: activeLink === "skills" ? "rgb(175, 64, 53)" : "",
                }}
              >
                skills
              </a>
            </li>
            <li>
              <a
                href="#section4"
                className="navli"
                onClick={() => handleClick("contacts")}
                style={{
                  color: activeLink === "contacts" ? "rgb(175, 64, 53)" : "",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="bx bx-menu" id="menu-icon"></div>
        </header>
        <ScrollToTopButton />
        <section className="hero">
          <div className="hero-txt" id="section1">
            <h2>Hello, I am a Designer and Developer</h2>
            <p>
              A visionary in UI/UX design with Figma, crafting interfaces that
              captivate and inspire. Using React.js, I create web applications
              that stand out with unparalleled interactivity and performance.
            </p>
            <h4>Mumbai, India</h4>
            <button onClick={handleHireMeClick} className="btn1">
              Hire Me
            </button>
            <a href="../public/Resume Updated.pdf" download="Resume.pdf">
              <button className="btn2">Resume</button>
            </a>
          </div>
          <div className="profile-img">
            <img src="../public/assets/Profile.jpg" alt="Image" height={250} />
          </div>
        </section>

        <div className="quote">
          <h3>
            <q>Energy and persistence conquer all things.</q>{" "}
          </h3>
          <p>– Benjamin Franklin</p>
        </div>

        <div className="projects" id="section2">
          <h2>Showcasing My Latest Projects</h2>
          <Projects />
        </div>

        <div id="section3">
          <Skills />
        </div>

        <div id="section4">
          <Footer className="footercomp" />
        </div>
      </div>
    </>
  );
}
export default App;
