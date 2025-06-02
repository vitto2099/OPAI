
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-opai-darkGray/90 via-opai-darkGray/70 to-opai-darkGray/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="text-center md:text-left space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Juntos pela</span>
              <br />
              <span className="text-opai-gold">vida dos animais</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl">
              Cada resgate é uma nova chance. Ajude a transformar histórias.
            </p>
            <p className="text-lg text-gray-400 max-w-lg">
              Somos a OPAI - Anjos de Patas, uma ONG dedicada à proteção e resgate de animais
              em situação de risco em Itaiópolis/SC.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handlePixDonation}
              className="group bg-gradient-to-r from-opai-gold to-yellow-500 hover:from-yellow-500 hover:to-opai-gold text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-opai-gold/30 animate-pulse-gold"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>💳</span>
                <span>Doe via PIX</span>
              </span>
            </button>

            <button
              onClick={scrollToHelp}
              className="bg-transparent border-2 border-opai-gold text-opai-gold hover:bg-opai-gold hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Como Ajudar
            </button>
          </div>
        </div>

        {/* Right Column - QR Code */}
        <div className="flex justify-center md:justify-end animate-scale-in">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-opai-gold/20 max-w-sm">
            <div className="text-center space-y-4">
              <h3 className="text-opai-darkGray font-bold text-xl">Doe via PIX</h3>

              <img
                src="/qrcode-pix.png"
                alt="QR Code para doação via PIX"
                className="w-48 h-48 mx-auto rounded-2xl border border-opai-darkGray/30 shadow-md"
              />

              <div className="space-y-2">
                <p className="text-opai-darkGray font-medium">Escaneie para doar</p>
                <p className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg font-mono">
                  23.258.497/0001-48
                </p>
                <button
                  onClick={handlePixDonation}
                  className="text-opai-gold hover:text-opai-darkGray transition-colors text-sm font-medium"
                >
                  Ou clique para copiar a chave
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-opai-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-opai-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
