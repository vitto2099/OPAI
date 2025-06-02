
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-opai-darkGray/95 backdrop-blur-md border-b border-opai-gold/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-opai-gold animate-fade-in">
          OPAI - Anjos de Patas
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {[
            { label: 'Início', id: 'inicio' },
            { label: 'Sobre', id: 'sobre' },
            { label: 'Resgates', id: 'resgates' },
            { label: 'Como Ajudar', id: 'como-ajudar' },
            { label: 'Contato', id: 'contato' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-opai-gold transition-colors duration-300 font-medium relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-opai-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-opai-gold hover:text-white transition-colors p-2 rounded-lg"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-opai-darkGray/98 backdrop-blur-md border-t border-opai-gold/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {[
              { label: 'Início', id: 'inicio' },
              { label: 'Sobre', id: 'sobre' },
              { label: 'Resgates', id: 'resgates' },
              { label: 'Como Ajudar', id: 'como-ajudar' },
              { label: 'Contato', id: 'contato' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-opai-gold transition-colors duration-300 text-left font-medium py-2 border-l-2 border-transparent hover:border-opai-gold pl-4"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
