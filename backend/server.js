const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do multer para receber arquivos em memória
const upload = multer();

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/send-email", upload.single("arquivo"), async (req, res) => {
  const { nome, email, telefone, empresa, mensagem } = req.body;
  const arquivo = req.file;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_VERIFICADO,
      to: process.env.EMAIL_DESTINO,
      subject: "Novo contato pelo site",
      text: `
        Nome: ${nome}
        Email: ${email}
        Telefone: ${telefone}
        Empresa: ${empresa}
        Mensagem: ${mensagem}
      `,
      attachments: arquivo
        ? [
            {
              filename: arquivo.originalname,
              content: arquivo.buffer,
            },
          ]
        : [],
    });

    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ message: "Erro ao enviar e-mail." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
