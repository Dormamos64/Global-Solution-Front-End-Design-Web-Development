📌 SmartWork — Plataforma Profissional Interativa

Global Solution – Front-End Design & Web Development (FIAP)
Conectando pessoas, competências e propósito através da tecnologia.

<p align="center"> <img src="https://img.shields.io/badge/Status-Ativo-brightgreen?style=for-the-badge"> <img src="https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge"> <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge"> </p> <p align="center"> <a href="#-sobre-o-projeto">Sobre</a> • <a href="#-funcionalidades">Funcionalidades</a> • <a href="#-tecnologias">Tecnologias</a> • <a href="#-instalação">Instalação</a> • <a href="#-estrutura-do-projeto">Estrutura</a> • <a href="#-equipe">Equipe</a> </p>
📖 Sobre o Projeto

O SmartWork é uma SPA (Single Page Application) criada para demonstrar uma plataforma profissional moderna, dinâmica e acessível.
A aplicação simula perfis profissionais reais, um feed de notícias inteligente e interações sociais, oferecendo uma navegação fluida e responsiva.

Este projeto foi desenvolvido como parte da Global Solution da FIAP, integrando conceitos avançados de UI/UX, SPA, API Mockada e design responsivo.

✨ Funcionalidades
👨‍💼 Painel Profissional

Lista de profissionais em cards modernos

Foto, cargo, habilidades e resumo

Botões de ação dentro dos cards

🔎 Busca e Filtros Inteligentes

Busca textual por nome, cargo ou skill

Filtro por área de atuação (dropdown dinâmico)

🧩 Modal Completo de Perfil

Experiência

Formação

Soft skills

Botões: Recomendar, Enviar Mensagem

📰 Feed de Notícias

Geração dinâmica via Faker.js

Área lateral fixa (“sticky sidebar”)

Botão Carregar mais

🌙 Tema e Responsividade

Dark/Light Mode com persistência

Layout 100% responsivo via Tailwind

🛠 Tecnologias
<p align="center"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react"> <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css"> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express"> </p>

Outras libs utilizadas:

Faker.js

Lucide React

Axios

📦 Instalação
✅ Pré-requisitos

Node.js instalado

Git instalado

▶️ Passo a passo
# 1. Clone o repositório
git clone https://github.com/Dormamos64/Global-Solution-Front-End-Design-Web-Development.git

# 2. Acesse a pasta
cd Global-Solution-Front-End-Design-Web-Development

# 3. Instale as dependências
npm install

# 4. Inicie o servidor (API Mock)
node server.js

# 5. Em outro terminal, rode o front-end
npm run dev

📁 Estrutura do Projeto
📦 Global-Solution-Front-End-Design-Web-Development
├── 📁 public/           # Assets e arquivos estáticos
├── 📁 src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação
│   ├── hooks/           # Hooks personalizados
│   ├── services/        # Conexão com API
│   ├── styles/          # Estilos globais / Tailwind
│   └── App.jsx          # Entry-point da SPA
├── server.js            # Servidor mockado com Faker.js
├── package.json
└── vite.config.js

🧪 Scripts Úteis
npm run dev        # Executa o front-end em modo de dev
npm run build      # Build de produção
npm run preview    # Pré-visualização do build final
node server.js     # API Mock com Faker.js

👥 Equipe
Integrante	RM
Felipe Yamaguchi Mesquita	556170
Rafael Tavares Santos	563487
Gabriel Oliveira Amaral	563872