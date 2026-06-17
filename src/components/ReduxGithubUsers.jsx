import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from "../thunks/fetchUser";

function ReduxGithubUsers() {

  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const users = useSelector(
    state => state.users.users
  );

  const loading = useSelector(
    state => state.users.loading
  );

  const error = useSelector(
    state => state.users.error
  );

  return (
    <div>

      <h2>GitHub Users</h2>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username GitHub"
      />

      <button onClick={() => dispatch(fetchUser(username))}>
        Cerca
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <ul>

        {users.map(user => (

          <li key={user.id}>

            {user.name} ({user.login})

          </li>

        ))}

      </ul>

    </div>
  );
}

export default ReduxGithubUsers;