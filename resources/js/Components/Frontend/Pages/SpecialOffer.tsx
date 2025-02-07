
import { Link } from '@inertiajs/react'; // Usando Link para navegação

const SpecialOffer: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 md:col-span-5'>
                        <img
                            src={'/images/products/01.jpg'}
                            alt={'Special Offer'}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className='col-span-12 md:col-span-7 bg-[#1741BA] p-8 text-white'>
                        <p>Oferta limitada</p>
                        <h2 className="text-3xl font-bold md:text-start text-center mb-8">
                            35% de desconto em todos os servicos só nesta semana
                        </h2>
                        <Link href={route('services')}>
                            <button className="text-white py-2 px-4 rounded-md 
                                border-[2px] border-[#ccc] hover:border-white">
                                Ver servicos
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
