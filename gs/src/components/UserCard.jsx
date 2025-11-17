// src/components/UserCard.jsx

// 'user' será uma "prop" (propriedade) que este componente receberá
function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow">
      <img src={user.foto} alt={user.nome} className="w-24 h-24 rounded-full mx-auto" />
      <h3 className="text-xl font-bold text-center mt-2">{user.nome}</h3>
      <p className="text-gray-600 text-center">{user.cargo}</p>
      <div className="flex flex-wrap gap-1 justify-center mt-2">
        {/* Pega as 3 primeiras skills técnicas */}
        {user.habilidadesTecnicas.slice(0, 3).map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default UserCard;