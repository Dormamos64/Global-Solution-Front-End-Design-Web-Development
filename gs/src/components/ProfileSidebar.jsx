// src/components/ProfileSidebar.jsx
function ProfileSidebar({ user }) {
  if (!user) return null; // Não renderiza se o usuário ainda não carregou

  return (
    <aside className="hidden lg:block col-span-1">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 text-center sticky top-24">
        {/* Imagem "salta" para fora do card */}
        <img 
          src={user.foto} 
          alt={user.nome} 
          className="w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white dark:border-gray-800" 
        />
        <h3 className="text-xl font-bold mt-4 dark:text-white">{user.nome}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{user.cargo}</p>
        
        <div className="mt-6 space-y-2 text-left text-sm text-gray-500 dark:text-gray-400">
          <p className="flex justify-between">Conexões <span>500+</span></p>
          <p className="flex justify-between">Visualizações <span>1.2k</span></p>
        </div>

        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-sm hover:bg-blue-700">
          Ver Perfil
        </button>
      </div>
    </aside>
  );
}

export default ProfileSidebar;