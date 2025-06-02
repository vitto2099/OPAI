
const Footer = () => {
  return (
    <footer className="bg-opai-darkGray border-t border-opai-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-3xl font-bold text-opai-gold">
              OPAI - Anjos de Patas
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Organização sem fins lucrativos dedicada à proteção e resgate de animais 
              em situação de risco em Itaiópolis/SC. Cada vida importa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/opai_anjosdepatas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white text-lg">📸</span>
              </a>
              <a
                href="https://wa.me/5547999444486"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white text-lg">💬</span>
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-opai-gold">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+55 47 9944-4486</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>👤</span>
                <span>Leocádia Schneider</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Itaiópolis/SC</span>
              </div>
            </div>
          </div>
          
          {/* Donation Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-opai-gold">Doações</h4>
            <div className="space-y-3">
              <div className="bg-opai-lightGray/30 p-4 rounded-2xl border border-opai-gold/20">
                <p className="text-opai-gold font-semibold text-sm mb-1">PIX para doações:</p>
                <p className="text-white font-mono text-sm bg-opai-darkGray/50 px-2 py-1 rounded">
                  23.258.497/0001-48
                </p>
                <p className="text-gray-400 text-xs mt-1">CNPJ da OPAI</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-opai-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 OPAI - Anjos de Patas. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Cada vida importa</span>
              <span className="text-opai-gold">❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
