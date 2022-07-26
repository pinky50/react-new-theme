// import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import TopBar from "./Components/TopBar/TopBar";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import WebDevelopment from "./Components/WebDevelopment/WebDevelopment";
import SoftwareDevelopment from "./Components/SoftwareDevelopment/SoftwareDevelopment";
import Navigation from "./Components/Navigation/Navigation";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import GraphicDesign from "./Components/GraphicDesign/GraphicDesign";
import DigitalMarketing from "./Components/DigitalMarketing/DigitalMarketing";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/webdevelopment" element={<WebDevelopment />} />
          <Route
            path="services/softwaredevelopment"
            element={<SoftwareDevelopment />}
          />
          <Route path="services/graphicdesign" element={<GraphicDesign />} />
          <Route
            path="services/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
