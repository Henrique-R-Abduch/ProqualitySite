
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta o scroll para mudar a aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Links da navegação
  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Quem Somos", path: "/quem-somos" },
    { name: "Produtos", path: "/produtos" },
    { name: "Missão", path: "/missao" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Proquality Logo"
            className="h-12"
          />
        </Link>

        {/* Links de navegação - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-sm uppercase tracking-wider hover:text-proquality-primary transition-colors ${
                isScrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Menu hambúrguer - Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden bg-white w-full py-4 shadow-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-800 font-medium text-sm uppercase tracking-wider hover:text-proquality-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
