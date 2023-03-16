/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.*/

//!Lista della spesa

let listaSpesa = ["Pomodori", "Cipolle", "Insalata", "Pasta" ];

//!seleziono l'html Element

let listaHtml = document.getElementById("lista");


//!ciclo while per stampare gli elementi della lista uno per uno 


let i = 0;

while (i < listaSpesa.length) {

    let elementoLista = document.createElement("li");

    elementoLista.textContent = listaSpesa[i];

    listaHtml.appendChild(elementoLista);

    i++;

}


