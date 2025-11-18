
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function FilterSidebar({ onSearchChange, onAreaChange, areasUnicas, suggestedUsers }) {
  return (
    <aside className="hidden lg:block col-span-1">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 sticky top-24 space-y-6">
        
  
        <div>
          <h4 className="font-bold text-lg mb-3 dark:text-white">Buscar</h4>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Nome ou cargo..."
              onChange={onSearchChange}
              className="border p-2 pl-10 rounded-lg w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

   
        <div>
          <h4 className="font-bold text-lg mb-3 dark:text-white">Filtrar por Área</h4>
          <select 
            onChange={onAreaChange} 
            className="border p-2 rounded-lg w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="">Todas as Áreas</option>
            {areasUnicas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>


        <div>
          <h4 className="font-bold text-lg mb-4 dark:text-white">Sugestões</h4>
          <ul className="space-y-4">
            {suggestedUsers.map(user => (
              <li key={user.id} className="flex items-center gap-3">
                <img src={user.foto} alt={user.nome} className="w-10 h-10 rounded-full" />
                <div>
                  <h5 className="font-semibold text-sm dark:text-white">{user.nome}</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user.cargo}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </aside>
  );
}

export default FilterSidebar;