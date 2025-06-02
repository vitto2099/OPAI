
const Rescues = () => {
  const rescueStories = [
    {
      name: "Larinha",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
      story: "Resgatada na beira da rodovia, agora feliz e adotada",
      status: "Adotada ❤️"
    },
    {
      name: "Max",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=600&q=80",
      story: "Abandonado em estado crítico, hoje é um gatinho brincalhão",
      status: "Disponível para adoção"
    },
    {
      name: "Luna",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80",
      story: "Encontrada ferida na mata, se recuperou completamente",
      status: "Em recuperação"
    },
    {
      name: "Thor",
      image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?auto=format&fit=crop&w=600&q=80",
      story: "Resgatado de maus-tratos, hoje confia novamente nos humanos",
      status: "Adotado ❤️"
    }
  ];

  return (
    <section id="resgates" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-500">
          Nossos Resgates
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rescueStories.map((rescue, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500 rounded-lg overflow-hidden hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
            >
              <div className="relative">
                <img
                  src={rescue.image}
                  alt={rescue.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                  {rescue.name}
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {rescue.story}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-bold">
                    {rescue.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-200 text-lg mb-6">
            Estes são apenas alguns dos muitos animais que já salvamos. 
            Cada resgate é uma vitória, cada adoção é uma nova chance de vida.
          </p>
          <a
            href="https://www.instagram.com/opai_anjosdepatas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span className="mr-2">📱</span>
            Ver Mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rescues;
