// src/components/UserCard.jsx
function UserCard({ user, onCardClick }) {
  return (
    <div 
      onClick={() => onCardClick(user)}
      // Aumentamos o padding de p-4 para p-6
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
    >
      {/* Aumentamos a imagem de w-24 h-24 para w-28 h-28 */}
      <img src={user.foto} alt={user.nome} className="w-28 h-28 rounded-full mx-auto" />
      
      {/* Aumentamos o nome de text-xl para text-2xl */}
      <h3 className="text-2xl font-bold text-center mt-4 dark:text-white">{user.nome}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center text-base mt-1">{user.cargo}</p>
      
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {user.habilidadesTecnicas.slice(0, 3).map((skill) => (
          // Aumentamos as tags de text-xs para text-sm
          <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-200 dark:text-blue-800">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default UserCard;