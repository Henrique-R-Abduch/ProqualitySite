
import { CheckCircle } from "lucide-react";

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="section bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-proquality-dark mb-4">
            Quem Somos
          </h2>
      <div className="w-20 h-1 bg-proquality-secondary mb-6"></div>

<p className="text-gray-600 max-w-3xl text-lg md:text-xl">
  Conheça a Proquality e nossa história de excelência em certificação de produtos vegetais
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <div>
    <h3 className="text-2xl font-bold text-proquality-primary mb-6">
      Nossa História
    </h3>
    <p className="text-gray-700 mb-6 text-base md:text-xl">
      Fundada em 2002, a Proquality nasceu com o propósito de garantir a qualidade e procedência de produtos vegetais através de um rigoroso processo de certificação. Nossa trajetória é marcada pelo compromisso com a excelência e responsabilidade socioambiental.
    </p>
    <p className="text-gray-700 mb-6 text-base md:text-xl">
      Ao longo de mais de 15 anos de atuação, desenvolvemos metodologias próprias de avaliação que se tornaram referência no mercado, atendendo desde pequenos produtores locais até grandes empresas do agronegócio.
    </p>

    <h3 className="text-2xl font-bold text-proquality-primary mb-6 mt-10">
      Por que escolher a Proquality?
    </h3>
    <ul className="space-y-4">
      {[
        "Equipe técnica altamente qualificada",
        "Certificação reconhecida internacionalmente",
        "Atendimento personalizado para cada cliente",
        "Compromisso com a sustentabilidade",
        "Metodologia transparente e rigorosa"
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="h-6 w-6 text-proquality-primary mr-3 shrink-0 mt-0.5" />
          <span className="text-gray-700 text-base md:text-lg">{item}</span>
        </li>
      ))}
    </ul>
  </div>
  <div className="relative">
    <div className="rounded-lg overflow-hidden shadow-xl">
      <img
        src="/images/certificado.jpg"
        alt="Laboratório Proquality"
        className="w-full h-auto"
      />
    </div>
   <div className="bg-proquality-primary text-white p-6 rounded-lg shadow-lg max-w-xs 
                md:absolute md:-bottom-8 md:-left-8 md:block mx-auto mt-6 md:mt-0">
  <p className="font-semibold text-sm md:text-base text-center md:text-left">
    "Nosso compromisso é garantir que cada produto certificado atenda aos mais altos padrões de qualidade e sustentabilidade."
  </p>
</div>
  </div>
</div>
      </div>
    </section>
  );
};

export default QuemSomos;
