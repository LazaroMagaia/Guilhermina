import { useForm, Head, usePage } from '@inertiajs/react';
import Frontend from '@/Layouts/FrontendLayout';
import Swal from 'sweetalert2';
import { FormEvent } from 'react';

export default function ContactPage() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        contact: '',
        eventType: '',
        location: '',
        preferences: '',
        file: null as File | null, 
        meeting: false as boolean, 
    });

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        post(route("contact.send"), { 
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    name: "",
                    contact: "",
                    eventType: "",
                    location: "",
                    preferences: "",
                    file: null,
                    meeting: false,
                  });
                // Exibindo o SweetAlert para sucesso
                Swal.fire({
                    title: 'E-mail enviado com sucesso!',
                    text: 'Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.',
                    icon: 'success',
                    confirmButtonText: 'Fechar',
                });
            },
            onError: () => {
                // Exibindo o SweetAlert para erro
                Swal.fire({
                    title: 'Erro ao enviar o e-mail!',
                    text: 'Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente.',
                    icon: 'error',
                    confirmButtonText: 'Fechar',
                });
            }
        });
    };

    return (
        <Frontend>
            <Head title="Contacto" />
            <div className="py-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-12 gap-4 mx-2">
                    <div className="col-span-12 md:col-span-6">
                        <div className='flex gap-2 my-2'>
                            <div className='border w-12 h-12 flex items-center justify-center rounded-md'>
                                <i className="fa-solid fa-comments"></i>
                            </div>

                            <div>
                                <h1 className='text-xl md:text-3xl font-semibold'>Fale Conosco</h1>
                                <p>Estamos sempre prontos para ajudá-lo.</p>
                                <p className='text-md font-semibold'>suporte@infinityfireworks.co.mz</p>
                            </div>
                        </div>

                        <div className='flex gap-2 my-4'>
                            <div className='border w-12 h-12 flex items-center justify-center rounded-md'>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>

                            <div>
                                <h1 className='text-xl md:text-3xl font-semibold'>Visite-nos</h1>
                                <p>Venha nos visitar em nosso escritório.</p>
                                <p className='text-md font-semibold'>Moçambique, Maputo, UEM, 1360</p>
                            </div>
                        </div>

                        <div className='flex gap-2 my-4'>
                            <div className='border w-12 h-12 flex items-center justify-center rounded-md'>
                                <i className="fa-solid fa-phone"></i>
                            </div>

                            <div>
                                <h1 className='text-xl md:text-3xl font-semibold'>Ligue para nós</h1>
                                <p>Segunda a sábado, das 8:30 às 15:30.</p>
                                <p className='text-md font-semibold'>+258 87 377 3493</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <h1 className="text-xl md:text-3xl font-semibold">
                            Tens uma ideia? Nós temos as habilidades para torná-la realidade
                        </h1>
                        <p className="text-md">
                            Conte-nos sobre o seu projeto e entraremos em contato consigo o mais rápido possível.
                        </p>

                        <form onSubmit={submitForm} className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-6">
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={data.name} 
                                    onChange={e => setData('name', e.target.value)} 
                                    placeholder="Nome"
                                    className="w-full p-2 border-0 border-b-4 outline-0 focus:outline-0 focus:ring-0 focus:border-gray-500"
                                />
                                {errors.name && <div className="text-red-500">{errors.name}</div>}
                            </div>

                            <div className="col-span-12 md:col-span-6">
                                <input 
                                    type="text" 
                                    name="contact" 
                                    value={data.contact} 
                                    onChange={e => setData('contact', e.target.value)} 
                                    placeholder="Telefone ou Email"
                                    className="w-full p-2 border-0 border-b-4 outline-0 focus:outline-0 focus:ring-0 focus:border-gray-500"
                                />
                                {errors.contact && <div className="text-red-500">{errors.contact}</div>}
                            </div>

                            <div className="col-span-12 md:col-span-8">
                                <input 
                                    type="text" 
                                    name="eventType" 
                                    value={data.eventType} 
                                    onChange={e => setData('eventType', e.target.value)} 
                                    placeholder="Tipo de Evento"
                                    className="w-full p-2 border-0 border-b-4 outline-0 focus:outline-0 focus:ring-0 focus:border-gray-500"
                                />
                                {errors.eventType && <div className="text-red-500">{errors.eventType}</div>}
                            </div>

                            <div className="col-span-12">
                                <input 
                                    type="text" 
                                    name="location" 
                                    value={data.location} 
                                    onChange={e => setData('location', e.target.value)} 
                                    placeholder="Localização"
                                    className="w-full p-2 border-0 border-b-4 outline-0 focus:outline-0 focus:ring-0 focus:border-gray-500"
                                />
                                {errors.location && <div className="text-red-500">{errors.location}</div>}
                            </div>

                            <div className="col-span-12">
                                <textarea 
                                    name="preferences" 
                                    value={data.preferences} 
                                    onChange={e => setData('preferences', e.target.value)} 
                                    placeholder="Preferências"
                                    className="w-full p-2 border-0 border-b-4 outline-0 focus:outline-0
                                    focus:ring-0 focus:border-gray-500"
                                />
                                {errors.preferences && <div className="text-red-500">{errors.preferences}</div>}
                            </div>

                            <div className="col-span-12">
                                <label className="block font-medium text-gray-700">
                                    Anexar Documento (se necessário)
                                </label>
                                <input 
                                    type="file" 
                                    name="file"
                                    onChange={e => {
                                        const file = e.target.files ? e.target.files[0] : null;
                                        setData('file', file);
                                    }}
                                    className="w-full border p-2 rounded text-gray-900"
                                />
                                {errors.file && <div className="text-red-500">{errors.file}</div>}
                            </div>

                            {/* Adicionando o checkbox */}
                            <div className="col-span-12 flex items-center">
                                <input 
                                    type="checkbox" 
                                    name="meeting" 
                                    checked={data.meeting} 
                                    onChange={e => setData('meeting', e.target.checked)} 
                                    className="mr-2"
                                />
                                <label className="font-medium text-gray-700">Desejo agendar uma reunião online</label>
                            </div>

                            <button 
                                type="submit" 
                                disabled={processing} 
                                className="col-span-12 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                            >
                                {processing ? 'Enviando...' : 'Enviar'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Frontend>
    );
}
