// Array para almacenar los nombres
let amigos = [];

// Array para almacenar los nombres ya sorteados
let sorteados = [];

// Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo sin repetición
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Si ya salieron todos, reiniciar
    if (sorteados.length === amigos.length) {
        alert("Todos los amigos ya fueron sorteados. Reiniciando lista...");
        sorteados = [];
    }

    let amigoSorteado;

    // Repetir hasta encontrar uno que no haya salido antes
    do {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (sorteados.includes(amigoSorteado));

    // Guardar en lista de sorteados
    sorteados.push(amigoSorteado);

    // Mostrar en pantalla
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    let li = document.createElement("li");
    li.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    resultadoLista.appendChild(li);
}
