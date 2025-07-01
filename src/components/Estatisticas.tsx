
import { useState, useEffect } from "react";

const Estatisticas = () => {
  // Estatísticas da empresa (removido "Países Atendidos")
  const stats = [
    { id: 1, value: 20, label: "Anos de Experiência" },
    { id: 2, value: 500, label: "Clientes Atendidos" },
    { id: 3, value: 3000, label: "Produtos Certificados" },
  ];

  // Estado para armazenar os valores contados
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Efeito para animar a contagem quando o componente estiver visível
  useEffect(() => {
    // Função para verificar se o elemento está visível na tela
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Inicia a contagem quando o elemento estiver visível
          startCounting();
          // Desconecta o observer após iniciar a contagem
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Observa o elemento de estatísticas
    const statsElement = document.getElementById("estatisticas");
    if (statsElement) {
      observer.observe(statsElement);
    }

    // Função para animar a contagem
    const startCounting = () => {
      stats.forEach((stat, index) => {
        const target = stat.value;
        const duration = 2000; // Duração da animação em ms
        const step = target / (duration / 16); // 60fps
        const startTime = performance.now();

        function updateCount(currentTime: number) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const newValue = Math.floor(target * progress);

          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = newValue;
            return newCounts;
          });

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        }

        requestAnimationFrame(updateCount);
      });
    };

    // Limpeza do observer quando componente for desmontado
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="estatisticas"
      className="section bg-proquality-primary text-white py-20"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.id} className="px-4">
              <div className="text-5xl lg:text-6xl font-bold mb-2">
                {counts[index]}+
              </div>
              <div className="text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estatisticas;
