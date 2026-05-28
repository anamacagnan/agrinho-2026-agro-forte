document.getElementById("btnMensagem").addEventListener("click", () => {

    alert("O agro sustentável é o caminho para um futuro melhor 🌱");

});

function animarNumero(id, valorFinal, tempo){

    let elemento = document.getElementById(id);

    let inicio = 0;

    let incremento = valorFinal / (tempo / 50);

    let contador = setInterval(() => {

        inicio += incremento;

        if(inicio >= valorFinal){

            inicio = valorFinal;

            clearInterval(contador);
        }

        elemento.innerHTML = Math.floor(inicio) + "%";

    }, 50);
}

animarNumero("n1", 85, 2000);
animarNumero("n2", 70, 2500);
animarNumero("n3", 60, 3000);