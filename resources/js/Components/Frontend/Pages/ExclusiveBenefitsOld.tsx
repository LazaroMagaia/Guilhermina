
interface Benefit {
    id: number;
    title: string;
    description: string;
    iconClass: string;
  }
  
  const ExclusiveBenefits = () => {
    // Array de benefícios exclusivos
    const benefits: Benefit[] = [
      {
        id: 1,
        title: 'Entrega Grátis',
        description: 'Oferecemos Entrega grátis para compras acima de um valor específico e no centro da '+
        'cidade de Maputo',
        iconClass: 'fas fa-truck', // Usando a classe do ícone diretamente
      },
      {
        id: 2,
        title: 'Atendimento Personalizado',
        description: 'Nosso atendimento é feito de forma personalizada para atender às suas necessidades.',
        iconClass: 'fas fa-headset',
      },
      {
        id: 3,
        title: 'Descontos Exclusivos',
        description: 'Descontos exclusivos para clientes cadastrados ou compras recorrentes.',
        iconClass: 'fas fa-gift',
      },
      {
        id: 4,
        title: 'Segurança no Pagamento',
        description: 'Garantimos a segurança dos seus dados e transações com criptografia de ponta.',
        iconClass: 'fas fa-lock',
      },
    ];
  
    return (
      <>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 text-center">
                <h1 className="text-lg md:text-3xl font-bold mb-8">
                  Nos providenciamos a melhor experiência aos nossos clientes
                </h1>
                <div className="flex justify-center items-center space-x-2 border-t-2 pt-4">
                  <p className="text-[#333] text-sm md:text-lg">
                    Nos encarregamos de providenciar a melhor experiência de compra para nossos clientes.
                  </p>
                </div>
              </div>
              {/* Benefícios */}
              <div className="col-span-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit) => (
                    <div key={benefit.id} className="p-6 hover:shadow-lg transition-shadow duration-300 
                      bg-white rounded-lg group hover:bg-[#1641BA]">
                      <div className="text-4xl text-black bg-gray-100 w-20 p-4 mb-4 flex justify-center
                        items-center group-hover:text-white  group-hover:bg-transparent">
                        {/* Usando a tag <i> com a classe do ícone */}
                        <i className={benefit.iconClass+' group-hover:text-white '}/>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-white">{benefit.title}</h3>
                      <p className="group-hover:text-white">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default ExclusiveBenefits;
  