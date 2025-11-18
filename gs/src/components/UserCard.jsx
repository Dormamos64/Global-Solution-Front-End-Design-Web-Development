function UserCard({ user, onCardClick }) {
  return (
    <div 
      onClick={() => onCardClick(user)}
      
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col"
    >
     
      <img src={user.foto} alt={user.nome} className="w-28 h-28 rounded-full mx-auto" />
      <h3 className="text-2xl font-bold text-center mt-4 dark:text-white">{user.nome}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center text-base mt-1">{user.cargo}</p>
      
     
      <div className="flex-grow" /> 
      

      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {user.habilidadesTecnicas.slice(0, 3).map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-200 dark:text-blue-800">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default UserCard;