const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { fakerPT_BR: faker } = require('@faker-js/faker'); 

const app = express();
const PORT = 3001;
const SECRET_KEY = 'Z8vT4k2Fm0xL1oGqI7rUeP9jC3aD5sBc6uL1oGqI7rU=';

const NUMBER_OF_USERS = 60;
const NUMBER_OF_NEWS = 40; 

app.use(cors());
app.use(express.json());

const users = [];
const noticias = [];

function getRandomItems(array, count) {
  return faker.helpers.arrayElements(array, count);
}

const linguagens = ['Python', 'SQL', 'React', 'Node.js', 'Java', 'AWS', 'Docker', 'TypeScript', 'C#', 'Go', 'Flutter'];
const habilidades = ['Comunicação', 'Liderança', 'Agilidade', 'Resiliência', 'Foco', 'Empatia', 'Criatividade', 'Negociação'];
const areas = ['Desenvolvimento', 'Design', 'Marketing', 'Dados', 'Produto', 'Vendas', 'RH', 'Segurança', 'Infraestrutura'];
const categoriasNoticias = ['Tecnologia', 'Vagas', 'Carreira', 'Inovação', 'Dicas', 'Mercado', 'Educação', 'Startups'];

console.log(`Gerando ${NUMBER_OF_USERS} usuários...`);
for (let i = 0; i < NUMBER_OF_USERS; i++) {
  users.push({
    id: i + 1,
    nome: faker.person.fullName(),
    username: faker.internet.username(),
    senha: faker.internet.password(), 
    foto: faker.image.avatar(),
    cargo: faker.person.jobTitle(),
    resumo: faker.person.bio(),
    localizacao: `${faker.location.city()}/${faker.location.state({ abbreviated: true })}`,
    area: faker.helpers.arrayElement(areas),
    habilidadesTecnicas: getRandomItems(linguagens, faker.number.int({ min: 3, max: 6 })),
    softSkills: getRandomItems(habilidades, faker.number.int({ min: 2, max: 4 })),
    experiencias: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => ({
      empresa: faker.company.name(),
      cargo: faker.person.jobTitle(),
      inicio: "2020-01",
      fim: "Atualmente",
      descricao: faker.lorem.sentence()
    })),
    formacao: [{
      curso: "Engenharia de Software",
      instituicao: "FIAP",
      ano: 2024
    }]
  });
}

console.log(`Gerando ${NUMBER_OF_NEWS} notícias...`);
for (let i = 0; i < NUMBER_OF_NEWS; i++) {
  noticias.push({
    id: i + 1,
    titulo: faker.lorem.sentence({ min: 4, max: 9 }),
    resumo: faker.lorem.paragraph(1),
    imagem: faker.image.urlLoremFlickr({ category: 'business,tech,computer,office' }), 
    categoria: faker.helpers.arrayElement(categoriasNoticias),
    data: faker.date.recent({ days: 15 }).toLocaleDateString('pt-BR'),
    likes: faker.number.int({ min: 5, max: 500 })
  });
}

app.get('/usuarios', (req, res) => {
  res.json(users);
});

app.get('/noticias', (req, res) => {
  res.json(noticias);
});

app.post('/login', (req, res) => {
  const { username, senha } = req.body;
  const user = users.find(u => u.username === username && u.senha === senha);

  if (user) {
    const token = jwt.sign(
      { id: user.id, nome: user.nome, cargo: user.cargo },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
    return res.json({ token, user });
  }
  return res.status(401).json({ message: 'Credenciais inválidas.' });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});