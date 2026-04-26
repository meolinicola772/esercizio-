// Implementa un componente UncontrolledLogin che implementa tutte le operazioni del componente Login, 
// ma utilizzando componenti non controllati.
// Accedi ai valori del modulo utilizzando l'API FormData.
//  Stampa i valori del modulo nella console quando il pulsante "login" viene cliccato.

export function UncontrolledLogin() {
function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault()
const formData = new FormData(event.currentTarget)
const username = formData.get('username')
const password = formData.get('password')
console.log(username, password)
}

return (
<form onSubmit={handleFormSubmit}>
<input name="username" />
<input name="password" />
<button type="submit">Login</button>
</form>)
}
