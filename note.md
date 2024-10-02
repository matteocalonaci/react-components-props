Hai definito il App componente, che è un componente funzionale che restituisce un `elemento JSX`.

Creo un componente `Card` nella cartella components.

Il componente Card restituisce un elemento JSX che rappresenta una card con le `prop` estratte. 

L'elemento card contiene:
- h2 per il titolo;
- img per l'immagine;
- elemento description per la descrizione;
- p per l'elemento figlio;

Nel componente App importo per 4 volte il componente Card ognuno con le proprie props (title, description, imgUrl, e children)

`Renderig condizionale`<br>

`inserito un `if` per gestire la stampa in pagina se la città è visitata.
Nel primo caso vado a ripetere il codice 2 volte allungandolo immotivatamente.
Nel secondo caso vado ad unsa re un `ternary operator` per avere un codice più pulito.

`Rendering di Liste`<br>

Creo `cities` un array di oggetti poi vado a itereare all'interno stampando una cart per ogni oggetto nell'array.
La funzione `map` restituisce un nuovo array che conterrà una Card per ciascuna città nell'array cities, con i corrispondenti oggetti impostati in base ai dati della città.

`.filter((city) => city.isVisitated)`  un filtro per mostrare in pagina solo le città visitate.

Usando `onClick` sul bottone e la funzione click, vado a creare un `evento` al click sul button.
In questo caso si apre un `alert`.

`Gestione dello stato`:
in Card.jsx
Definisco due variabili di stato utilizzando l'`useState` hook:
- count: un intero inizializzato a 0, con una funzione di aggiornamento setCount.
- items: un array inizializzato a [0, 1, 2], con una funzione di aggiornamento setItems.

Definisco una funzione addItems che aggiorna l' items array di stato aggiungendo un nuovo elemento con la lunghezza corrente dell'array.

in App.jsx
Definisco una variabile di stato utilizzando l'`useState` hook:
- user: un oggetto inizializzato a { name: "dimitri", age: 29 }, con una funzione di aggiornamento `setUser` 

Definisco una funzione `updateUser` che aggiorna l'`user` oggetto di stato con il nuovo oggetto utilizzando setUser

`Comunicazione Child to Parent`
Creo un componente `CardForm` che al suo stato non può chiamare le funzioni e mandare i dati ad `App.jsx` come prop.
L'unica cosa che può fare è ricevere prop.

In App.jsx rendo le mie città uno `state` in modo da creare una funzione che ci permette di riprendere tutte le città che già avevamo ed aggiungere la nuova città che arriva.

Prendo prenso il riferimento alla funzione `addCity` e lo passo ad CardForm.

In CardForm
prendiamo la nostra prop,
creiamo una funzione `handleClick` con i dati della nuova città.
Passiamo la funzione al button onClick che la aggiungerà alle nostre cities.
Essendo le nostre cities uno state viene notificata l'aggiunta della nuiova city.
Di conseguenza App.jsx viene rireinderizzato con tutte le card  con la nuova city
