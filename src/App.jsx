import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import SubIntro from "./Components/SubIntro/SubIntro";
import AwakenSection from "./Components/AwakenSection/AwakenSection";
import MuseumPreview from "./Components/MuseumPreview/MuseumPreview";
import Section1 from "./Components/Section1/Section1";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";
import ParishBenefits from "./Components/ParishBenefits/ParishBenefits";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import OurStories from "./Components/Stories/OurStories";
import Footer from "./Components/FooterR/Footer";
import BackToTop from "./Components/BackToTop/BackToTop";
import Preloader from "./Components/Preloader/Preloader";
import UnderConstruction from "./Components/UnderConstruction/UnderConstruction";
import DonateSection from "./Components/DonatePage/DonateSection";
import About from "./Components/AboutUsPage/About";
import Volunteer from "./Components/VolunteerPage/Volunteer";
import ContactUs from "./Components/ContactUsPage/ContactUs";
import NotFound from "./Components/NotFound/NotFound";
import Privacy from "./Components/Privacy/Privacy";
import TermsConditions from "./Components/TermsConditions/TermsConditions";


// 🔹 VERSION CHECK HOOK (added)
function useVersionCheck() {
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    let currentVersion = null;

    const checkVersion = async () => {
      try {
        const res = await fetch("/version.json", { cache: "no-store" });
        const data = await res.json();

        if (!currentVersion) {
          currentVersion = data.version;
        } else if (data.version !== currentVersion) {
          setHasUpdate(true);
        }
      } catch (err) {
        console.error("Version check failed", err);
      }
    };

    checkVersion();
    const interval = setInterval(checkVersion, 30000);

    return () => clearInterval(interval);
  }, []);

  return hasUpdate;
}


function App() {
  const [loading, setLoading] = useState(true);

  const hasUpdate = useVersionCheck(); // 🔹 added

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />

          {/* 🔹 UPDATE NOTIFICATION (added) */}
          {hasUpdate && (
            <div
              style={{
                position: "fixed",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                background: "#111827", // deep dark 
                color: "#f9fafb",
                padding: "10px 14px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                zIndex: 9999,
                fontSize: "13px",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
            >
              <span style={{ opacity: 0.9 }}>
                New update available
              </span>
            
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: "#d4af37", // gold 
                  color: "#111",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "12px",
                  transition: "all 0.2s ease",
                  animation: "pulse 2s infinite" 
                }}
                onMouseOver={(e) => (e.target.style.background = "#b8962e")}
                onMouseOut={(e) => (e.target.style.background = "#d4af37")}
              >
                Refresh
              </button>
            </div>
          )}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <SubIntro />
                  <AwakenSection />
                  <MuseumPreview />
                  <Services />
                  <AboutUs />
                  <Section1 />
                  <Contact />
                  <OurStories />
                </>
              }
            />
            <Route path="/under-construction" element={<UnderConstruction />} />
            <Route path="/donate" element={<DonateSection />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/ourteam" element={<Team />} />
            <Route path="/parishbenefits" element={<ParishBenefits />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/privacy-statement" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
