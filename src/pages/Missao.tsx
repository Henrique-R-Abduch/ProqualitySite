
import { useEffect } from "react";
import { Target, Eye, Heart, CheckCircle2, Globe, Leaf, Users, Shield, Award } from "lucide-react";

const MissaoPage = () => {
  useEffect(() => {
    document.title = "Missão, Visão e Valores | Proquality";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28">
      <section className="bg-proquality-light py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-proquality-dark mb-4">
              Missão, Visão e Valores
            </h1>
            <div className="w-20 h-1 bg-proquality-secondary mb-6"></div>
<p className="text-gray-600 max-w-3xl text-lg md:text-xl">
              Conheça os princípios que fundamentam nosso trabalho e direcionam nossas ações
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Missão */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-proquality-primary w-24 h-24 rounded-full flex items-center justify-center mb-8 text-white">
                <Target className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold text-proquality-dark mb-6">
                Missão
              </h2>
              <p className="text-gray-700">
                Garantir a qualidade, procedência e sustentabilidade de produtos vegetais através de processos de certificação transparentes e rigorosos, promovendo práticas responsáveis em toda a cadeia produtiva e gerando valor para produtores, indústria e consumidores.
              </p>
              <div className="mt-8 w-16 h-1 bg-proquality-secondary"></div>
            </div>

            {/* Visão */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-proquality-primary w-24 h-24 rounded-full flex items-center justify-center mb-8 text-white">
                <Eye className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold text-proquality-dark mb-6">
                Visão
              </h2>
              <p className="text-gray-700">
                Ser referência global em certificação de produtos vegetais, liderando a transformação do setor rumo a práticas mais sustentáveis e transparentes, contribuindo para um futuro alimentar mais saudável, justo e ecologicamente equilibrado em todos os continentes.
              </p>
              <div className="mt-8 w-16 h-1 bg-proquality-secondary"></div>
            </div>

            {/* Valores */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-proquality-primary w-24 h-24 rounded-full flex items-center justify-center mb-8 text-white">
                <Heart className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold text-proquality-dark mb-6">
                Valores
              </h2>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-proquality-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integridade e transparência em todos os processos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-proquality-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Compromisso com a sustentabilidade ambiental</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-proquality-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Excelência técnica e inovação constante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-proquality-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Responsabilidade social e ética nos negócios</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-proquality-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Valorização das pessoas e do conhecimento</span>
                </li>
              </ul>
              <div className="mt-8 w-16 h-1 bg-proquality-secondary"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-proquality-gray">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-proquality-dark mb-10 text-center">
              Nossos Compromissos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-start mb-6">
                  <div className="bg-proquality-light w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 text-proquality-primary">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-proquality-dark mb-2">
                      Sustentabilidade
                    </h3>
                    <p className="text-gray-600">
                      Promovemos práticas de produção que respeitam o meio ambiente e os ecossistemas naturais, incentivando o uso responsável de recursos e a conservação da biodiversidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="bg-proquality-light w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 text-proquality-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-proquality-dark mb-2">
                      Desenvolvimento Social
                    </h3>
                    <p className="text-gray-600">
                      Apoiamos iniciativas que valorizam as comunidades locais e promovem condições de trabalho dignas e justas em toda a cadeia de produção vegetal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-start mb-6">
                  <div className="bg-proquality-light w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 text-proquality-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-proquality-dark mb-2">
                      Segurança Alimentar
                    </h3>
                    <p className="text-gray-600">
                      Garantimos que os produtos certificados sejam seguros para o consumo, livres de contaminantes e produzidos seguindo as melhores práticas de higiene e segurança.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="bg-proquality-light w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 text-proquality-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-proquality-dark mb-2">
                      Excelência
                    </h3>
                    <p className="text-gray-600">
                      Buscamos continuamente a melhoria dos nossos processos e serviços, investindo em tecnologia, pesquisa e capacitação para oferecer certificações com o mais alto padrão de qualidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-proquality-light w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 text-proquality-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-proquality-dark mb-2">
                      Transparência
                    </h3>
                    <p className="text-gray-600">
                      Adotamos processos claros e auditáveis, com critérios objetivos de avaliação e comunicação aberta com todos os nossos stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissaoPage;
