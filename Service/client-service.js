const listaClientes = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());
const crearCliente=(nombre,categoria,url,descripcion,precio)=>{
 return fetch("http://localhost:3000/productos",{
  method:"POST",
  headers:{
    "Content-Type": "application/json"
    },
    body:JSON.stringify({nombre,categoria,url,descripcion,precio,id:uuid.v4()})
  })
}
export const clientServices={
    listaClientes,
    crearCliente,
}