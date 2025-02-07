import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    try {
      // Enviar a requisição com o Axios
      const response = await axios.post('/newsletter/subscribe', { email });

      // Se a resposta for bem-sucedida
      setEmail(''); // Limpar o campo de email
      Swal.fire({
        title: 'Inscrição realizada com sucesso!',
        text: 'Agora você está inscrito na nossa newsletter.',
        icon: 'success',
        confirmButtonText: 'Fechar',
      });
      setProcessing(false);
    } catch (error: any) {
      // Se houver erro, exibir os erros no SweetAlert
      const errorMessage = error.response?.data?.message || 'Houve um erro!';
      const emailError = error.response?.data?.errors?.email?.[0];

      setErrors(error.response.data.errors || {});
      setProcessing(false);

      // Exibir SweetAlert com a mensagem de erro do backend
      Swal.fire({
        title: 'Houve um erro!',
        text: emailError || errorMessage, // Exibe o erro de email ou a mensagem genérica
        icon: 'error',
        confirmButtonText: 'Fechar',
      });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Seção de Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-sm mb-4">Somos uma loja especializada em fogos de artifício, oferecendo produtos de qualidade e um atendimento diferenciado.</p>
            <Link href="/about" className="text-blue-400 hover:underline">Saiba mais</Link>
          </div>

          {/* Seção de Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-blue-400 hover:underline">Produtos</Link></li>
              <li><Link href="/categories" className="text-blue-400 hover:underline">Categorias</Link></li>
              <li><Link href="/contact" className="text-blue-400 hover:underline">Contato</Link></li>
              <li><Link href="/faq" className="text-blue-400 hover:underline">FAQ</Link></li>
            </ul>
          </div>

          {/* Seção de Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook text-2xl hover:text-blue-500" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram text-2xl hover:text-pink-500" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter text-2xl hover:text-blue-400" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <i className="fab fa-linkedin text-2xl hover:text-blue-700" />
              </Link>
            </div>
          </div>

          {/* Seção de Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Assine nossa Newsletter</h3>
            <p className="text-sm mb-4">Receba novidades e ofertas exclusivas diretamente no seu e-mail.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="w-full p-2 text-black rounded-md mb-4"
              />
              
              {/* Exibir os erros do backend */}
              {/*errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email[0]}</div>
              )*/}

              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 w-full rounded-md"
                disabled={processing}
              >
                {processing ? 'Enviando...' : 'Inscrever-se'}
              </button>
            </form>
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2025 Sua Loja de Fogos de Artifício. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
