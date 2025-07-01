
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Data do copyright atual
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-proquality-dark text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-1">
            <img
              src="/images/logo.png"
              alt="Proquality Logo"
              className="h-16 mb-4 "
            />
            <p className="text-gray-300 text-sm mt-4">
              Excelência em certificação de produtos vegetais, garantindo qualidade e sustentabilidade em toda a cadeia produtiva.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-proquality-secondary pb-2">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-gray-300 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/missao" className="text-gray-300 hover:text-white transition-colors">
                  Missão, Visão e Valores
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-proquality-secondary pb-2">
              Serviços
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-white transition-colors">
                Certificação Orgânica
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                Certificação de Origem
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                Consultoria Ambiental
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                Análises Laboratoriais
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-proquality-secondary pb-2">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-proquality-secondary shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Rua Santa Rosa, Nº 112, 7º Andar, Brás, CEP: 03007-040, São Paulo/SP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-proquality-secondary shrink-0" />
                <span className="text-gray-300">+55 (11) 3000-0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-proquality-secondary shrink-0" />
                <a
                  href="mailto:contato@proquality.com.br"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contato@proquality.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Proquality Serviços Ltda. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Certificação de Produtos Vegetais
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
