const Hero = () => {
  const scrollToHelp = () => {
    const element = document.getElementById("como-ajudar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePixDonation = () => {
    navigator.clipboard.writeText("23.258.497/0001-48");
    alert("Chave PIX copiada! 23.258.497/0001-48\n\nObrigado por ajudar os animais da OPAI! ❤️");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-20 sm:pt-24 md:pt-16 pb-8">
        {/* Texto */}
        <div className="text-center md:text-left space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Juntos pela</span>
              <br />
              <span className="text-yellow-500">vida dos animais</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 font-light max-w-full sm:max-w-xl mx-auto md:mx-0">
              Cada resgate é uma nova chance. Ajude a transformar histórias.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-full sm:max-w-lg mx-auto md:mx-0">
              Somos a OPAI - Anjos de Patas, uma ONG dedicada à proteção e resgate de animais
              em situação de risco em Itaiópolis/SC.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
            <button
              onClick={handlePixDonation}
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-yellow-500/30"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>💳</span>
                <span>Doe via PIX</span>
              </span>
            </button>

            <button
              onClick={scrollToHelp}
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105"
            >
              Como Ajudar
            </button>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border border-yellow-500/20 w-full max-w-xs sm:max-w-sm">
            <div className="text-center space-y-3 md:space-y-4">
              <h3 className="text-gray-900 font-bold text-base sm:text-lg md:text-xl">Doe via PIX</h3>
              <img
                src="/qrcode-pix.png"
                alt="QR Code para doação via PIX"
                className="w-32 sm:w-40 md:w-48 h-auto mx-auto rounded-2xl border border-gray-900/30 shadow-md max-w-full"
              />
              <div className="space-y-2">
                <p className="text-gray-900 font-medium text-xs sm:text-sm md:text-base">Escaneie para doar</p>
                <p className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 md:px-3 py-1 md:py-2 rounded-lg font-mono break-all">
                  23.258.497/0001-48
                </p>
                <button
                  onClick={handlePixDonation}
                  className="text-yellow-600 hover:text-gray-900 transition-colors text-xs sm:text-sm font-medium"
                >
                  Ou clique para copiar a chave
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-yellow-500 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-yellow-500 rounded-full mt-1 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;