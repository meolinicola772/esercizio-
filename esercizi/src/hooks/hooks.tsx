import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
 
// ─── useCounter ────────────────────────────────────────────────────────────────
 
export function useCounter() {
  const [count, setCount] = useState(0)
 
  const aumenta   = () => setCount((prev) => prev + 1)
  const diminuisci = () => setCount((prev) => prev - 1)
  const reset      = () => setCount(0)
 
  return { count, aumenta, diminuisci, reset }
}
 
// ─── useForm ───────────────────────────────────────────────────────────────────
 
interface FormState {
  username: string
  password: string
}
 
export function useForm() {
  const [stato, setStato] = useState<FormState>({ username: "", password: "" })
 
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setStato((prev) => ({ ...prev, [name]: value }))
  }
 
  return { stato, handleChange }
}
 
// ─── Login ─────────────────────────────────────────────────────────────────────
 
export function Login() {
  const { stato, handleChange } = useForm()
 
  return (
    <>
      <input name="username" value={stato.username} onChange={handleChange} />
      <input name="password" type="password" value={stato.password} onChange={handleChange} />
    </>
  )
}
 
// ─── useGithubUser ─────────────────────────────────────────────────────────────
 
interface GithubUser {
  login: string
  name: string
  avatar_url: string
  public_repos: number
  followers: number
  following: number
  bio: string | null
}
 
export function useGithubUser(username: string | null) {
  const { data, isLoading, error, refetch } = useQuery<GithubUser, Error>({
    queryKey: ["githubUser", username],
    queryFn: async () => {
      const res = await fetch(`https://api.github.com/users/${username}`)
      if (!res.ok) throw new Error("Utente non trovato")
      return res.json() as Promise<GithubUser>
    },
    enabled: username !== null, // nessuna richiesta se username è null
  })
 
  return {
    user: data ?? null,
    loading: isLoading,
    error: error?.message ?? null,
    fetchUser: refetch, // funzione per ri-fetchare manualmente
  }
}
 
// ─── useCurrentLocation ────────────────────────────────────────────────────────
 
interface Coordinates {
  lat: number
  lng: number
}
 
export function useCurrentLocation() {
  const [location, setLocation] = useState<Coordinates | null>(null)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState<string | null>(null)
 
  function getLocation() {
    setLoading(true)
    setError(null)
 
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      },
    )
  }
 
  return { location, loading, error, getLocation }
}