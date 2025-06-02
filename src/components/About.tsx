
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-opai-darkGray to-opai-lightGray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-opai-gold">Sobre</span> <span className="text-white">a OPAI</span>
            </h2>
            <div className="w-24 h-1 bg-opai-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="bg-opai-lightGray/50 p-8 rounded-3xl border border-opai-gold/10 hover:border-opai-gold/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-opai-gold rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-opai-gold">Nossa Missão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Proteger e resgatar animais em situação de risco no município de Itaiópolis/SC, 
                  proporcionando cuidados veterinários, abrigo temporário e encontrando lares 
                  amorosos para cada um deles.
                </p>
              </div>
              
              <div className="bg-opai-lightGray/50 p-8 rounded-3xl border border-opai-gold/10 hover:border-opai-gold/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-opai-gold rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xl">🌟</span>
                  </div>
                  <h3 className="text-2xl font-bold text-opai-gold">Nossa Visão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Um futuro onde todos os animais sejam tratados com dignidade e respeito, 
                  livres de maus-tratos e abandono, vivendo em lares seguros e amorosos.
                </p>
              </div>
              
              <div className="bg-opai-lightGray/50 p-8 rounded-3xl border border-opai-gold/10 hover:border-opai-gold/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-opai-gold rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-bold text-opai-gold">Nossos Valores</h3>
                </div>
                <ul className="text-gray-300 space-y-3">
                  {[
                    'Compaixão e empatia por todos os seres vivos',
                    'Transparência em todas as nossas ações',
                    'Compromisso com o bem-estar animal',
                    'Trabalho em equipe e voluntariado'
                  ].map((value, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-opai-gold rounded-full"></div>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-opai-gold/20 group">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80"
                  alt="Voluntários da OPAI cuidando de um animal resgatado"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-opai-darkGray/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-opai-gold/90 backdrop-blur-sm p-4 rounded-2xl">
                    <p className="text-opai-darkGray font-bold text-lg">Nossos voluntários</p>
                    <p className="text-opai-darkGray">em ação salvando vidas!</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-opai-gold rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-opai-gold rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            {[
              { number: '150+', label: 'Animais Resgatados' },
              { number: '120+', label: 'Adoções Realizadas' },
              { number: '5+', label: 'Anos de Atividade' },
              { number: '30+', label: 'Voluntários Ativos' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-opai-lightGray/30 p-6 rounded-2xl border border-opai-gold/10 hover:border-opai-gold/30 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-opai-gold mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
