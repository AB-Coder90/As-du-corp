import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50 border-b border-gold">
      <div className="flex h-20 w-full items-center px-6 md:px-12 justify-between">
        
        {/* Menu mobile avec bouton */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="lg:hidden border-gold text-gold hover:bg-gold hover:text-black"
            >
              <MenuIcon className="h-6 w-6" aria-label="Ouvrir le menu" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-gold w-64 border-r border-gold">
            <nav className="grid gap-4 py-6">
              <NavItem to="/" label="Accueil" />
              <NavItem to="/about-us" label="À propos" />
              <NavItem to="/services" label="Services" />
              <NavItem to="/contact" label="Contact" />
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo Officiel avec police calligraphique */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/logo-las-du-corps.png"
            alt="L'As Du Corps Logo"
            className="h-14 md:h-16 object-contain"
          />
          <span className="text-2xl font-bold text-gold font-oriental">
            L'As Du Corps
          </span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden lg:flex gap-8">
          <NavItem to="/" label="Accueil" />
          <NavItem to="/about-us" label="À propos" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/contact" label="Contact" />
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="text-lg font-semibold text-gold hover:text-yellow-400 transition-all duration-300 px-3 py-2 rounded-md"
    >
      {label}
    </Link>
  );
}

// Icône Menu
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}


