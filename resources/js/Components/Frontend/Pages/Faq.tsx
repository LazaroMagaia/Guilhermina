import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Os fogos de artifício são seguros?",
    answer: "Sim! Trabalhamos apenas com produtos certificados e seguimos todas as normas de segurança para garantir o melhor para nossos clientes."
  },
  {
    question: "Vocês fazem entrega?",
    answer: "Sim, realizamos entregas em diversas regiões. Entre em contato para saber mais sobre disponibilidade e taxas."
  },
  {
    question: "Preciso de autorização para usar fogos de artifício?",
    answer: "Dependendo da sua localização e do tipo de evento, pode ser necessário um licenciamento. Consulte as autoridades locais para mais informações."
  },
  {
    question: "Vocês oferecem pacotes personalizados?",
    answer: "Sim! Podemos criar pacotes de fogos personalizados de acordo com suas preferências e orçamento."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-gray-200 font-semibold flex justify-between items-center focus:outline-none"
            >
              {faq.question}
              <i className={`fas ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-600`}></i>
            </button>
            {openIndex === index && (
              <motion.div
                className="p-4 bg-white border-t text-gray-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.12 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
