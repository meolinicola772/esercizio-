
// Crea un componente MouseClicker che contenga un pulsante con la prop name impostata alla stringa "one".
//  Aggiungi un gestore di eventi al pulsante che stampa la prop name nella console quando cliccato, 
//  leggendo la proprietà event.target.name.
// Aggiungi un'immagine all'interno del pulsante e, senza creare un nuovo gestore di eventi o allegare
//  un gestore di eventi all'immagine, stampa l'attributo name del pulsante indipendentemente dal fatto che si clicchi 
//  sul pulsante o sull'immagine.
// Aggiungi un gestore di eventi onClick all'immagine che stampa il src dell'immagine nella console. L'attributo name
//  del pulsante viene comunque stampato nella console quando si clicca sull'immagine? Perché?
// Come puoi impedire che l'attributo name del pulsante venga stampato nella console quando si clicca sull'immagine?
// Crea un componente MultiButton con tre pulsanti, ciascuno con la prop name impostata rispettivamente a "one", "two"
//  e "three". Aggiungi lo stesso gestore di eventi a ciascun pulsante che stampa la prop name nella console quando cliccato, 
//  leggendo la proprietà event.target.name.



import { useEffect, useState } from 'react'
import { MouseClicker } from './components/click.jsx'


export default function App() {
  return (
    <div>
      <MouseClicker />
    </div>
  )
}

