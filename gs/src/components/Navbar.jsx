// src/components/Navbar.jsx
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Navbar({ onSearchChange, isDark, onToggleDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo e Busca */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">SmartWork</h1>
          
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Buscar por nome ou cargo..."
              onChange={onSearchChange}
              className="border p-2 pl-10 rounded-lg w-full md:w-80 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
        
        {/* Ícones e Dark Mode */}
        <div className="flex items-center gap-4">
          {/* Você pode adicionar mais links aqui (ex: Home, Minha Rede) */}
          <button 
            onClick={onToggleDarkMode} 
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          {/* <UserCircleIcon className="h-8 w-8 text-gray-600 dark:text-gray-300" /> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;