var miPedidoNota = sessionStorage.getItem('miPedidoNota');
miPedidoNota=JSON.parse(miPedidoNota);
console.log(miPedidoNota);
var divPedido = document.createElement("div");

var ulPedido = document.createElement("ul");
var liIdPedido = document.createElement("li");
liIdPedido.innerHTML = "Identificador de pedido: "+miPedidoNota['idPedido'];
ulPedido.appendChild(liIdPedido);

var liIdUsuario = document.createElement("li");
liIdUsuario.innerHTML = "Identificador de cliente: "+miPedidoNota['idUsuario'];
ulPedido.appendChild(liIdUsuario);

var liFecha = document.createElement("li");
liFecha.innerHTML = "Fecha: "+miPedidoNota['fecha'];
ulPedido.appendChild(liFecha);

var liIdEmpleado = document.createElement("li");
liIdEmpleado.innerHTML = "Identificador del empleado: "+miPedidoNota['idEmpleado'];
ulPedido.appendChild(liIdEmpleado);

var liEstatus = document.createElement("li");
liEstatus.innerHTML = "Estado del pedido: "+miPedidoNota['status'];
ulPedido.appendChild(liEstatus);

for(var j=0; j<miPedidoNota['productosPedido'].length; j++){
    
    var liDetalles = document.createElement("li");
    liDetalles.innerHTML = "Detalles del producto "+(j+1)+": ";
    
    var ulDetalles = document.createElement("ul");
    
    var liDetalleIdProducto = document.createElement("li");
    liDetalleIdProducto.innerHTML = "Identificador del producto: "+miPedidoNota['productosPedido'][j]['idProducto'];
    ulDetalles.appendChild(liDetalleIdProducto);
    
    var liDetalleNombreProducto = document.createElement("li");
    liDetalleNombreProducto.innerHTML = "Nombre del producto: "+miPedidoNota['productosPedidoCaracteristicas'][j]['nombreProducto'];
    ulDetalles.appendChild(liDetalleNombreProducto);
    
    var liDetallePrecioUnitario = document.createElement("li");
    liDetallePrecioUnitario.innerHTML = "Precio Por Unidad ($): "+miPedidoNota['productosPedidoCaracteristicas'][j]['precio'];
    ulDetalles.appendChild(liDetallePrecioUnitario);
    
    var liDetalleCantidad = document.createElement("li");
    liDetalleCantidad.innerHTML = "Cantidad: "+miPedidoNota['productosPedido'][j]['cantidad'];
    ulDetalles.appendChild(liDetalleCantidad);
    
    var liDetallePrecio = document.createElement("li");
    liDetallePrecio.innerHTML = "Precio Por Cantidad ($): "+miPedidoNota['productosPedido'][j]['precio'];
    ulDetalles.appendChild(liDetallePrecio);
    
    
    liDetalles.appendChild(ulDetalles);
    ulPedido.appendChild(liDetalles);
    
}



ulPedido.appendChild(liDetalles);


var liPrecioTotal = document.createElement("li");
liPrecioTotal.innerHTML = "Precio Total ($): "+miPedidoNota['precioTotal'];
ulPedido.appendChild(liPrecioTotal);


divPedido.appendChild(ulPedido);



document.getElementById("pedido").appendChild(divPedido);


    function imprimirDIV(contenido) {
        var ficha = document.getElementById(contenido);
        var ventanaImpresion = window.open(' ', 'popUp');
        ventanaImpresion.document.write(ficha.innerHTML);
        ventanaImpresion.document.close();
        ventanaImpresion.print();
        ventanaImpresion.close();
    }