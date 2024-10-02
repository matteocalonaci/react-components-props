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