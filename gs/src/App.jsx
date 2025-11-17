// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserList from './components/UserList';
import Modal from './components/Modal';
import ProfileSidebar from './components/ProfileSidebar'; // Novo
import FilterSidebar from './components/FilterSidebar'; // Novo
import { useDarkMode } from './useDarkMode';

function App() {
  // --- Estados Principais ---
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  // --- Estados de Filtro ---
  const [searchTerm, setSearchTerm] = useState("");
  const [filterArea, setFilterArea] = useState(""); // Novo estado

  // --- Hook de Dark Mode ---
  const [isDark, toggleDarkMode] = useDarkMode();

  // --- Fetch de Dados (igual) ---
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/usuarios');
        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchUsers();
  }, []);

  // --- Handlers do Modal (igual) ---
  const handleCardClick = (user) => setSelectedUser(user);
  const handleCloseModal = () => setSelectedUser(null);

  // --- Lógica de Filtro (Atualizada) ---
  const filteredUsers = users.filter((user) => {
    const query = searchTerm.toLowerCase();
    
    // Filtro de Busca
    const matchesSearch = user.nome.toLowerCase().includes(query) ||
                          user.cargo.toLowerCase().includes(query);
    // Filtro de Área
    const matchesArea = filterArea === "" || user.area === filterArea;

    return matchesSearch && matchesArea;
  });

  // --- Dados para os Widgets ---
  const loggedInUser = users[0]; // Pega o primeiro usuário para o Perfil
  const suggestedUsers = users.slice(1, 6); // Pega 5 usuários para Sugestões
  const areasUnicas = [...new Set(users.map(u => u.area))]; // Pega áreas para o <select>

  if (loading) {
    // ... (seu loading)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      
      <Navbar isDark={isDark} onToggleDarkMode={toggleDarkMode} />
      
      {/* NOVO LAYOUT DE 3 COLUNAS */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Coluna Esquerda (Perfil) */}
          <ProfileSidebar user={loggedInUser} />

          {/* Coluna Central (Conteúdo Principal) */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold mb-6 dark:text-white">
              Profissionais
            </h1>
            <UserList users={filteredUsers} onCardClick={handleCardClick} />
          </div>

          {/* Coluna Direita (Filtros) */}
          <FilterSidebar 
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            onAreaChange={(e) => setFilterArea(e.target.value)}
            areasUnicas={areasUnicas}
            suggestedUsers={suggestedUsers}
          />
        </div>
      </main>

      {/* O Modal continua fora do layout, na raiz */}
      {selectedUser && (
        <Modal user={selectedUser} onClose={handleCloseModal} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;