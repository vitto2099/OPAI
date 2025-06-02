
import { useState } from "react";

const DonationButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handlePixDonation = () => {
    navigator.clipboard.writeText("23.258.497/0001-48");
    alert("Chave PIX copiada! 23.258.497/0001-48\n\nObrigado por ajudar os animais da OPAI! ❤️");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={handlePixDonation}
          className="group bg-gradient-to-r from-opai-gold to-yellow-500 hover:from-yellow-500 hover:to-opai-gold text-black font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center space-x-3 animate-pulse-gold"
        >
          <span className="text-2xl">💛</span>
          <span className="hidden sm:inline font-semibold">Doar PIX</span>
        </button>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-opai-darkGray/80 hover:bg-opai-darkGray text-opai-gold hover:text-white rounded-full w-7 h-7 flex items-center justify-center text-sm transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-opai-gold/20"
        >
          ×
        </button>
        
        {/* Floating particles */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-opai-gold rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping delay-75"></div>
      </div>
    </div>
  );
};

export default DonationButton;
