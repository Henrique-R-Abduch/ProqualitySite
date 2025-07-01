import { useState } from "react";
import { Mail, Phone, MapPin, Send, Download, Paperclip } from "lucide-react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [arquivo, setArquivo] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setArquivo(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    const data = new FormData();
    data.append("nome", formData.nome);
    data.append("email", formData.email);
    data.append("telefone", formData.telefone);
    data.append("empresa", formData.empresa);
    data.append("mensagem", formData.mensagem);
    if (arquivo) {
      data.append("arquivo", arquivo);
    }

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: false });
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          empresa: "",
          mensagem: "",
        });
        setArquivo(null);
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch (err) {
      console.error(err);
      setFormStatus({ submitting: false, submitted: false, error: true });
    }

    setTimeout(() => {
      setFormStatus((prev) => ({ ...prev, submitted: false }));
    }, 5000);
  };

  return (
    <section id="contato" className="section bg-proquality-light">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-proquality-dark mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-proquality-secondary mb-6"></div>
          <p className="text-gray-600 max-w-3xl text-lg md:text-xl">
            Estamos à disposição para atender sua empresa e esclarecer todas as suas dúvidas sobre certificação de produtos vegetais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Informações de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-proquality-dark mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-proquality-primary mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Rua Santa Rosa, Nº 112, 7º Andar<br />
                    Brás, São Paulo - SP<br />
                    CEP: 03007-040
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-proquality-primary mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">+55 (11) 3328-2788</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-proquality-primary mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@proquality@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-gray-800 mb-4">Horário de Atendimento</h4>
              <p className="text-gray-600">
                Segunda à Sexta: 08h às 17h<br />
              </p>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-proquality-dark mb-6">
              Envie uma Mensagem
            </h3>

            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
                <p className="font-medium">Mensagem enviada com sucesso!</p>
                <p className="text-sm mt-1">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nome" className="block text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-proquality-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-proquality-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telefone" className="block text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-proquality-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-proquality-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-proquality-primary resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="arquivo" className="block text-sm font-medium text-gray-700">
                    Anexar arquivo
                  </label>
                  <label
                    htmlFor="arquivo"
                    className="btn-primary w-full flex items-center justify-center gap-2 mt-1 cursor-pointer"
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    Selecionar arquivo
                    <Paperclip className="h-5 w-5" />
                    <input
                      type="file"
                      id="arquivo"
                      name="arquivo"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {arquivo && (
                    <span className="block text-xs text-gray-600 mt-1">
                      {arquivo.name}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}

            <a
              href="/Termo de Coleta - 2025.pdf"
              download
              className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
              style={{ textDecoration: "none" }}
            >
              Baixar Termo de Coleta
              <Download className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
