// src/components/UserList.jsx
import UserCard from './UserCard';

// Recebe a lista de 'users' como prop
function UserList({ users }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* Mapeia (faz um loop) na lista de usuários */}
      {users.map((user) => (
        // Para cada usuário, cria um UserCard
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;