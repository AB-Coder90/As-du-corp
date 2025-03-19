import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50 border-b border-[rgb(200,180,140)]">
      <div className="flex h-20 w-full items-center px-6 md:px-12 justify-between">
        
        {/* Menu mobile avec bouton */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="lg:hidden border-[rgb(200,180,140)] text-[rgb(200,180,140)] hover:bg-[rgb(200,180,140)] hover:text-black"
            >
              <MenuIcon className="h-6 w-6" aria-label="Ouvrir le menu" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-[rgb(200,180,140)] w-64 border-r border-[rgb(200,180,140)]">
            <nav className="grid gap-4 py-6">
              <NavItem to="/" label="Accueil" />
              <NavItem to="/discipline" label="Discipline" />
              <NavItem to="/competences" label="Compétences" />

              {/* Info / Contact avec sous-menu */}
              <div className="relative">
                <button onClick={() => setInfoOpen(!infoOpen)} className="w-full text-left text-lg font-semibold text-[rgb(200,180,140)] hover:text-yellow-400 transition px-3 py-2">
                  Info / Contact ▾
                </button>
                {infoOpen && (
                  <div className="absolute left-0 w-full bg-black shadow-md border border-[rgb(200,180,140)] rounded-md">
                    <NavItem to="/rdv-contact" label="RDV et Contact" />
                    <NavItem to="/honoraires" label="Honoraires" />
                    <NavItem to="/agenda" label="Agenda" />
                    <NavItem to="/galerie" label="Galerie" />
                  </div>
                )}
              </div>
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
          <span className="text-2xl font-bold text-[rgb(200,180,140)] font-oriental">
            L'As Du Corps
          </span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden lg:flex gap-8">
          <NavItem to="/" label="Accueil" />
          <NavItem to="/discipline" label="Discipline" />
          <NavItem to="/competences" label="Compétences" />

          {/* Info / Contact avec sous-menu */}
          <DropdownMenu label="Info / Contact">
            <NavItem to="/rdv-contact" label="RDV et Contact" />
            <NavItem to="/honoraires" label="Honoraires" />
            <NavItem to="/agenda" label="Agenda" />
            <NavItem to="/galerie" label="Galerie" />
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

// Composant pour les liens
function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="text-lg font-semibold text-[rgb(200,180,140)] hover:text-yellow-400 transition-all duration-300 px-3 py-2 rounded-md"
    >
      {label}
    </Link>
  );
}

// Composant pour le menu déroulant en Desktop
function DropdownMenu({ label, children }) {
  return (
    <div className="relative group">
      <button className="text-lg font-semibold text-[rgb(200,180,140)] hover:text-yellow-400 transition px-3 py-2">
        {label} ▾
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-black shadow-md border border-[rgb(200,180,140)] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
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




