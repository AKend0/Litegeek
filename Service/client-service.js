const listaClientes = () => fetch("https://64c83ebfa1fe0128fbd5b9a9.mockapi.io/producto").then((respuesta) => respuesta.json());
const crearCliente=(nombre,categoria,url,descripcion,precio)=>{
 return fetch("https://64c83ebfa1fe0128fbd5b9a9.mockapi.io/producto",{
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