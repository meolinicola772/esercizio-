import {useState} from 'react'

export function Registrazione(){

    const [user, setUser] = useState({
        nome: '',
        cognome: '',
        email:'',
        password:'',
        
})

function handleChange(event){
const {name, value} = event.target


setUser((prev)=> ({...prev,  [name]:value }) )

}

function handleRegistrati(event){
event.preventDefault()

localStorage.setItem('user', JSON.stringify(user))

}

   return (
    <div>
        <form onSubmit={handleRegistrati}>
            <input type="text" name="nome" onChange={handleChange} placeholder="inserisci il tuo nome"></input>
            <input type="text" name='cognome' onChange={handleChange} placeholder="inserisci il tuo cognome"></input>
            <input type="email" name='email' onChange={handleChange} placeholder="inserisci la tua email"></input>
            <input type="password" name='password' onChange={handleChange} placeholder="inserisci la tua password"></input>
            <button type="submit">Registrati</button>

        </form>
    </div>
   ) 
}