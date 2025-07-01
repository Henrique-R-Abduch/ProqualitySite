
import { useEffect } from "react";
import Contato from "@/components/Contato";

const ContatoPage = () => {
  useEffect(() => {
    document.title = "Contato | Proquality";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28">
      <section className="py-10">
        <Contato />
      </section>

      <section className="py-16 bg-proquality-gray">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-proquality-dark mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 mb-12">
              Confira as respostas para as dúvidas mais comuns sobre nossos serviços
            </p>

            <div className="space-y-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-proquality-primary mb-2">
                  Quanto tempo leva o processo de certificação?
                </h3>
                <p className="text-gray-700">
                  O tempo médio varia de acordo com o tipo de produto e a complexidade da operação, mas geralmente leva entre 60 e 90 dias, desde a solicitação inicial até a emissão do certificado.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-proquality-primary mb-2">
                  Quais documentos são necessários para iniciar o processo?
                </h3>
                <p className="text-gray-700">
                  Normalmente são necessários registros da propriedade, histórico de cultivo, detalhamento do sistema produtivo, análises de solo e água, entre outros documentos específicos de acordo com o tipo de certificação.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-proquality-primary mb-2">
                  As certificações são reconhecidas internacionalmente?
                </h3>
                <p className="text-gray-700">
                  Sim. A Proquality possui acreditações e parcerias internacionais que garantem o reconhecimento das nossas certificações nos principais mercados globais, facilitando a exportação dos produtos certificados.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-proquality-primary mb-2">
                  Com que frequência são realizadas as auditorias?
                </h3>
                <p className="text-gray-700">
                  As auditorias regulares são realizadas anualmente para renovação da certificação, mas também realizamos auditorias não programadas durante o período de validade do certificado para assegurar a manutenção dos padrões.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;
