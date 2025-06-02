
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
    <section id="contato" className="py-20 bg-gradient-to-b from-opai-lightGray to-opai-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Entre em</span> <span className="text-opai-gold">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-opai-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos sempre prontos para ouvir você. Fale conosco sobre adoções, voluntariado ou qualquer dúvida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-opai-gold mb-6">Fale Conosco</h3>
              
              {/* Phone Contact */}
              <div className="group bg-gradient-to-r from-opai-lightGray/50 to-opai-lightGray/30 backdrop-blur-sm border border-opai-gold/10 rounded-3xl p-6 hover:border-opai-gold/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-opai-gold to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-opai-darkGray" />
                  </div>
                  <div>
                    <h4 className="text-opai-gold font-bold text-lg">Leocádia Schneider</h4>
                    <a
                      href="tel:+5547999444486"
                      className="text-white hover:text-opai-gold transition-colors text-lg font-medium"
                    >
                      +55 47 9944-4486
                    </a>
                    <p className="text-gray-400 text-sm">Coordenadora da OPAI</p>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/5547999444486?text=Olá! Vim através do site da OPAI"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-3xl p-6 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-green-500/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">WhatsApp</h4>
                    <p className="text-green-100">Clique aqui para conversar</p>
                    <p className="text-green-200 text-sm">Resposta rápida garantida</p>
                  </div>
                </div>
              </a>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/opai_anjosdepatas"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 rounded-3xl p-6 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-pink-600 font-bold text-2xl">📸</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Instagram</h4>
                    <p className="text-purple-100">@opai_anjosdepatas</p>
                    <p className="text-purple-200 text-sm">Acompanhe nossos resgates</p>
                  </div>
                </div>
              </a>
              
              {/* Location */}
              <div className="bg-gradient-to-r from-opai-lightGray/50 to-opai-lightGray/30 backdrop-blur-sm border border-opai-gold/10 rounded-3xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-opai-gold to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-opai-darkGray font-bold text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-opai-gold font-bold text-lg">Localização</h4>
                    <p className="text-white">Itaiópolis, Santa Catarina</p>
                    <p className="text-gray-400 text-sm">Atendemos toda a região</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-opai-lightGray/50 to-opai-lightGray/30 backdrop-blur-sm border border-opai-gold/10 rounded-3xl p-8 hover:border-opai-gold/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-opai-gold">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-opai-darkGray/50 backdrop-blur-sm border border-opai-gold/20 rounded-2xl text-white focus:border-opai-gold focus:outline-none transition-all duration-300"
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
                    className="w-full px-4 py-4 bg-opai-darkGray/50 backdrop-blur-sm border border-opai-gold/20 rounded-2xl text-white focus:border-opai-gold focus:outline-none transition-all duration-300"
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
                    className="w-full px-4 py-4 bg-opai-darkGray/50 backdrop-blur-sm border border-opai-gold/20 rounded-2xl text-white focus:border-opai-gold focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-opai-gold to-yellow-500 hover:from-yellow-500 hover:to-opai-gold text-black font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-opai-gold/30"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
