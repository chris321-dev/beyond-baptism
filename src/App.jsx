import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import SubIntro from "./Components/SubIntro/SubIntro";
import Section1 from "./Components/Section1/Section1";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import OurStories from "./Components/Stories/OurStories";
import Footer from "./Components/FooterR/Footer";
import BackToTop from "./Components/BackToTop/BackToTop";
import Preloader from "./Components/Preloader/Preloader";
import UnderConstruction from "./Components/UnderConstruction/UnderConstruction"; // Import the new page
import DonateSection from "./Components/DonatePage/DonateSection";
import About from "./Components/AboutUsPage/About";
import Volunteer from "./Components/VolunteerPage/Volunteer";
import ContactUs from "./Components/ContactUsPage/ContactUs";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const [loading, setLoading] = useState(true); // Track the loading state

  useEffect(() => {
    // A delay before removing the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> // Shows the Preloader when loading is true
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <SubIntro />
                  <Section1 />
                  <Services />
                  <AboutUs />
                  <Contact />
                  <OurStories />                  
                </>
              }
            />
            <Route path="/under-construction" element={<UnderConstruction />} />
            <Route path="/donate" element={<DonateSection />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/ourteam" element={<Team />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} /> { /* for invalid paths */}
          </Routes>
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
