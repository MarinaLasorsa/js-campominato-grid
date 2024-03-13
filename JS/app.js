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






















