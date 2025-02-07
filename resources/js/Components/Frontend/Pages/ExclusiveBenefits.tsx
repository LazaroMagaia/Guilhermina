
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
   
  ];

  return (
    <>
      <section className="">
        <div className="mx-auto bg-[#1641BA] text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-12 gap-6">
              {benefits.map((benefit) => (
                <div className="col-span-12 md:col-span-4">
                    <h1 className="text-lg md:text-2xl font-semibold text-center md:text-start">   
                      {benefit.title}
                    </h1>
                    <p className="text-sm md:text-lg text-center md:text-start">
                      {benefit.description}
                    </p>
                </div>
              ))}
                
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ExclusiveBenefits;
