import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Throttle scroll para melhor performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  useEffect(() => {
    // Previne scroll do body quando menu está aberto
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    
    // Cleanup ao desmontar
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Início", id: "inicio" },
    { label: "Sobre", id: "sobre" },
    { label: "Resgates", id: "resgates" },
    { label: "Como Ajudar", id: "como-ajudar" },
    { label: "Contato", id: "contato" }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-yellow-500/20 shadow-lg"
          : "bg-transparent"
      }`}>
        <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 max-w-[70%] sm:max-w-none">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-yellow-500 leading-tight">
                <span className="block sm:inline">OPAI - Anjos de Patas</span>
              </h1>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-yellow-500 transition-colors duration-300 font-medium relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Botão Menu Mobile */}
            <button
              onClick={handleMenuToggle}
              className="md:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 hover:text-white transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 flex-shrink-0"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-14 sm:top-16 md:top-20 left-0 right-0 bg-gray-900/98 backdrop-blur-md border-t border-yellow-500/20 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="px-4 py-6">
              <div className="flex flex-col space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-white hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 font-medium py-3 px-4 rounded-lg border-l-2 border-transparent hover:border-yellow-500"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;