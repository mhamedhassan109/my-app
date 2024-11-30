import React from "react";
import { Fragment } from "react";
import Navgition from "./Components/Navgition/Navgition";
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./Components/Contact/Contact";
import About from "./Components/about/About";
import Teams from "./Components/Teams/Teams";
import Services from "./Components/services/Services";
import Blog from "./Components/Blog/Blog";
import Alert from "./Components/alert/Alert";
import Login from "./Components/Login/Login";



function App() {
  return (

    <div>

      {


        <BrowserRouter>
          <Navgition />

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about us" element={<About />} />
            <Route path="/our team" element={<Teams />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/service" element={<Services />} />
            <Route path="/error 404" element={<Alert />} />
            <Route path="/login / resigter" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </div>

  );
}


export default App;
