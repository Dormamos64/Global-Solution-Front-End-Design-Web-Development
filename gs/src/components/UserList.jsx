// src/components/UserList.jsx
import UserCard from './UserCard';

// 1. Receba 'onCardClick' aqui
function UserList({ users, onCardClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map((user) => (
        <UserCard 
          key={user.id} 
          user={user} 
          onCardClick={onCardClick} // 2. Passe a função adiante para o Card
        />
      ))}
    </div>
  );
}

export default UserList;