Hai definito il App componente, che è un componente funzionale che restituisce un `elemento JSX`.

Creo un componente `Card` nella cartella components.

Il componente Card restituisce un elemento JSX che rappresenta una card con le `prop` estratte. 

L'elemento card contiene:
- h2 per il titolo;
- img per l'immagine;
- elemento description per la descrizione;
- p per l'elemento figlio;

Nel componente App importo per 4 volte il componente Card ognuno con le proprie props (title, description, imgUrl, e children)