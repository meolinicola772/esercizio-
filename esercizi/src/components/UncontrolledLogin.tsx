import { useRef } from 'react'

function UncontrolledLogin() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(usernameRef.current?.value, passwordRef.current?.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Login
      </h2>
      <input
        ref={usernameRef}
        type="text"
        placeholder="Username"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Login
      </button>
    </form>
  )
}

export default UncontrolledLogin