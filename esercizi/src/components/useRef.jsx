// Crea un componente FocusableInput che renderizza un tag input.
//  Non appena il componente viene renderizzato, il tag input dovrebbe essere automaticamente messo a fuoco.
// Utilizzando StrictMode, crea un componente con un effetto che stampa un messaggio solo quando il componente è 
// montato per la prima volta. Usa un ref per tenere traccia se il componente è montato o meno.
// Modifica il componente Counter in modo che ogni volta che il valore del contatore cambia, 
// il valore di un ref venga aggiornato per contenere la direzione del cambiamento (cioè "up" o "down") rispetto alla prop initialValue. 
// Stampa il valore del ref nella console solo quando è diverso dal valore precedente. 

import { useEffect, useRef, StrictMode, useState } from "react";


export function FocusableInput(){
const inputRef = useRef<HTMLInputElement>(null)



useEffect(()=> {
    if(inputRef.current){
        inputRef.current.focus()
    }
},[])


return (
    <>
 <input ref={inputRef} />
</>
)}

export function MountLogger() {
  const isMounted = useRef(false)  
  useEffect(() => {
    if(isMounted.current===false){
      console.log("montato!")
      isMounted.current = true
    }
  }, [])

  return <div>MountLogger</div>
}

export function Counter({ initialValue }: { initialValue: number }){
    const [data, setData] = useState(initialValue)
    const directionRef = useRef('')  

useEffect(() => {
    const direzione = data > initialValue ? "up" : "down"
  if(directionRef.current !== direzione){
    console.log(direzione)
    directionRef.current = direzione
  }
}, [data])




    
    return (<>
   <button onClick={()=> setData(c => c - 1)}>-</button>
     <button onClick={()=> setData(c => c + 1)}>+</button>
     <span>{data}</span>
      </>)
}

