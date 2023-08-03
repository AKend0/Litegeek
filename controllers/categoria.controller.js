import { clientServices } from "../Service/client-service.js";

const crearNuevoProducto = (nombre, categoria, url, precio) => {
  const lineaProducto = document.createElement("div");
  const contenido = `
  <div class="Productos__box">
  <ul class="Productos__box--Container">
  <div class="Productos__box--subcontenedorImg">
    <img class="Productos__box--Container--Img"  src="${url}" alt="${categoria}">
    </div>
    <div class="Productos__box--subcontenedorProduct">
    <h2 class="Productos__title"> ${nombre}</h2>
    <h3 class="Productos__price">Precio : ${precio}</h3>
  </div>
    <button class="Producto--boton" onclick="window.location.href = '#'">
    Ver Producto
    </button>
  </ul>
  </div>`;
  lineaProducto.innerHTML = contenido;
  return lineaProducto;
};

clientServices.listaClientes()
  .then((data) => {
    console.log("Data received:", data); // Check the data received from the server

    // Categorize the products and append them to their respective div elements
    data.forEach(({ nombre, categoria, url, precio }) => {
      const nuevaLinea = crearNuevoProducto(nombre, categoria, url, precio);

      // Get the corresponding div element based on the product's category
      const categoryDiv = document.querySelector(`[data-${categoria}]`);

      if (categoryDiv) {
        categoryDiv.appendChild(nuevaLinea);
      } else {
        console.error(`Unknown category: ${categoria}`);
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error); // Log the error for debugging
    alert("Ocurrió un error");
    console.error(`Unknown category: ${categoria}`);
  });
