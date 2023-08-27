import { clientServices } from "../Service/client-service.js";

const crearNuevoProducto = (nombre, categoria, url, precio, id) => {
  const lineaProducto = document.createElement("div");
  const contenido = `
    <div class="Productos__box">
      <ul class="Productos__box--Container">
        <div class="Productos__box--subcontenedorImg">
          <img class="Productos__box--Container--Img" src="${url}" alt="${categoria}">
        </div>
        <div class="Productos__box--subcontenedorProduct">
          <h2 class="Productos__title">${nombre}</h2>
          <h3 class="Productos__price">Precio: ${precio}</h3>
        </div>
        <button class="Producto--boton" onclick="window.location.href = 'editar_prducto.html?id=${id}'">
          Editar Producto
        </button>
        <button class="Eliminar--boton simple-button--delete" type="button" id="${id}">
          Eliminar Producto
        </button>
      </ul>
    </div>`;

  lineaProducto.innerHTML = contenido;

  const btn = lineaProducto.querySelector(".simple-button--delete");
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("id");
    clientServices.eliminarCLiente(id)
      .then((respuesta) => {
        console.log("producto eliminado:",respuesta);
        // Remove the deleted product from the DOM
        lineaProducto.remove();
      })
      .catch((err) => {
        console.error(err);
        alert("Ocurrió un error al eliminar el producto");
      });
  });

  return lineaProducto;
};

const table = document.querySelector("[data-table]");
clientServices.listaClientes()
  .then((data) => {
    data.forEach(({ nombre, categoria, url, precio, id }) => {
      const nuevaLinea = crearNuevoProducto(nombre, categoria, url, precio, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
    alert("Ocurrió un error al cargar la lista de productos");
  });
