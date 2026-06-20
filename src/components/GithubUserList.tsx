import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GithubUserList() {
  const [users, setUsers] = useState<{ login: string }[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Utenti GitHub</h2>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUserList;