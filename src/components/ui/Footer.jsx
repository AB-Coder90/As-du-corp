import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gold border-t border-gold py-8">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        
        {/* Logo et Nom */}
        <div className="flex items-center space-x-3">
          <OrientalLogo className="h-10 w-10 text-gold" />
          <span className="text-2xl font-bold font-oriental">L'As Du Corp 63</span>
        </div>

        {/* Liens utiles */}
        <nav className="flex flex-wrap justify-center gap-6 mt-6 lg:mt-0">
          <FooterLink to="/" label="Accueil" />
          <FooterLink to="/about-us" label="À propos" />
          <FooterLink to="/services" label="Services" />
          <FooterLink to="/contact" label="Contact" />
          <FooterLink to="/privacy-policy" label="Politique de confidentialité" />
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex gap-6 mt-6 lg:mt-0">
          <SocialIcon href="https://facebook.com" Icon={FacebookIcon} />
          <SocialIcon href="https://instagram.com" Icon={InstagramIcon} />
          <SocialIcon href="https://linkedin.com" Icon={LinkedInIcon} />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 text-gray-400">
        © {new Date().getFullYear()} L'As Du Corp 63. Tous droits réservés.
      </div>
    </footer>
  );
}

// Composant pour les liens du footer
function FooterLink({ to, label }) {
  return (
    <Link
      to={to}
      className="text-lg font-medium text-gold hover:text-yellow-400 transition"
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
      className="text-gold hover:text-yellow-400 transition"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

// Icône Logo Oriental
function OrientalLogo(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" fill="none" />
      <path d="M16 32h32M32 16v32M22 22l20 20M22 42l20-20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
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

  