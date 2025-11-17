// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserList from './components/UserList';
import Modal from './components/Modal';
import { useDarkMode } from './useDarkMode';

function App() {
  // --- Estados Principais ---
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  // --- Estado de Filtro ---
  const [searchTerm, setSearchTerm] = useState("");
  // (Você pode adicionar mais filtros aqui, ex: filterArea)

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

  // --- Lógica de Filtro ---
  const filteredUsers = users.filter((user) => {
    const query = searchTerm.toLowerCase();
    return user.nome.toLowerCase().includes(query) ||
           user.cargo.toLowerCase().includes(query);
    // (Adicione mais lógicas de filtro aqui se precisar)
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-900">
        <p className="text-xl dark:text-white">Carregando profissionais...</p>
      </div>
    );
  }

  return (
    // Layout principal: Flex Coluna de altura mínima da tela
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      
      <Navbar 
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        isDark={isDark}
        onToggleDarkMode={toggleDarkMode}
      />
      
      {/* Conteúdo Principal (flex-grow faz ele "empurrar" o footer para baixo) */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">
          Conecte-se com Profissionais
        </h1>
        <UserList users={filteredUsers} onCardClick={handleCardClick} />
      </main>

      {/* Modal (Renderização condicional) */}
      {selectedUser && (
        <Modal 
          user={selectedUser} 
          onClose={handleCloseModal}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;