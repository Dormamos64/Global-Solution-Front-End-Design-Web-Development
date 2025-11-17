// src/components/UserList.jsx
import UserCard from './UserCard';

function UserList({ users, onCardClick }) {
  return (
    // 1. MUDANÇA: Reduzimos as colunas para 2 e aumentamos o espaçamento (gap)
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {users.map((user) => (
        <UserCard 
          key={user.id} 
          user={user} 
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default UserList;