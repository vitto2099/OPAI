
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse em ajudar!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-500">
          Entre em Contato
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">Fale Conosco</h3>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                Estamos sempre prontos para ouvir você. Entre em contato para adoções, 
                voluntariado, doações ou qualquer dúvida sobre nosso trabalho.
              </p>
            </div>
            
            {/* Telefone */}
            <div className="bg-gradient-to-r from-gray-900 to-black border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-500 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xl">📞</span>
                </div>
                <div>
                  <h4 className="text-yellow-500 font-bold text-lg">Leocádia Schneider</h4>
                  <a
                    href="tel:+5547999444486"
                    className="text-white hover:text-yellow-500 transition-colors text-lg"
                  >
                    +55 47 9944-4486
                  </a>
                </div>
              </div>
            </div>
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/5547999444486?text=Olá! Vim através do site da OPAI"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 hover:bg-green-500 rounded-lg p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl">💬</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">WhatsApp</h4>
                  <p className="text-green-100">Clique aqui para conversar</p>
                </div>
              </div>
            </a>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/opai_anjosdepatas"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-xl">📸</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Instagram</h4>
                  <p className="text-purple-100">@opai_anjosdepatas</p>
                </div>
              </div>
            </a>
          </div>
          
          {/* Formulário */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-500">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                  placeholder="Como podemos ajudar você?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
