
const Rescues = () => {
  const rescueStories = [
    {
      name: "Larinha",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80",
      story: "Resgatada na beira da rodovia com ferimentos graves, hoje é uma gatinha brincalhona e carinhosa",
      status: "Adotada ❤️",
      statusColor: "bg-green-500"
    },
    {
      name: "Max",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=600&q=80",
      story: "Abandonado em estado crítico de desnutrição, agora é um cãozinho alegre e cheio de energia",
      status: "Disponível para adoção",
      statusColor: "bg-blue-500"
    },
    {
      name: "Luna",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
      story: "Encontrada ferida na mata, se recuperou completamente e busca uma família amorosa",
      status: "Em recuperação",
      statusColor: "bg-yellow-500"
    },
    {
      name: "Thor",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
      story: "Resgatado de maus-tratos, hoje confia novamente nos humanos e espalha alegria",
      status: "Adotado ❤️",
      statusColor: "bg-green-500"
    },
    {
      name: "Bella",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
      story: "Filhote encontrada sozinha na chuva, cresceu forte e saudável graças aos cuidados da OPAI",
      status: "Disponível para adoção",
      statusColor: "bg-blue-500"
    },
    {
      name: "Simba",
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=600&q=80",
      story: "Gato idoso abandonado que encontrou amor e cuidados especiais para seus últimos anos",
      status: "Lar temporário",
      statusColor: "bg-purple-500"
    }
  ];

  return (
    <section id="resgates" className="py-20 bg-gradient-to-b from-opai-lightGray to-opai-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Nossos</span> <span className="text-opai-gold">Resgates</span>
          </h2>
          <div className="w-24 h-1 bg-opai-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada animal tem uma história única de superação. Conheça alguns dos nossos resgates mais especiais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rescueStories.map((rescue, index) => (
            <div
              key={index}
              className="group bg-opai-lightGray/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-opai-gold/10 hover:border-opai-gold/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-opai-gold/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={rescue.image}
                  alt={rescue.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-opai-darkGray/80 via-transparent to-transparent"></div>
                
                {/* Name Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-opai-gold/90 backdrop-blur-sm text-opai-darkGray px-4 py-2 rounded-full font-bold text-lg">
                    {rescue.name}
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`${rescue.statusColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {rescue.status}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-gray-300 leading-relaxed text-sm">
                  {rescue.story}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-opai-gold/20">
                  <span className="text-opai-gold font-semibold text-sm">
                    História de superação
                  </span>
                  <div className="w-8 h-8 bg-opai-gold/20 rounded-full flex items-center justify-center group-hover:bg-opai-gold/30 transition-colors">
                    <span className="text-opai-gold text-lg">❤️</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-opai-lightGray/30 backdrop-blur-sm p-8 rounded-3xl border border-opai-gold/10 max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Estes são apenas alguns dos muitos animais que já salvamos. 
              Cada resgate é uma vitória, cada adoção é uma nova chance de vida.
            </p>
            <a
              href="https://www.instagram.com/opai_anjosdepatas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-opai-gold to-yellow-500 hover:from-yellow-500 hover:to-opai-gold text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-opai-gold/30"
            >
              <span className="mr-3 text-xl">📱</span>
              <span>Ver Mais no Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rescues;
