import { clientServices } from "../Service/client-service.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento) =>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const url = document.querySelector("[data-url]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const precio = document.querySelector("[data-precio]").value;
    clientServices.crearCliente(nombre, categoria,url,descripcion,precio).then(() =>{
        window.location.href ="productos.html";

    }).catch(err =>console.log(err));
}); 