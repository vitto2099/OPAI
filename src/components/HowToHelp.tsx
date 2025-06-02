
import { Heart, Users, Home } from "lucide-react";

const HowToHelp = () => {
  const handlePixDonation = () => {
    navigator.clipboard.writeText("23.258.497/0001-48");
    alert("Chave PIX copiada! 23.258.497/0001-48");
  };

  return (
    <section id="como-ajudar" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-500">
          Como Ajudar
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Doação PIX */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-lg p-8 text-center hover:border-yellow-500 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Doe via PIX</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Sua doação nos ajuda a comprar ração, medicamentos e custear tratamentos veterinários.
            </p>
            <button
              onClick={handlePixDonation}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 w-full"
            >
              Copiar Chave PIX
            </button>
            <p className="text-sm text-gray-400 mt-2">CNPJ: 23.258.497/0001-48</p>
          </div>
          
          {/* Voluntariado */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-lg p-8 text-center hover:border-yellow-500 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Seja Voluntário</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Ajude nos resgates, cuidados diários, eventos de adoção e muito mais.
            </p>
            <a
              href="https://wa.me/5547999444486?text=Olá! Gostaria de ser voluntário da OPAI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 w-full inline-block"
            >
              Quero Ajudar
            </a>
          </div>
          
          {/* Adoção */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-lg p-8 text-center hover:border-yellow-500 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Adote um Amigo</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Dê uma segunda chance para um animal que precisa de amor e carinho.
            </p>
            <a
              href="https://wa.me/5547999444486?text=Olá! Tenho interesse em adotar um animal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 w-full inline-block"
            >
              Ver Animais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
