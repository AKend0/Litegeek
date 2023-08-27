import { clientServices } from "../Service/client-service.js";
const formulario= document.querySelector("[data-form]")

const obtenerInformacion=async()=>{
    const urlid = new URL(window.location);
    const id= urlid.searchParams.get("id");

    if(id===null){
        //window.location.href="../screens/error.html";
        console.log("error")
    };
 //coloca los datos obtenidos del producto en la pagina de editar
    const nombre = document.querySelector("[data-nombre]");
    const categoria = document.querySelector("[data-categoria]");
    const url = document.querySelector("[data-url]");
    const descripcion = document.querySelector("[data-descripcion]");
    const precio = document.querySelector("[data-precio]");
   
    try {
        const perfil=await clientServices.detalleClente(id);
        console.log(perfil);
        if(perfil.nombre&&perfil.categoria&&perfil.url&&perfil.url&&perfil.descripcion&&perfil.precio){
            nombre.value=perfil.nombre;
            categoria.value=perfil.categoria;
            url.value=perfil.url;
            descripcion.value=perfil.descripcion;
            precio.value=perfil.precio;
        }else{
            throw new Error()
        }

    } catch (error) {
        console.log("catch Error",error);
        
    }

}

obtenerInformacion();
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const urlid = new URL(window.location);
    const id= urlid.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const url = document.querySelector("[data-url]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const precio = document.querySelector("[data-precio]").value;
    //actualiza los datos del producto
    clientServices.actualizarCliente(nombre, categoria,url,descripcion,precio,id).then(()=>{
       //console.log(nombre, categoria,url,descripcion,precio)
       alert('Cambios realizados exitosamente');
       window.location.href="productos.html"

    });
})  