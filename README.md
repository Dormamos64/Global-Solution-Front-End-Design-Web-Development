![Header](https://capsule-render.vercel.app/api?type=waving&color=3b82f6&height=250&section=header&text=SmartWork&fontSize=80&animation=fadeIn&fontAlignY=35&desc=Global%20Solution%202025%20•%20FIAP&descAlignY=60&descAlign=50)

<div align="center">

  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge&logo=checklist" alt="Status">
  <img src="https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge&logo=semver" alt="Version">
  <br>
  
  <h3>🚀 Conectando pessoas, competências e propósito por meio da tecnologia.</h3>

  <p align="center">
    <a href="#-equipe">Equipe</a> •
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-instalação-e-execução">Instalação</a>
  </p>
</div>

---

## 👥 Equipe

| 🎓 RM | 👨‍💻 Desenvolvedor | 🐱 GitHub |
| :--- | :--- | :--- |
| **RM 556170** | **Felipe Yamaguchi Mesquita** | [![GitHub][btn-github]](https://github.com/oFeudo) |
| **RM 563487** | **Rafael Tavares Santos** | [![GitHub][btn-github]](https://github.com/RafaelTech2006) |
| **RM 563872** | **Gabriel Oliveira Amaral** | [![GitHub][btn-github]](https://github.com/Dormamos64) |

---

## 💡 Sobre o Projeto

O **SmartWork** é uma **Single Page Application (SPA)** desenvolvida como resposta ao desafio da **Global Solution (Front-End Design & Web Development)** da FIAP. 

Inspirado nas mudanças dinâmicas do mercado de trabalho, o projeto simula uma rede social profissional focada em inclusão e networking. A plataforma oferece uma experiência fluida onde usuários podem descobrir talentos, filtrar profissionais por skills e consumir conteúdos relevantes sobre o futuro do trabalho.

---

## ✨ Funcionalidades

### 🖥️ Dashboard & Navegação
- [x] **Visualização em Cards:** Design moderno com Tailwind CSS para exibir profissionais.
- [x] **Feed de Notícias (Sticky):** Coluna lateral fixa com notícias geradas dinamicamente.
- [x] **Paginação Inteligente:** Sistema "Carregar Mais" para otimizar a performance de listas longas.

### 🔍 Busca & Filtros
- [x] **Filtro Textual:** Busca em tempo real por nome, cargo ou habilidade.
- [x] **Filtro por Categoria:** Dropdown dinâmico baseado nas áreas dos profissionais cadastrados.

### 🎨 UI/UX
- [x] **Dark Mode:** Tema escuro integrado e persistente.
- [x] **Responsividade:** Adaptável para Mobile, Tablet e Desktop.
- [x] **Modal Interativa:** Detalhes completos do perfil (Formação, Experiência, Hobbies).

---

## 🛠️ Tecnologias

Este projeto utiliza as ferramentas mais modernas do ecossistema JavaScript:

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Faker.js](https://img.shields.io/badge/Faker.js-000000?style=for-the-badge&logo=javascript&logoColor=white)

</div>

---

## 🔐 Acesso e Dados (Mock)

O sistema utiliza um **Backend Simulado** (`server.js`) que gera dados aleatórios a cada inicialização.

* **Login:** O acesso é liberado diretamente para o Dashboard para facilitar a avaliação da interface.
* **Dados:** Utilizamos a biblioteca **Faker.js** para criar 60 perfis e 40 notícias fictícias (nomes, fotos, cargos) automaticamente.

---

## 🚀 Instalação e Execução

Siga o passo a passo para rodar o projeto na sua máquina:

### 1️⃣ Clonar o Repositório
Abra o terminal (Git Bash, PowerShell ou VS Code) e execute:

bash

git clone [https://github.com/Dormamos64/Global-Solution-Front-End-Design-Web-Development.git](https://github.com/Dormamos64/Global-Solution-Front-End-Design-Web-Development.git)
cd Global-Solution-Front-End-Design-Web-Development

2️⃣ Instalar Dependências
Instale as bibliotecas necessárias com um único comando:

Bash

npm install
3️⃣ Iniciar o Backend (API)
Abra um terminal e rode o servidor de dados:

Bash

node server.js
Você verá: ✅ Servidor rodando em http://localhost:3001

4️⃣ Iniciar o Frontend
Abra um segundo terminal e rode a aplicação React:

Bash

npm run dev
📍 Acesse no navegador: http://localhost:5173

<div align="center">

🔗 Repositório Oficial
FIAP - Global Solution 2025 💙


Desenvolvido por alunos de Engenharia de Software.

</div>
