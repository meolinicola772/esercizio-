
// Estrai il messaggio "What a beautiful day!" in un nuovo componente chiamato Message e renderizzalo all'interno del componente Hello.
// Puoi utilizzare il componente Hello più di una volta nel componente App? Cosa succede se lo fai?
// Puoi renderizzare il componente Message direttamente all'interno del componente App? Cosa succede se lo fai?

export function Message(){
    return <p>What a beautiful day!</p>
}

export function Hello(){
    return <div>
        <h2>Hello, World!</h2>
        <Message />
        </div>
};

export function App(){
    return <div>
   <Hello />
   <Message />
    </div>
}