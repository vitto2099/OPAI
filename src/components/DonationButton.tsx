
import { useState } from "react";

const DonationButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handlePixDonation = () => {
    navigator.clipboard.writeText("23.258.497/0001-48");
    alert("Chave PIX copiada! 23.258.497/0001-48\n\nObrigado por ajudar os animais da OPAI! ❤️");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={handlePixDonation}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2 animate-pulse"
        >
          <span className="text-xl">💛</span>
          <span className="hidden sm:inline">Doar PIX</span>
        </button>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default DonationButton;
