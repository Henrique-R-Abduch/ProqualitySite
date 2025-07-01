
import { useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const QuemSomosPage = () => {
  useEffect(() => {
    document.title = "Quem Somos | Proquality";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28">
      <section className="bg-proquality-light py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-proquality-dark mb-4">
              Quem Somos
            </h1>
            <div className="w-20 h-1 bg-proquality-secondary mb-6"></div>
            <p className="text-gray-700 max-w-3xl text-lg">
              Conheça a história e a trajetória da Proquality no setor de certificação de produtos vegetais
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-proquality-primary mb-6">
                Nossa História
              </h2>
<p className="text-gray-700 mb-6 text-base md:text-xl">
                  A Proquality foi fundada em 2002 por um grupo de especialistas em agricultura sustentável que identificaram a necessidade de um sistema de certificação mais rigoroso e transparente para produtos de origem vegetal no Brasil.
              </p>
<p className="text-gray-700 mb-6 text-base md:text-xl">                Iniciamos nossa jornada com uma pequena equipe de cinco profissionais, focados em certificar produtos orgânicos para o mercado local. Com o passar dos anos, expandimos nossa atuação para outras categorias de produtos vegetais e conquistamos reconhecimento internacional.
              </p>
<p className="text-gray-700 mb-6 text-base md:text-xl">                Em 2010, obtivemos nossa primeira acreditação internacional, abrindo portas para o mercado externo. Desde então, temos crescido consistentemente, sempre mantendo nosso compromisso com a excelência, sustentabilidade e transparência em todos os processos.
              </p>
<p className="text-gray-700 mb-6 text-base md:text-xl">                Hoje, somos uma empresa de referência no setor, com colaboradores especializados e uma rede de parceiros em diversos países, oferecendo serviços de certificação reconhecidos nos principais mercados globais.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/somos.jpg"
                alt="Trajetória Proquality"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-proquality-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-semibold">
                  "23 anos de excelência em certificação de produtos vegetais"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-proquality-gray">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3"
                alt="Equipe Proquality"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-proquality-primary mb-6">
                Nossa Equipe
              </h2>
<p className="text-gray-700 mb-6 text-base md:text-xl">                Contamos com uma equipe multidisciplinar composta por engenheiros agrônomos, biólogos, químicos, especialistas em gestão ambiental e profissionais de diversas áreas relacionadas à qualidade e certificação.
              </p>
<p className="text-gray-700 mb-6 text-base md:text-xl">                Nosso diferencial está no alto nível de qualificação técnica e na constante atualização dos nossos colaboradores, que participam regularmente de treinamentos sobre as mais recentes tecnologias e regulamentações do setor.
              </p>

<p className="text-gray-700 mb-6 text-base md:text-xl">                Áreas de Especialização:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-proquality-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Agricultura orgânica e sustentável</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-proquality-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Análise de resíduos e contaminantes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-proquality-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Normativas nacionais e internacionais</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-proquality-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gestão da qualidade e processos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-proquality-primary mb-10">
            Quer saber mais sobre nossos serviços?
          </h2>
          <a
            href="/contato"
            className="btn-primary inline-flex items-center gap-2"
          >
            Entre em Contato
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default QuemSomosPage;
