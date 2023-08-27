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
  //elimnar PRODUCTO
  const eliminarCLiente=(id)=>{
    console.log("eliminar a --->",id);
    return fetch(`https://64c83ebfa1fe0128fbd5b9a9.mockapi.io/producto/${id}`,{
      method:"DELETE",
    });
  }
  const detalleClente=(id)=>{
    return fetch(`https://64c83ebfa1fe0128fbd5b9a9.mockapi.io/producto/${id}`).then(respuesta=>respuesta.json());
  };

  const actualizarCliente=(nombre,categoria,url,descripcion,precio,id)=>{
    return fetch(`https://64c83ebfa1fe0128fbd5b9a9.mockapi.io/producto/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type": "application/json"
        },
        body:JSON.stringify({nombre,categoria,url,descripcion,precio})
    }).then((respuesta)=>respuesta).catch((err)=>console.log(err));
  }
  
export const clientServices ={
  listaClientes,
  crearCliente,
  eliminarCLiente,
  detalleClente,
  actualizarCliente,
};