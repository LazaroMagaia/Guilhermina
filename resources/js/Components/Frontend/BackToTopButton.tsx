import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para exibir ou esconder o botão dependendo da rolagem da página
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Hook para monitorar a rolagem da página
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-[#1641BA] text-white w-12 h-12 flex items-center justify-center
            rounded-full shadow-lg hover:bg-[#FF7F01] transition duration-300 z-[999]"
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
