
const Hero = () => {
  const scrollToHelp = () => {
    const element = document.getElementById("como-ajudar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-500 animate-fade-in">
          Cada vida importa
        </h1>
        <p className="text-xl md:text-3xl mb-8 text-white font-light animate-fade-in">
          Juntos, podemos mudar histórias.
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto animate-fade-in">
          Somos a OPAI - Anjos de Patas, uma ONG dedicada à proteção e resgate de animais 
          em situação de risco em Itaiópolis/SC.
        </p>
        
        <button
          onClick={scrollToHelp}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25 animate-fade-in"
        >
          Como Você Pode Ajudar
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
