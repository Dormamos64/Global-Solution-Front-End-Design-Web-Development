// Importação dos módulos principais
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { faker } = require('@faker-js/faker');

// Configurações iniciais
const app = express();
const PORT = 3001;
const SECRET_KEY = 'Z8vT4k2Fm0xL1oGqI7rUeP9jC3aD5sBc6uL1oGqI7rU=';
const NUMBER_OF_USERS = 60;

// Middlewares
app.use(cors());
app.use(express.json());

// Array para armazenar os usuários
const users = [];

// Função auxiliar para gerar itens aleatórios de um array
function getRandomItems(array, count) {
  return faker.helpers.arrayElements(array, count);
}

// Bases de dados para geração
const linguagens = [
  'Python', 'SQL', 'React', 'Node.js', 'Java', 'AWS',
  'Docker', 'Kubernetes', 'Power BI', 'TypeScript'
];

const habilidades = [
  'Comunicação', 'Liderança', 'Trabalho em equipe',
  'Resiliência', 'Pensamento crítico', 'Adaptabilidade'
];

const areas = [
  'Desenvolvimento', 'Design', 'Marketing', 'Saúde',
  'Educação', 'Engenharia', 'Dados', 'Vendas'
];

const interesses = ['IA Ética', 'Educação', 'Sustentabilidade', 'Open Source', 'UX', 'Ciência de Dados'];
const certificacoesPossiveis = ['AWS Certified', 'Azure Fundamentals', 'Google Cloud Architect', 'Scrum Master', 'ITIL Foundation'];
const idiomasPossiveis = ['Inglês', 'Espanhol', 'Francês', 'Alemão', 'Mandarim'];

// Geração de usuários fictícios
for (let i = 0; i < NUMBER_OF_USERS; i++) {
  const senha = faker.internet.password({ length: 8 }); // gera senha aleatória
  const numeroFormacoes = faker.number.int({ min: 1, max: 3 });
  const numeroIdiomas = faker.number.int({ min: 1, max: 3 });
  const numeroInteresses = faker.number.int({ min: 1, max: 4 });

  users.push({
    id: i + 1,
    nome: faker.person.fullName(), // gera nome completo
    username: faker.internet.userName(), // gera username único
    senha: senha, // senha em texto plano (para teste)
    foto: faker.image.avatar(), // gera URL de imagem de perfil
    cargo: faker.person.jobTitle(), // gera cargo profissional
    resumo: faker.person.bio(), // gera uma biografia profissional
    localizacao: `${faker.location.city()}/${faker.location.state({ abbreviated: true })}`, // gera uma localização
    area: faker.helpers.arrayElement(areas), // seleciona uma área de atuação  
    habilidadesTecnicas: getRandomItems(linguagens, faker.number.int({ min: 3, max: 6 })), // seleciona habilidades técnicas
    softSkills: getRandomItems(habilidades, faker.number.int({ min: 2, max: 4 })), // seleciona soft skills
    experiencias: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => ({ // gera experiências profissionais
      empresa: faker.company.name(), // gera nome da empresa
      cargo: faker.person.jobTitle(), // gera cargo
      inicio: faker.date.past({ years: 5 }).toISOString().slice(0, 7), // gera data de começo de carreira
      fim: faker.date.recent({ days: 200 }).toISOString().slice(0, 7), // gera data de fim de carreira
      descricao: faker.lorem.sentence() // gera descrição da experiência
    })),
    formacao: Array.from({ length: numeroFormacoes }, () => ({
      curso: faker.person.jobArea() + ' - ' + faker.word.noun(), // gera nome do curso
      instituicao: faker.company.name(), // gera nome da instituição
      ano: faker.number.int({ min: 2015, max: 2024 }) // gera ano de conclusão
    })),
    projetos: [
      {
        titulo: faker.commerce.productName(), // gera título do projeto
        link: faker.internet.url(), // gera link do projeto
        descricao: faker.commerce.productDescription() // gera descrição do projeto
      }
    ],
    certificacoes: getRandomItems(
      certificacoesPossiveis,
      faker.number.int({ min: 1, max: 2 })
    ),
    idiomas: Array.from({ length: numeroIdiomas }, () => ({
      idioma: faker.helpers.arrayElement(idiomasPossiveis), // seleciona idioma
      nivel: faker.helpers.arrayElement(['Básico', 'Intermediário', 'Avançado', 'Fluente']) // seleciona nível
    })),
    areaInteresses: getRandomItems(interesses, numeroInteresses) // seleciona interesses
  });
}

// Rota principal: retorna todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(users);
});

// Rota de login: agora usa username + senha
app.post('/login', (req, res) => {
  const { username, senha } = req.body; // recebe os dados do front-end

  // procura usuário com username e senha correspondentes
  const user = users.find(u => u.username === username && u.senha === senha);

  if (user) {
    // gera token JWT com id, nome, username e cargo
    const token = jwt.sign(
      { id: user.id, nome: user.nome, username: user.username, cargo: user.cargo },
      SECRET_KEY,
      { expiresIn: '1h' } // token expira em 1 hora
    );

    // retorna token e dados do usuário
    return res.json({ token, user });
  }

  // caso não encontre usuário com essas credenciais
  return res.status(401).json({ message: 'Credenciais inválidas.' });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
