
const About = () => {
  return (
    <section id="quem-somos" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-500">
            Quem Somos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-500">Nossa Missão</h3>
                <p className="text-gray-200 leading-relaxed">
                  Proteger e resgatar animais em situação de risco no município de Itaiópolis/SC, 
                  proporcionando cuidados veterinários, abrigo temporário e encontrando lares 
                  amorosos para cada um deles.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-500">Nossa Visão</h3>
                <p className="text-gray-200 leading-relaxed">
                  Um futuro onde todos os animais sejam tratados com dignidade e respeito, 
                  livres de maus-tratos e abandono, vivendo em lares seguros e amorosos.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-500">Nossos Valores</h3>
                <ul className="text-gray-200 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Compaixão e empatia por todos os seres vivos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Transparência em todas as nossas ações
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Compromisso com o bem-estar animal
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Trabalho em equipe e voluntariado
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="border-4 border-yellow-500 rounded-lg overflow-hidden shadow-2xl hover:shadow-yellow-500/25 transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=800&q=80"
                  alt="Voluntários da OPAI cuidando de um animal resgatado"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black p-4 rounded-lg font-bold shadow-lg">
                <p className="text-sm">Nossos voluntários</p>
                <p className="text-lg">em ação!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
