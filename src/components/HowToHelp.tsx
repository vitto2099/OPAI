
import { Heart, Users, Home } from "lucide-react";

const HowToHelp = () => {
  const handlePixDonation = () => {
    navigator.clipboard.writeText("23.258.497/0001-48");
    alert("Chave PIX copiada! 23.258.497/0001-48\n\nObrigado por ajudar os animais da OPAI! ❤️");
  };

  return (
    <section id="como-ajudar" className="py-20 bg-gradient-to-b from-opai-darkGray to-opai-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-opai-gold">Como</span> <span className="text-white">Ajudar</span>
          </h2>
          <div className="w-24 h-1 bg-opai-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Existem várias formas de fazer a diferença na vida dos animais. Escolha a que mais combina com você.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Doação PIX */}
          <div className="group bg-gradient-to-br from-opai-lightGray/50 to-opai-lightGray/30 backdrop-blur-sm border border-opai-gold/10 rounded-3xl p-8 text-center hover:border-opai-gold/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-opai-gold/10 animate-fade-in-up">
            <div className="w-20 h-20 bg-gradient-to-br from-opai-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-opai-darkGray" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-opai-gold">Doe via PIX</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sua doação nos ajuda a comprar ração, medicamentos e custear tratamentos veterinários. 
              Cada real faz a diferença!
            </p>
            <button
              onClick={handlePixDonation}
              className="bg-gradient-to-r from-opai-gold to-yellow-500 hover:from-yellow-500 hover:to-opai-gold text-black font-bold py-4 px-6 rounded-full transition-all duration-300 hover:scale-105 w-full shadow-lg hover:shadow-opai-gold/30"
            >
              Copiar Chave PIX
            </button>
            <p className="text-sm text-gray-400 mt-4 font-mono bg-opai-darkGray/30 px-3 py-2 rounded-lg">
              CNPJ: 23.258.497/0001-48
            </p>
          </div>
          
          {/* Voluntariado */}
          <div className="group bg-gradient-to-br from-opai-lightGray/50 to-opai-lightGray/30 backdrop-blur-sm border border-opai-gold/10 rounded-3xl p-8 text-center hover:border-opai-gold/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-opai-gold/10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-opai-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10 text-opai-darkGray" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-opai-gold">Seja Voluntário</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ajude nos resgates, cuidados diários, eventos de adoção e muito mais. 
              Seu tempo e dedicação salvam vidas.
            </p>
            <a
              href="https://wa.me/5547999444486?text=Olá! Gostaria de ser voluntário da OPAI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-opai-gold to-yellow-500 hover:from-yellow-500 hover:to-opai-gold text-black font-bold py-4 px-6 rounded-full transition-all duration-300 hover:scale-105 w-full inline-block shadow-lg hover:shadow-opai-gold/30"
            >
              Quero Ajudar
            </a>
          </div>
          
          {/* Adoção */}
          <div className="group bg-gradient-to-br from-opai-lightGray/50 to-opai-lightGray/30 backdrop-blur-sm border border-opai-gold/10 rounded-3xl p-8 text-center hover:border-opai-gold/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-opai-gold/10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-opai-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Home className="w-10 h-10 text-opai-darkGray" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-opai-gold">Adote um Amigo</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dê uma segunda chance para um animal que precisa de amor e carinho. 
              Adoção responsável transforma vidas.
            </p>
            <a
              href="https://wa.me/5547999444486?text=Olá! Tenho interesse em adotar um animal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-opai-gold to-yellow-500 hover:from-yellow-500 hover:to-opai-gold text-black font-bold py-4 px-6 rounded-full transition-all duration-300 hover:scale-105 w-full inline-block shadow-lg hover:shadow-opai-gold/30"
            >
              Ver Animais
            </a>
          </div>
        </div>
        
        {/* Additional Help Section */}
        <div className="mt-16 bg-gradient-to-r from-opai-lightGray/30 to-opai-lightGray/20 backdrop-blur-sm rounded-3xl p-8 border border-opai-gold/10 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-opai-gold mb-4">Outras Formas de Ajudar</h3>
            <p className="text-gray-300">Pequenas ações também fazem uma grande diferença</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🍖", title: "Doe Ração", desc: "Ração para cães e gatos" },
              { icon: "💊", title: "Medicamentos", desc: "Remédios e materiais veterinários" },
              { icon: "🏠", title: "Lar Temporário", desc: "Abrigue temporariamente" },
              { icon: "📢", title: "Divulgue", desc: "Compartilhe nosso trabalho" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-opai-darkGray/20 border border-opai-gold/10 hover:border-opai-gold/30 transition-all duration-300">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="text-opai-gold font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
