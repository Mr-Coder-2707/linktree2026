import { AppProvider } from "./context/AppContext";
import { useState, useCallback } from "react";
import Preloader from "./components/Preloader";
import BgAnimation from "./components/BgAnimation";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSelector from "./components/LanguageSelector";
import Header from "./components/Header";
import PrimaryLinks from "./components/PrimaryLinks";
import MediaEmbed from "./components/MediaEmbed";
import SocialGrid from "./components/SocialGrid";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const handlePreloaderDone = useCallback(() => setLoaded(true), []);

  return (
    <AppProvider>
      <Preloader onDone={handlePreloaderDone} />
      <BgAnimation />
      <div className={loaded ? "content-loaded" : ""}>
        <ThemeToggle />
        <LanguageSelector />

        <div className="profile-container">
          <Header />
          <PrimaryLinks />
          <MediaEmbed />
          <SocialGrid />
          <Projects />
          <Achievements />
          <Skills />
          <Testimonials />
          <Newsletter />
          <Contact />
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
