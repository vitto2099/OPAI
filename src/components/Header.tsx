
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-500">
          OPAI - Anjos de Patas
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("quem-somos")}
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Quem Somos
          </button>
          <button
            onClick={() => scrollToSection("como-ajudar")}
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Como Ajudar
          </button>
          <button
            onClick={() => scrollToSection("resgates")}
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Nossos Resgates
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-yellow-500/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-white hover:text-yellow-500 transition-colors duration-300 text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("quem-somos")}
              className="text-white hover:text-yellow-500 transition-colors duration-300 text-left"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection("como-ajudar")}
              className="text-white hover:text-yellow-500 transition-colors duration-300 text-left"
            >
              Como Ajudar
            </button>
            <button
              onClick={() => scrollToSection("resgates")}
              className="text-white hover:text-yellow-500 transition-colors duration-300 text-left"
            >
              Nossos Resgates
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-white hover:text-yellow-500 transition-colors duration-300 text-left"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
