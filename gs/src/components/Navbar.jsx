// src/components/Navbar.jsx
import { BriefcaseIcon } from '@heroicons/react/24/solid'; // Ícone sólido para a logo

function Navbar({ isDark, onToggleDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            SmartWork
          </h1>
        </div>
        
        {/* Botão de Dark Mode */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleDarkMode} 
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;