// Crea un componente GithubUser che riceve una prop username e recupera i dati dell'utente
//  corrispondente dalla Github API. Il componente dovrebbe renderizzare il nome dell'utente, 
//  il login e l'avatar.
// Crea un componente GithubUsers che recupera una lista di utenti dalla Github API e renderizza
//  la lista dei nomi utente come un elenco. Quando un nome utente viene cliccato, il componente 
//  GithubUser dovrebbe essere renderizzato, passando il nome utente come prop.

import { useState, useEffect } from "react"

type User = {
  name: string
  login: string
  avatar_url: string
}

type Props = { username: string }

export function GithubUser({ username }: Props) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [username])

  return (
    <div>
      <img src={user?.avatar_url} />
      <p>{user?.name}</p>
      <p>{user?.login}</p>
    </div>
  )
}