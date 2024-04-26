const consumirApi = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    // Obtener una referencia al div
    let contenido1 = document.getElementById("contenido1");
    let contenido2 = document.getElementById("contenido2");
    let contenido3 = document.getElementById("contenido3");

    // Crear elementos de texto
    let texto1 = document.createElement("p");
    let texto2 = document.createElement("p");
    let texto3 = document.createElement("p");

    texto1.innerText = resultado.name;
    texto2.innerText = resultado.order;

    contenido1.appendChild(texto1);
    contenido2.appendChild(texto2);
    console.log(resultado)
}

consumirApi();