import React, { useState, useEffect } from "react";
// import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import SubIntro from "./Components/SubIntro/SubIntro";
import Section1 from "./Components/Section1/Section1";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import OurStories from "./Components/Stories/OurStories";
import Footer from "./Components/FooterR/Footer";
import BackToTop from "./Components/BackToTop/BackToTop";
import Preloader from "./Components/Preloader/Preloader";


function App() {

    const [loading, setLoading] = useState(true); // Track the loading state

    useEffect(() => {
        //  a delay before removing the preloader
        const timer = setTimeout(() => {
        setLoading(false);
        }, 3700);

        return () => clearTimeout(timer); 
    }, []);

    

    return (
        <>
            {loading ? (
                <Preloader />  // Shows the Preloader when loading is true
            ) : (
                <div>
           
            <Navbar />
            <Hero />
            <SubIntro />
            <Section1 />
            <Services />
            <AboutUs />
            <Contact />
            <OurStories /> 
            <Footer />    
            <BackToTop /> 

            </div>  
            )}
        </>
    );
}

export default App;