import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import Swal from 'sweetalert2';

export default function Contact() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    contact: "",
    eventType: "",
    location: "",
    preferences: "",
    file: null,
    meeting: false,
  });

  const handleChange = (e: any) => {
    const { name, type, checked, files, value } = e.target;
    setData(name, type === "checkbox" ? checked : type === "file" ? files[0] : value);
  };

  const handleSubmit = (e: FormEvent) => {
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
        // Exibindo o alerta de sucesso com SweetAlert
        Swal.fire({
          title: 'Mensagem enviada com sucesso!',
          text: 'Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.',
          icon: 'success',
          confirmButtonText: 'Fechar',
        });
      },
      onError: () => {
        // Exibindo o alerta de erro com SweetAlert
        Swal.fire({
          title: 'Houve um erro!',
          text: 'Por favor, verifique os campos e tente novamente.',
          icon: 'error',
          confirmButtonText: 'Fechar',
        });
      },
    });
  };

  return (
    <div className='bg-[#1641BA] py-10'>
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Nome</label>
              <input 
                type="text" 
                name="name" 
                value={data.name} 
                onChange={handleChange} 
                className="w-full border p-2 rounded text-gray-900" 
                placeholder="Seu nome completo"
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>
            <div>
              <label className="block font-medium text-gray-700">Contato</label>
              <input 
                type="text" 
                name="contact" 
                value={data.contact} 
                onChange={handleChange} 
                className="w-full border p-2 rounded text-gray-900" 
                placeholder="Telefone ou e-mail"
              />
              {errors.contact && <div className="text-red-500">{errors.contact}</div>}
            </div>
            <div>
              <label className="block font-medium text-gray-700">Tipo de Evento</label>
              <input 
                type="text" 
                name="eventType" 
                value={data.eventType} 
                onChange={handleChange} 
                className="w-full border p-2 rounded text-gray-900" 
                placeholder="Casamento, aniversário, etc."
              />
              {errors.eventType && <div className="text-red-500">{errors.eventType}</div>}
            </div>
            <div>
              <label className="block font-medium text-gray-700">Localização</label>
              <input 
                type="text" 
                name="location" 
                value={data.location} 
                onChange={handleChange} 
                className="w-full border p-2 rounded text-gray-900" 
                placeholder="Cidade, endereço..."
              />
              {errors.location && <div className="text-red-500">{errors.location}</div>}
            </div>
            <div>
              <label className="block font-medium text-gray-700">Preferências</label>
              <textarea 
                name="preferences" 
                value={data.preferences} 
                onChange={handleChange} 
                className="w-full border p-2 rounded text-gray-900" 
                placeholder="Explique suas preferências..."
              />
              {errors.preferences && <div className="text-red-500">{errors.preferences}</div>}
            </div>
            <div>
              <label className="block font-medium text-gray-700">Anexar Documento (se necessário)</label>
              <input 
                type="file" 
                name="file" 
                onChange={handleChange} 
                className="w-full border p-2 rounded text-gray-900"
              />
              {errors.file && <div className="text-red-500">{errors.file}</div>}
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="meeting" 
                checked={data.meeting} 
                onChange={handleChange} 
                className="mr-2"
              />
              <label className="font-medium text-gray-700">Desejo agendar uma reunião online</label>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#1641BA] text-white py-2 rounded hover:bg-[#FF7F01] transition"
              disabled={processing}
            >
              {processing ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
    </div>
  );
}
