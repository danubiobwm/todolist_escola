import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Posts } from './styles';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        const results = await response.json();
        setUsers(results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(API_URL);
  }, []);
  return (
    <>
      <Title>Explore Users.</Title>

      <Posts>
        {users.map(user => (
          <Link key={user.name} to={`/posts/${user.id}`}>
            <div>
              <strong>{user.name}</strong>
              <p />
              <strong>{user.email}</strong>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Posts>
    </>
  );
};

export default Dashboard;
