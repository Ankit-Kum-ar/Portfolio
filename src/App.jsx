import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import bg from "./assets/background.png"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import ScrolltoTop from "./Helpers/ScrolltoTop"
import Project from "./pages/Project/Project"
import TechStack from "./pages/Tech Stack/TechStack"
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Contact from "./pages/Contact/Contact"
import MoblieNavbar from "./components/Layout/MoblieNavbar"
import PageLoader from "./components/Loading/PageLoader"
import PageTransition from "./components/Transitions/PageTransition"
import ScrollToTop from "./components/ScrollToTop"
import AnimatedBackground from "./components/Background/AnimatedBackground"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading time for initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Increased to 3 seconds for better loading experience

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="h-full w-full noise-overlay" style={{ position: "relative"}}>
      {/* Static background image */}
      <div className="" style={{
        backgroundImage: `url(${bg})`,
        position: "absolute",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2
      }}></div>
      
      {/* Animated background effects */}
      <AnimatedBackground />
      
      <div style={{ position: "relative", padding: "20px", zIndex: 1 }}>
        <ScrolltoTop/>
        <Header/>
        <MoblieNavbar/>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/projects" element={
              <PageTransition>
                <Project />
              </PageTransition>
            } />
            <Route path="/techstack" element={
              <PageTransition>
                <TechStack/>
              </PageTransition>
            }/>
            <Route path="/contact" element={
              <PageTransition>
                <Contact/>
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
        <Footer/>
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
