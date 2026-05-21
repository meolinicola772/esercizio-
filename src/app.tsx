// Crea un componente TodoList che renderizza un tag ul con un tag li per ogni elemento contenuto nella variabile di stato items. 
// La variabile di stato items dovrebbe essere un array di stringhe. 
// Il componente TodoList dovrebbe anche contenere un tag input e un button. Quando il button viene cliccato,
//  l'event handler dovrebbe aggiungere il valore del tag input all'array items.
// Modifica il componente TodoList in modo che l'input venga svuotato ogni volta che un Todo viene aggiunto all'array items.
// Modifica il componente TodoList aggiungendo un button "reset" che svuota l'array items quando cliccato.
// Modifica il componente TodoList aggiungendo un button "remove" a ogni tag li.
//  Quando cliccato, l'event handler dovrebbe rimuovere l'elemento corrispondente dall'array items.

import { useState } from "react"


export function ToDoList() {

    const [items, setItems] = useState(['uno','due','tre'])
    const [input, setInput] = useState('')


    function eventHandler(){
  setItems([...items, input])
  setInput('')
    }

return (
<>
<ul> {items.map((item) => <li>{item} <button onClick={() => setItems(items.filter(i => i !== item))}>remove</button></li>)}</ul>
    <input  value={input} 
  onChange={(e) => setInput(e.target.value)} />
    <button onClick={eventHandler} />
    <button onClick={() =>setItems([])} />
    </>
)

}