import React, { useState } from "react";
import Button from "@/components/Button";
import { Menu, X, Download } from "lucide-react";

const navbarLinks = [
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          SSE<span>.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navbarLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button 
            as="a" 
            href="/SoongShinEe_CV.pdf"
            download
            size="sm"
          >
            <Download/>
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navbarLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button as="a" href="/SoongShinEe_CV.pdf" download="SoongShinEe_CV.pdf"><Download/>Download CV</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
