import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Discipline from "@/pages/Discipline";
import Competences from "@/pages/Competences";
import InfoContact from "@/pages/InfoContact";
import RdvContact from "@/pages/InfoContact/RdvContact";
import Honoraires from "@/pages/InfoContact/Honoraires";
import Agenda from "@/pages/InfoContact/Agenda";
import Galerie from "@/pages/InfoContact/Galerie";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        {/* Ajout d'un padding pour éviter que le contenu soit caché par la navbar fixe */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discipline" element={<Discipline />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/info-contact" element={<InfoContact />} />
          <Route path="/info-contact/rdv-contact" element={<RdvContact />} />
          <Route path="/info-contact/honoraires" element={<Honoraires />} />
          <Route path="/info-contact/agenda" element={<Agenda />} />
          <Route path="/info-contact/galerie" element={<Galerie />} />
        </Routes>
      </div>
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
