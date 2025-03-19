import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-[rgb(200,180,140)] border-t border-[rgb(200,180,140)] py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Logo et Nom */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img src="/images/logo-las-du-corps.png" alt="L'As Du Corps Logo" className="h-14 md:h-16 object-contain" />
          <span className="text-2xl font-bold font-oriental">L'As Du Corps</span>
          <p className="text-sm text-gray-400 max-w-xs">
            Expertise en médecine traditionnelle chinoise : acupuncture, massage Tui Na et harmonisation énergétique.
          </p>
        </div>

        {/* Liens utiles */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold text-[rgb(200,180,140)] mb-3">Liens rapides</h3>
          <FooterLink to="/" label="Accueil" />
          <FooterLink to="/discipline" label="Discipline" />
          <FooterLink to="/competences" label="Compétences" />
          <FooterLink to="/info-contact" label="Info / Contact" />
          <FooterLink to="/galerie" label="Galerie" />
          <FooterLink to="/privacy-policy" label="Politique de confidentialité" />
        </div>

        {/* Mentions Légales et Réseaux Sociaux */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold text-[rgb(200,180,140)] mb-3">Informations</h3>
          <FooterLink to="/mentions-legales" label="Mentions Légales" />
          <FooterLink to="/protection-donnees" label="Protection des Données" />
          <a 
            href="https://www.google.com/maps/place/L'As+Du+Corp+63/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-[rgb(200,180,140)] hover:text-yellow-400 transition"
          >
            Laisser un avis Google
          </a>
          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-3">
            <SocialIcon href="https://facebook.com" Icon={FacebookIcon} />
            <SocialIcon href="https://instagram.com" Icon={InstagramIcon} />
            <SocialIcon href="https://linkedin.com" Icon={LinkedInIcon} />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 text-gray-400">
        © {new Date().getFullYear()} L'As Du Corps. Tous droits réservés.
      </div>
    </footer>
  );
}

// Composant pour les liens du footer
function FooterLink({ to, label }) {
  return (
    <Link
      to={to}
      className="text-lg font-medium text-[rgb(200,180,140)] hover:text-yellow-400 transition"
    >
      {label}
    </Link>
  );
}

// Composant pour les icônes des réseaux sociaux
function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[rgb(200,180,140)] hover:text-yellow-400 transition"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

// Icônes des réseaux sociaux
function FacebookIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12A10 10 0 1 0 12 22V14h-2v-2h2v-1.5c0-2.2 1.2-3.5 3.2-3.5.9 0 1.9.2 1.9.2v2h-1.1c-1.1 0-1.4.7-1.4 1.3V12h2.5l-.4 2h-2v8A10 10 0 0 0 22 12Z"/>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2C3.7 2 2 3.7 2 7v10c0 3.3 1.7 5 5 5h10c3.3 0 5-1.7 5-5V7c0-3.3-1.7-5-5-5H7Zm10 2c2 0 3 1 3 3v10c0 2-1 3-3 3H7c-2 0-3-1-3-3V7c0-2 1-3 3-3h10ZM12 6.3a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 1 0 0-11.4Zm0 9.3a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 1 1 0 7.2ZM17.5 5a1.2 1.2 0 1 0 0 2.5 1.2 1.2 0 1 0 0-2.5Z"/>
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 3C2 2 3 2 3 2h18s1 0 1 1v18s0 1-1 1H3s-1 0-1-1V3Zm6.6 4H5.5v11h3.1V7Zm.2-3c-1 0-1.6.6-1.6 1.5 0 1 .6 1.5 1.5 1.5h.1c1 0 1.6-.6 1.6-1.5C10.8 4.6 10.2 4 9.3 4ZM19 11.6c0-2.5-1.3-4-3.5-4-1.2 0-2.3.6-2.8 1.7v-1H9.5V18h3.1v-5c0-1.2.6-2 1.7-2s1.7.8 1.7 2v5H19v-6.4Z"/>
    </svg>
  );
}

  