
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-proquality-light min-h-screen flex items-center">
      {/* Overlay de fundo com padrão sutil */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      ></div>

      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-proquality-dark leading-tight mb-6">
              Certificação de <span className="text-proquality-primary">Produtos Vegetais</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Garantimos a qualidade e sustentabilidade dos produtos vegetais através de processos de certificação rigorosos e transparentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/quem-somos"
                className="bg-white text-proquality-primary border border-proquality-primary px-6 py-3 rounded-md font-medium hover:bg-proquality-light transition-all duration-300 flex items-center justify-center gap-2"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <img
              src="/images/logo.png"
              alt="Proquality Logo"
              className="max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>
      
      {/* Forma decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-tl-[100px]"></div>
    </div>
  );
};

export default Hero;
