
import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import Produtos from "@/components/Produtos";
import Diferenciais from "@/components/Diferenciais";
import MissaoVisaoValores from "@/components/MissaoVisaoValores";
import Estatisticas from "@/components/Estatisticas";
import Contato from "@/components/Contato";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Proquality - Certificação de Produtos Vegetais";
    
    // Função para animar elementos quando entram na viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Seleciona todos os elementos que devem ser animados
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    // Limpa o observer quando componente for desmontado
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      <Hero />
      <QuemSomos />
      <Estatisticas />
      <Produtos />
      <Diferenciais />
      <MissaoVisaoValores />
      <Contato />
    </div>
  );
};

export default Index;
