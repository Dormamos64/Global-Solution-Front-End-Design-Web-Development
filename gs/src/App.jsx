import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserList from './components/UserList';
import Modal from './components/Modal';
import NewsSidebar from './components/NewsSidebar';
import FilterSidebar from './components/FilterSidebar';
import { useDarkMode } from './useDarkMode';

function App() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterArea, setFilterArea] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); 
  const [isDark, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/usuarios');
        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); 
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setVisibleCount(10);
  }, [searchTerm, filterArea]);

  const filteredUsers = users.filter((user) => {
    const query = searchTerm.toLowerCase();
    const matchesSearch = user.nome.toLowerCase().includes(query) ||
                          user.cargo.toLowerCase().includes(query) ||
                          (user.habilidadesTecnicas && user.habilidadesTecnicas.some(skill => skill.toLowerCase().includes(query)));
    
    const matchesArea = filterArea === "" || user.area === filterArea;

    return matchesSearch && matchesArea;
  });

  const currentUsers = filteredUsers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const suggestedUsers = users.slice(0, 5); 
  const areasUnicas = [...new Set(users.map(u => u.area))]; 

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar isDark={isDark} onToggleDarkMode={toggleDarkMode} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          <div className="hidden lg:block lg:col-span-1">
             <NewsSidebar />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-end mb-2">
              <h1 className="text-2xl font-bold dark:text-white">Profissionais</h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Mostrando {currentUsers.length} de {filteredUsers.length}
              </span>
            </div>

            {loading ? (
               <div className="text-center py-10 dark:text-white">Carregando...</div>
            ) : (
              <>
                <UserList users={currentUsers} onCardClick={setSelectedUser} />

                {visibleCount < filteredUsers.length && (
                  <div className="flex justify-center pt-4 pb-8">
                    <button 
                      onClick={handleLoadMore}
                      className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all border border-blue-100 dark:border-gray-700"
                    >
                      Carregar mais profissionais ▼
                    </button>
                  </div>
                )}
                
                {visibleCount >= filteredUsers.length && filteredUsers.length > 0 && (
                   <p className="text-center text-sm text-gray-400 mt-4 pb-4">
                     Você chegou ao fim da lista.
                   </p>
                )}
              </>
            )}
          </div>

          <div className="lg:col-span-1 sticky top-24">
            <FilterSidebar 
              onSearchChange={(e) => setSearchTerm(e.target.value)}
              onAreaChange={(e) => setFilterArea(e.target.value)}
              areasUnicas={areasUnicas}
              suggestedUsers={suggestedUsers}
            />
          </div>

        </div>
      </main>

      {selectedUser && (
        <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;