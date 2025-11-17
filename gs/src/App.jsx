// src/App.jsx
import { useState, useEffect } from 'react';
import UserList from './components/UserList'; // 1. IMPORTAR

function App() {
  // ... (estados users e loading)
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);

  // ... (useEffect para fetchUsers)
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Carregando profissionais...</p>
      </div>
    );
  }

  return (
    // O Tailwind agora vai funcionar por causa do index.css
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl text-center p-4">Rede Profissional</h1>

      {/* 2. USAR O COMPONENTE */}
      {/* Passamos a lista de 'users' como prop */}
      <UserList users={users} />
    </div>
  );
}

export default App;