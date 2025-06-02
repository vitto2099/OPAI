
const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              OPAI - Anjos de Patas
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Organização sem fins lucrativos dedicada à proteção e resgate de animais 
              em situação de risco em Itaiópolis/SC.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-4">Contato</h4>
            <div className="space-y-2 text-gray-200">
              <p>📞 +55 47 9944-4486</p>
              <p>📧 Leocádia Schneider</p>
              <p>📍 Itaiópolis/SC</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-4">Redes Sociais</h4>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/opai_anjosdepatas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-yellow-500 transition-colors flex items-center"
              >
                📸 @opai_anjosdepatas
              </a>
              <a
                href="https://wa.me/5547999444486"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-yellow-500 transition-colors flex items-center"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-yellow-500/20 mt-12 pt-8 text-center">
          <div className="mb-4">
            <p className="text-gray-200 text-sm">
              <strong>PIX para doações:</strong> 23.258.497/0001-48 (CNPJ)
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 OPAI - Anjos de Patas. Todos os direitos reservados. 
            Cada vida importa. ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
