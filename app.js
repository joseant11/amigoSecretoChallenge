// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
const amigos = [];

/**
 * Función para agregar un amigo a la lista.
 */
function agregarAmigo() {
  // Obtener el elemento del input y extraer el valor ingresado
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que se haya ingresado un nombre
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar el nombre al array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista visible en la página
  actualizarLista();
}

/**
 * Función para actualizar la lista de amigos en el DOM.
 */
function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista actual
  listaAmigos.innerHTML = "";

  // Recorrer el array de amigos y crear un elemento <li> para cada uno
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

/**
 * Función para sortear un amigo secreto de forma aleatoria.
 */
function sortearAmigo() {
  // Verificar que exista al menos un nombre en la lista
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, agrega al menos un nombre.");
    return;
  }

  // Calcular un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];

  // Mostrar el resultado en la sección correspondiente
  mostrarResultado(amigoSeleccionado);
}

/**
 * Función para mostrar el resultado del sorteo en el DOM.
 * @param {string} nombre - El nombre del amigo secreto seleccionado.
 */
function mostrarResultado(nombre) {
  const resultadoUl = document.getElementById("resultado");

  // Limpiar cualquier resultado anterior
  resultadoUl.innerHTML = "";

  // Crear y agregar el elemento con el mensaje
  const li = document.createElement("li");
  li.textContent = `¡El amigo secreto es: ${nombre}!`;
  resultadoUl.appendChild(li);
}
