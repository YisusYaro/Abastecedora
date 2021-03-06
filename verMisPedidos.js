var usuarioActual = sessionStorage.getItem('usuarioActual');
usuarioActual = JSON.parse(usuarioActual);

var dato = {idUsuario: usuarioActual["idUsuario"]};

$.ajax({
    data:  dato,
    url:   'verMisPedidos.php',
    type:  'post',
    beforeSend: function () {
            
    },
    success:  function (response) {
        
            //alert(response);
            
            var pedidosRecibidos = JSON.parse(response);
            
            visualizarPedidos(pedidosRecibidos);
            
    }
});


function visualizarPedidos(pedidos){
    
    console.log(pedidos);
    
    for(let i=(pedidos.length-1); i>=0; i--){
        var divPedido = document.createElement("div");
        
        var pPedido = document.createElement("h1");
        pPedido.innerHTML = "Pedido (id): "+(pedidos[i]['idPedido']);
        divPedido.appendChild(pPedido);

        if(pedidos[i]['status']=="realizado"){
            divPedido.setAttribute("id", "divPedidoRealizado");
        }
        if(pedidos[i]['status']=="solicitud"){
            divPedido.setAttribute("id", "divPedidoSolicitudCliente");
        }
        
        var ulPedido = document.createElement("ul");
        
        var liIdUsuario = document.createElement("li");
        liIdUsuario.innerHTML = "Identificador de cliente: "+pedidos[i]['idUsuario'];
        ulPedido.appendChild(liIdUsuario);
        
        var liFecha = document.createElement("li");
        liFecha.innerHTML = "Fecha: "+pedidos[i]['fecha'];
        ulPedido.appendChild(liFecha);
        
        var liIdEmpleado = document.createElement("li");
        liIdEmpleado.innerHTML = "Identificador del empleado: "+pedidos[i]['idEmpleado'];
        ulPedido.appendChild(liIdEmpleado);
        
        var liEstatus = document.createElement("li");
        liEstatus.innerHTML = "Estado del pedido: "+pedidos[i]['status'];
        ulPedido.appendChild(liEstatus);
        
        for(var j=0; j<pedidos[i]['productosPedido'].length; j++){
            
            var liDetalles = document.createElement("li");
            liDetalles.innerHTML = "Detalles del producto "+(j+1)+": ";
            
            var ulDetalles = document.createElement("ul");
            
            var liDetalleIdProducto = document.createElement("li");
            liDetalleIdProducto.innerHTML = "Identificador del producto: "+pedidos[i]['productosPedido'][j]['idProducto'];
            ulDetalles.appendChild(liDetalleIdProducto);
            
            var liDetalleNombreProducto = document.createElement("li");
            liDetalleNombreProducto.innerHTML = "Nombre del producto: "+pedidos[i]['productosPedidoCaracteristicas'][j]['nombreProducto'];
            ulDetalles.appendChild(liDetalleNombreProducto);
            
            var liDetallePrecioUnitario = document.createElement("li");
            liDetallePrecioUnitario.innerHTML = "Precio Por Unidad ($): "+pedidos[i]['productosPedidoCaracteristicas'][j]['precio'];
            ulDetalles.appendChild(liDetallePrecioUnitario);
            
            var liDetalleCantidad = document.createElement("li");
            liDetalleCantidad.innerHTML = "Cantidad: "+pedidos[i]['productosPedido'][j]['cantidad'];
            ulDetalles.appendChild(liDetalleCantidad);
            
            var liDetallePrecio = document.createElement("li");
            liDetallePrecio.innerHTML = "Precio Por Cantidad ($): "+pedidos[i]['productosPedido'][j]['precio'];
            ulDetalles.appendChild(liDetallePrecio);
            
            
            liDetalles.appendChild(ulDetalles);
            ulPedido.appendChild(liDetalles);
            
        }
        
        
        
        ulPedido.appendChild(liDetalles);
        
        
        var liPrecioTotal = document.createElement("li");
        liPrecioTotal.innerHTML = "Precio Total ($): "+pedidos[i]['precioTotal'];
        ulPedido.appendChild(liPrecioTotal);
        
        divPedido.appendChild(ulPedido);
        
        if(pedidos[i]['status']=="realizado"){
            var botonGenerarNota = document.createElement("button");
            botonGenerarNota.innerHTML = "Generar Nota";
            botonGenerarNota.setAttribute("id",pedidos[i]["idPedido"]);
            divPedido.appendChild(botonGenerarNota);
            
            botonGenerarNota.onclick = function(){
                var miPedido = pedidos[i];
                sessionStorage.setItem('miPedidoNota', JSON.stringify(miPedido));
                console.log(sessionStorage.getItem('miPedidoNota'));
                window.location.href="nota.html";
            };
        }
        
        
        
        document.getElementById("pedidos").appendChild(divPedido);
    }
    
}
