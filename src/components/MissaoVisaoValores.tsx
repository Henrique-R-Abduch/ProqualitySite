
import { Target, Eye, Heart } from "lucide-react";

const MissaoVisaoValores = () => {
  return (
    <section id="missao" className="section bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-proquality-dark mb-4">
            Missão, Visão e Valores
          </h2>
          <div className="w-20 h-1 bg-proquality-secondary mb-6"></div>
<p className="text-gray-600 max-w-3xl text-lg md:text-xl">
            Conheça os princípios que orientam nosso trabalho e definem nossa identidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Missão */}
          <div className="bg-proquality-light p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-proquality-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-proquality-dark mb-4 text-center">
              Missão
            </h3>
            <p className="text-gray-700 text-center">
              Garantir a qualidade, procedência e sustentabilidade de produtos vegetais através de processos de certificação transparentes e rigorosos, promovendo práticas responsáveis em toda a cadeia produtiva.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-proquality-light p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-proquality-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-proquality-dark mb-4 text-center">
              Visão
            </h3>
            <p className="text-gray-700 text-center">
              Ser referência global em certificação de produtos vegetais, liderando a transformação do setor rumo a práticas mais sustentáveis e transparentes, contribuindo para um futuro alimentar mais saudável e consciente.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-proquality-light p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-proquality-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-proquality-dark mb-4 text-center">
              Valores
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-proquality-primary"></span>
                <span>Integridade e transparência em todos os processos</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-proquality-primary"></span>
                <span>Compromisso com a sustentabilidade ambiental</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-proquality-primary"></span>
                <span>Excelência técnica e inovação</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-proquality-primary"></span>
                <span>Responsabilidade social e ética</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-proquality-primary"></span>
                <span>Valorização das pessoas e do conhecimento</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissaoVisaoValores;
