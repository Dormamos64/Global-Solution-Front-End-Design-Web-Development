const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = 3001;
const SECRET_KEY = 'Z8vT4k2Fm0xL1oGqI7rUeP9jC3aD5sBc6uL1oGqI7rU=';
const NUMBER_OF_USERS = 60;

app.use(cors());
app.use(express.json());

const users = [];

// Função auxiliar para gerar habilidades aleatórias
function getRandomItems(array, count) {
  return faker.helpers.arrayElements(array, count);
}

// Dados base para geração
const hardSkillsBase = [
  'Python', 'SQL', 'React', 'Node.js', 'Java', 'AWS', 'Docker', 'Kubernetes', 'Power BI', 'TypeScript'
];

const softSkillsBase = [
  'Comunicação', 'Liderança', 'Trabalho em equipe', 'Resiliência', 'Pensamento crítico', 'Adaptabilidade'
];

const areasBase = ['Desenvolvimento', 'Design', 'Marketing', 'Saúde', 'Educação', 'Engenharia', 'Dados', 'Vendas'];

// Loop para gerar usuários com perfil completo
for (let i = 0; i < NUMBER_OF_USERS; i++) {
  users.push({
    id: i + 1,
    nome: faker.person.fullName(),
    foto: faker.image.avatar(),
    cargo: faker.person.jobTitle(),
    resumo: faker.person.bio(),
    localizacao: `${faker.location.city()}/${faker.location.state({ abbreviated: true })}`,
    area: faker.helpers.arrayElement(areasBase),
    habilidadesTecnicas: getRandomItems(hardSkillsBase, faker.number.int({ min: 3, max: 6 })),
    softSkills: getRandomItems(softSkillsBase, faker.number.int({ min: 2, max: 4 })),
    experiencias: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => ({
      empresa: faker.company.name(),
      cargo: faker.person.jobTitle(),
      inicio: faker.date.past({ years: 5 }).toISOString().slice(0, 7),
      fim: faker.date.recent({ days: 200 }).toISOString().slice(0, 7),
      descricao: faker.lorem.sentence()
    })),
    formacao: [
      {
        curso: faker.person.jobArea() + ' - ' + faker.word.noun(),
        instituicao: faker.company.name(),
        ano: faker.number.int({ min: 2015, max: 2024 })
      }
    ],
    projetos: [
      {
        titulo: faker.commerce.productName(),
        link: faker.internet.url(),
        descricao: faker.commerce.productDescription()
      }
    ],
    certificacoes: getRandomItems(
      ['AWS Certified', 'Azure Fundamentals', 'Google Cloud Architect', 'Scrum Master', 'ITIL Foundation'],
      faker.number.int({ min: 1, max: 2 })
    ),
    idiomas: [
      { idioma: 'Inglês', nivel: faker.helpers.arrayElement(['Básico', 'Intermediário', 'Avançado', 'Fluente']) },
      { idioma: 'Espanhol', nivel: faker.helpers.arrayElement(['Básico', 'Intermediário', 'Avançado']) }
    ],
    areaInteresses: getRandomItems(['IA Ética', 'Educação', 'Sustentabilidade', 'Open Source', 'UX', 'Ciência de Dados'], 2)
  });
}

console.log(`✅ ${users.length} perfis gerados com sucesso pelo Faker.js.`);

// Rota para listar todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(users);
});

// Login simples (ainda baseado em nome + id)
app.post('/login', (req, resp) => {
  const { nome, id } = req.body;
  const user = users.find(u => u.nome === nome && u.id === id);

  if (user) {
    const token = jwt.sign(
      { id: user.id, nome: user.nome, cargo: user.cargo },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
    return resp.json({ token, user });
  }

  return resp.status(401).json({ message: 'Credenciais inválidas.' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
 