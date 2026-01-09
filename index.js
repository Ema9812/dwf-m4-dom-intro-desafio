const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  // 1️⃣ Seleccionar la lista <ul>
  const lista = document.querySelector(".lista");

  // 2️⃣ Eliminar todos los <li> existentes (sin borrar el <ul>)
  lista.innerHTML = "";

  // 3️⃣ Crear nuevos <li> a partir del array
  cosasQueAprendimos.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.tema;

    if (item.class !== "") {
      li.classList.add(item.class);
    }

    lista.appendChild(li);
  });
}

main();

//Actualizo index.js con versión final
