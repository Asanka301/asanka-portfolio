import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import styled from "styled-components";
import Navbar from "./components/Navbar/index.js";
import HeroSection from "./components/HeroSection/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Education from "./components/Education/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience/index.js";
import Projects from "./components/Projects/index.js";
import { useState } from "react";
import Contact from "./components/Contact/index.js";
import Footer from "./components/Footer/index.js";
import ProjectDetails from "./components/ProjectDetails/index.jsx";
import Cerificates from "./components/Certificates/index.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(67, 169, 245, 0.15) 0%,
      rgba(67, 169, 245, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(67, 169, 245, 0) 50%,
      rgba(67, 169, 245, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Cerificates />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
          {/* <ToggleButton onClick={toggleTheme}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </ToggleButton> */}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
