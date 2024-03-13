/*ESERCIZIO:
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.*/

//Recuperare elemento bottone play

const buttonPlayElement = document.querySelector(".button-play");
//console.log(buttonPlayElement);

//Aggiungere un event listener al click del bottone

buttonPlayElement.addEventListener("click", function(){

    //Recuperare elemento griglia con querySelector
    const gridElement = document.querySelector(".grid");
    //console.log(gridElement);

    //Svuotare la griglia prima di riempirla (in caso di secondo click)
    gridElement.innerHTML = '';

    //Dichiarare variabile lato griglia
    let gridSide = 10;
    //console.log(gridSide);

    //Calcolare variabile numero di celle facendo lato x lato
    let cellsNumber = gridSide * gridSide;
    //console.log(cellsNumber);

    //Aprire ciclo for che passa il numero delle celle
    for (let i = 0; i < cellsNumber; i++) {

        //Dichiarare numero che andrà dentro alle celle: indice + 1 per non partire da 0
        let num = i + 1;

        //Creare elemento div con createElement
        const divCellElement = document.createElement("div");

        //dargli classe "cell"
        divCellElement.classList.add("cell");

        //inserire numero in elemento
        divCellElement.innerHTML = `${num}`
        //console.log(divCellElement);

        //inserire in elemento griglia con append
        gridElement.append(divCellElement);

        //Aggiungere un event listener all'elemento div cella

        divCellElement.addEventListener("click", function(){

            //aggiungi classe bg-dark a elemento cella 
            //(toggle per aggiungerlo e toglierlo al click)
            divCellElement.classList.toggle("bg-dark");

        })
    }

})


/*ESERCIZIO:
Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà*/


//Recuperare elemento select

//Dichiarare variabile difficoltà con la value dell'elemento select

//inserire tutto ciò che ho in event listener per il bottone play in una funzione
//funzione ha in ingresso la variabile lato

//in event listener,
//SE variabile difficoltà = "hard", allora evoco la funzione con 10
//ALTRIMENTI SE variabile difficoltà = "normal", evoco la funzione con 9
//ALTRIMENTI evoco la funzione con 7





















