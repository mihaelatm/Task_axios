import { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "../UserItem";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUser(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={fetchUsers}>Refresh users</button>
      <hr />
      {users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
