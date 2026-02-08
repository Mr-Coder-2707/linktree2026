import { AppProvider } from "./context/AppContext";
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
  return (
    <AppProvider>
      <Preloader />
      <BgAnimation />
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
    </AppProvider>
  );
}

export default App;
