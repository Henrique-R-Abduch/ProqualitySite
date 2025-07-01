import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Award } from "lucide-react";

const Produtos = () => {
  const produtos = [
    {
      id: 1,
      name: "Produção Orgânica",
      description:
        "Certificação de alimentos cultivados sem agrotóxicos, com respeito ao meio ambiente e à saúde do consumidor.",
      image: "/images/organica2.jpg",
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      id: 2,
      name: "Vegetais Frescos & Padronizados",
      description:
        "Padronização e rastreabilidade para frutas, hortaliças e grãos com controle de qualidade e segurança alimentar.",
      image: "/images/vegetais.jpg",
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      id: 3,
      name: "Processados & Derivados",
      description:
        "Certificação de produtos beneficiados ou industrializados, com foco na origem, composição e boas práticas.",
      image: "/images/derivados.jpg",
      icon: <Leaf className="h-6 w-6" />,
    },
  ];

  return (
    <section id="produtos" className="section bg-proquality-gray">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-proquality-dark mb-4">
            Nossos Produtos
          </h2>
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
            Conheça as categorias de produtos vegetais que certificamos,
            garantindo qualidade e sustentabilidade
          </p>
        </div>

        {/* Cards centralizados */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={produto.image}
                    alt={produto.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="bg-proquality-light w-12 h-12 rounded-full flex items-center justify-center mb-4 text-proquality-primary">
                    {produto.icon}
                  </div>
                  <h3 className="text-xl font-bold text-proquality-dark mb-2">
                    {produto.name}
                  </h3>
                  <p className="text-gray-600">{produto.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão centralizado */}
        <div className="mt-12 text-center">
          <Link
            to="/produtos"
            className="btn-primary inline-flex items-center gap-2"
          >
            Ver Todos os Produtos
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
