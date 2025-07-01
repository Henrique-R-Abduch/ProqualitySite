
import { useEffect } from "react";
import { Leaf, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ProdutosPage = () => {
  useEffect(() => {
    document.title = "Produtos | Proquality";
    window.scrollTo(0, 0);
  }, []);

  // Categorias de produtos certificados
const categorias = [
  {
    id: 1,
    name: "Orgânicos",
    description:
      "Produtos cultivados sem o uso de agrotóxicos, fertilizantes químicos ou transgênicos, com rastreabilidade comprovada por meio de análises laboratoriais específicas (micotoxinas, pesticidas, etc.), conforme exigido pela legislação do MAPA.",
    image: "/images/organicos.jpg",
    examples: [
      "Grãos e Cereais Orgânicos",
      "Ervas e Sementes Orgânicas",
      "Café e Chás Orgânicos",
    ],
  },
  {
    id: 2,
    name: "Frescos e Padronizados",
    description:
      "Produtos vegetais frescos ou minimamente processados, submetidos a critérios de classificação, testes de cocção e análises físico-químicas e microbiológicas, assegurando conformidade com MAPA e ANVISA.",
     image: "/images/frescos.jpg",   
     examples: [
      "Abacaxi",
      "Batata",
      "Cebola",
      "Feijão",
      "Maçã",
      "Milho e Milho Pipoca",
      "Soja",
      "Amendoim em Casca",
    ],
  },
  {
    id: 3,
    name: "Beneficiados e Processados",
    description:
      "Produtos beneficiados e processados com suporte técnico especializado, incluindo análises bromatológicas, rotulagem nutricional, identificação de alergênicos e adequação às exigências legais (MAPA, ANVISA).",
    image: "/images/processados.jpg",    
    examples: [
      "Arroz Beneficiado e Parboilizado",
      "Farinha de Trigo, Mandioca e Derivados",
      "Farelo de Soja",
      "Açúcar Branco, Cristal e Mascavo",
      "Ervilha, Lentilha, Grão-de-Bico",
    ],
  },
  {
    id: 4,
    name: "Óleos e Gorduras Vegetais",
    description:
      "Óleos refinados submetidos a análises físico-químicas, microbiológicas e de resíduos de solventes, garantindo conformidade com as normas de segurança alimentar e rotulagem.",
    image: "/images/oleos.jpg",    
    examples: [
      "Óleo de Soja Refinado",
      "Óleo de Milho Refinado",
      "Óleo de Girassol Refinado",
      "Óleo de Algodão Refinado",
      "Óleo de Canola Refinado",
      "Óleo de Bagaço de Oliva",
    ],
  },
  {
    id: 5,
    name: "Produtos Específicos",
    description:
      "Produtos vegetais com requisitos técnicos ou industriais específicos, que contam com suporte analítico (microscopia, resíduos de pesticidas) e serviços de coleta de amostras, laudos e perícias técnicas.",
    image: "/images/especificos.jpg",    
    examples: [
      "Algodão em Caroço",
      "Caroço de Algodão",
      "Tabaco em Folha Curado",
      "Produtos Amiláceos Derivados da Mandioca",
      "Margarina e Margarina Líquida",
      "Mistura de Arroz Polido e Parboilizado",
    ],
  },
  {
    id: 6,
    name: "Produção Integrada",
    description:
      "Sistemas agrícolas sustentáveis com apoio técnico completo, incluindo treinamentos em classificação vegetal, elaboração de fichas técnicas e análises laboratoriais que asseguram rastreabilidade e conformidade regulatória.",
    image: "/images/producao.jpg",    
    examples: [
      "Treinamentos",
      "rastreabilidade",
      "documentação",
      "defesa administrativa",
    ],
  },
];



  return (
    <div className="pt-28">
      <section className="bg-proquality-light py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-proquality-dark mb-4">
              Nossos Produtos
            </h1>
            <div className="w-20 h-1 bg-proquality-secondary mb-6"></div>
            
            {/* Selo de Certificação */}
            <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
              <Award className="h-4 w-4 text-proquality-primary" />
              <span>Empresa certificada pelo MAPA.</span>
              <a 
                href="/certificado-mapa.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-proquality-primary hover:text-proquality-dark underline font-medium transition-colors"
              >
                Veja o certificado aqui
              </a>
            </div>
            
<p className="text-gray-600 max-w-3xl text-lg md:text-xl">
              Conheça as categorias de produtos vegetais que certificamos, garantindo qualidade e sustentabilidade em toda a cadeia produtiva
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categorias.map((categoria) => (
              <div
                key={categoria.id}
                className="bg-proquality-gray rounded-lg overflow-hidden shadow-lg transition-transform hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={categoria.image}
                    alt={categoria.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-proquality-light w-14 h-14 rounded-full flex items-center justify-center mb-4 text-proquality-primary">
                    <Leaf className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-proquality-dark mb-4">
                    {categoria.name}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {categoria.description}
                  </p>

                  <h4 className="font-semibold text-proquality-primary mb-3">
                    Exemplos:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {categoria.examples.map((example, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-proquality-secondary rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contato"
                    className="text-proquality-primary font-medium underline hover:text-proquality-dark transition-colors"
                  >
                    Solicitar certificação
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-proquality-gray">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-proquality-dark mb-6">
              Processo de Certificação
            </h2>
      <p className="text-gray-600 text-base md:text-xl mx-auto max-w-3xl">
              Nossa metodologia de certificação segue um rigoroso protocolo dividido em etapas que garantem a confiabilidade e o reconhecimento das nossas certificações:
            </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"> 
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-proquality-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-proquality-dark mb-3">
                  Análise Preliminar
                </h3>
                <p className="text-gray-600 text-sm">
                  Avaliação inicial da documentação, área de cultivo e práticas de manejo adotadas pelo produtor.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-proquality-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-proquality-dark mb-3">
                  Inspeção In Loco
                </h3>
                <p className="text-gray-600 text-sm">
                  Visita técnica às instalações para verificação das práticas adotadas e coleta de amostras quando necessário.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-proquality-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-proquality-dark mb-3">
                  Análises Laboratoriais
                </h3>
                <p className="text-gray-600 text-sm">
                  Testes em laboratórios credenciados para verificar a conformidade com os padrões estabelecidos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-proquality-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-proquality-dark mb-3">
                  Avaliação Técnica
                </h3>
                <p className="text-gray-600 text-sm">
                  Análise dos resultados por nossa equipe técnica especializada e elaboração do relatório de conformidade.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-proquality-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  5
                </div>
                <h3 className="font-bold text-proquality-dark mb-3">
                  Emissão do Certificado
                </h3>
                <p className="text-gray-600 text-sm">
                  Após aprovação, emitimos o certificado com validade reconhecida nacional e internacionalmente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-proquality-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  6
                </div>
                <h3 className="font-bold text-proquality-dark mb-3">
                  Monitoramento
                </h3>
                <p className="text-gray-600 text-sm">
                  Acompanhamento periódico para garantir a manutenção dos padrões de qualidade exigidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProdutosPage;
