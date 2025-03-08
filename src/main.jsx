import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";  // On importe directement ici
import Footer from "@/components/ui/Footer";  // Pareil pour le Footer
import Home from "@/page/Home";
import AboutUs from "@/page/AboutUs";
import Services from "@/page/Services";
import Contact from "@/page/Contact";

import "./index.css"; // Assure-toi que Tailwind est bien chargé

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ✅ On met la Navbar ici */}
      <Navbar />

      <main className="min-h-screen flex flex-col pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ✅ On met le Footer ici */}
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
  
);



