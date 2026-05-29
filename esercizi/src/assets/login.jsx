// Crea un hook personalizzato useCounter che tiene traccia dello stato di un contatore e
//  restituisce il valore attuale del contatore, 
// insieme a tre funzioni per incrementare, decrementare e resettare il contatore.
// Crea un hook personalizzato che tiene traccia dello stato di un modulo controllato con gli input username
//  e password, e restituisce il valore attuale degli input insieme a un gestore di eventi per aggiornare uno dei due input.
// Estrai la logica per recuperare i dati di un utente Github dal componente GithubUser di 16.3 in un hook
//  personalizzato chiamato useGithubUser.
// Modifica l'hook useGithubUser per restituire la funzione per recuperare i dati di un utente Github
// , insieme ai dati dell'utente e agli stati di errore e caricamento.
// Scrivi l'hook personalizzato useCurrentLocation, che utilizza l'API navigator.geolocation del browser per 
// ottenere la posizione attuale dell'utente tramite il metodo incorporato getCurrentPosition. L'hook dovrebbe
// ù restituire la posizione attuale, insieme a una funzione per ottenere la posizione attuale e agli stati di 
// ùerrore e caricamento. I dettagli su come utilizzare questa API possono essere trovati qui: Geolocation API.

import { useState } from "react"



export function useCounter(){

const [count, setCount] = useState(0)


function aumenta(){ 

    setCount(prev => prev + 1)

}

function diminuisci(){

    setCount(prev => prev - 1)

}

function reset(){

   setCount(0)

}

return {
   count,
   aumenta,
   diminuisci,
   reset
}


}

export function useForm() {
  const [stato, setStato] = useState({ username: '', password: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setStato(prev => ({ ...prev, [name]: value }))
  }

  return { stato, handleChange }
}



export function Login() {
  const { stato, handleChange } = useForm()

  return (
    <>
      <input name="username" value={stato.username} onChange={handleChange} />
      <input name="password" value={stato.password} onChange={handleChange} />
    </>
  )
}                          // ← chiudi Login qui

export function useGithubUser() {
  const [user, setUser]       = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  async function fetchUser(username) {
    setLoading(true)
    try {
      const res  = await fetch(`https://api.github.com/users/${username}`)
      const data = await res.json()
      setUser(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }                                        // ← chiudi fetchUser qui

  return { user, loading, error, fetchUser }
}

export function useCurrentLocation() {
  const [location, setLocation] = useState(null)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)

  function getLocation() {
  setLoading(true)
  setError(null)
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
      setLoading(false)
    },
    (err) => {
      setError(err.message)
      setLoading(false)
    }
  )
}
return { location, loading, error, getLocation }
}
