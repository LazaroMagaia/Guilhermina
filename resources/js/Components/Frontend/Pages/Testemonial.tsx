
interface Testimonial {
  id: number;
  name: string;
  message: string;
  image: string;
}

const Testimonials = () => {
  // Array de depoimentos de clientes
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'João Silva',
      message: 'Ótimos fogos de artifício, fizeram minha festa brilhar! Super recomendo a loja.',
      image: '/images/products/01.jpg',
    },
    {
      id: 2,
      name: 'Maria Fernandes',
      message: 'Adorei os produtos! A qualidade é excelente e o atendimento foi maravilhoso.',
      image: '/images/products/01.jpg',
    },
    {
      id: 3,
      name: 'Carlos Costa',
      message: 'Os fogos são incríveis! Mais do que o esperado, trouxe muita diversão para o evento.',
      image: '/images/products/01.jpg',
    },
    {
      id: 4,
      name: 'Ana Pereira',
      message: 'Comprei para o Ano Novo e fiquei muito satisfeita. Todos amaram os fogos!',
      image: '/images/products/01.jpg',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 ">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-start mb-8">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-base">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
