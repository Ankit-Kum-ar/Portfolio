import { Route, Routes } from "react-router-dom"
import bg from "./assets/background.png"
import Header from "./components/Header"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer"
import About from "./pages/About/About"
import ScrolltoTop from "./Helpers/ScrolltoTop"
import Project from "./pages/Project/Project"
import TechStack from "./pages/Tech Stack/TechStack"

function App() {

  return (
    <div className="h-full w-full" style={{ position: "relative"}}>
      <div className="" style={{
        backgroundImage: `url(${bg})`,
        position: "absolute",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}></div>
      <div style={{ position: "relative", padding: "20px" }}>
        <ScrolltoTop/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/techstack" element={<TechStack/>}/>
          {/* <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App
