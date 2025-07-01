
import { Shield, Users, Clock, Award, Globe, FileCheck } from "lucide-react";

const Diferenciais = () => {
  // Lista de diferenciais da empresa
  const diferenciais = [
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Certificação Confiável",
      description:
        "Processos rigorosos que garantem a credibilidade e o reconhecimento internacional das nossas certificações.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Equipe Especializada",
      description:
        "Profissionais com formação técnica e vasta experiência no setor de certificação de produtos vegetais.",
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Agilidade no Processo",
      description:
        "Metodologia otimizada para oferecer certificações em tempo reduzido sem comprometer a qualidade.",
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: "Reconhecimento Internacional",
      description:
        "Nossas certificações são reconhecidas nos principais mercados globais, facilitando a exportação.",
    },
    {
      icon: <FileCheck className="h-7 w-7" />,
      title: "Conformidade Legal",
      description:
        "Garantimos que os produtos certificados atendam a todas as exigências legais nacionais e internacionais.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-proquality-dark mb-4">
            Nossos Diferenciais
          </h2>
          <div className="w-20 h-1 bg-proquality-secondary mb-6"></div>
<p className="text-gray-600 max-w-3xl text-lg md:text-xl">
            Conheça o que torna a Proquality referência em certificação de produtos vegetais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="bg-proquality-light p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="bg-proquality-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-proquality-dark mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
