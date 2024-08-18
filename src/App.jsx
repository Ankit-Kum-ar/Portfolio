import { Route, Routes } from "react-router-dom"
import bg from "./assets/background.png"
import Header from "./components/Header"
import Home from "./pages/Home/Home"
function App() {

  return (
    <div style={{ position: "relative", height: "100vh" }}>
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
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
