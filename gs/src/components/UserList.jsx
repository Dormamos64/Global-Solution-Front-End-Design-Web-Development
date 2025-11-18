
import UserCard from './UserCard';

function UserList({ users, onCardClick }) {
  return (

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