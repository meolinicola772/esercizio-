function App() {
  const [username, setUsername] = useState<string | null>(null)
  const { user, loading, error, fetchUser } = useGithubUser(username)

  return (
    <>
      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username GitHub" />
      <button onClick={() => fetchUser()}>Ricarica</button>

      {loading && <p>Caricamento...</p>}
      {error && <p>Errore: {error}</p>}
      {user && <p>{user.login} - {user.followers} followers</p>}
    </>
  )
}