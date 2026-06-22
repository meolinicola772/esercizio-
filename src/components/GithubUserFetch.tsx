import { useEffect, useState } from "react";

interface GithubUserData {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
}

interface Props {
  username: string;
}

function GithubUserFetch({ username }: Props) {
  const [user, setUser] = useState<GithubUserData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [username]);

  if (!user) return <p>Caricamento...</p>;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <h1>{user.name}</h1>
      <p>@{user.login}</p>
      <p>Followers: {user.followers}</p>
    </div>
  );
}

export default GithubUserFetch;