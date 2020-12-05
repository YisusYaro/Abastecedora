function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

function hoyFecha(){
    var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();
        
        dd = addZero(dd);
        mm = addZero(mm);
        
        return yyyy+'-'+mm+'-'+dd;
}

var usuarioActual = sessionStorage.getItem('usuarioActual');
usuarioActual = JSON.parse(usuarioActual);

var dato = {mensaje:"Solicitar Pedidos"};

$.ajax({
    data:  dato,
    url:   'verPedidos.php',
    type:  'post',
    beforeSend: function () {
            
    },
    success:  function (response) {
        
            //alert(response);
            
            pedidosRecibidos = JSON.parse(response);
            
            pedidos = pedidosRecibidos;
            
            visualizarPedidos(pedidosRecibidos);
            
    }
});


function visualizarPedidos(pedidos){
    
    console.log(pedidos);
    
    var ventaTotalDelDia = 0;
    var ventaTotalDelDiaFaltante = 0;
    
    var divVentasHistoricas = document.createElement("div");
    divVentasHistoricas.innerHTML = "<h1>Ventas historicas</h1>";
    divVentasHistoricas.setAttribute("id", "divPedidoSolicitudCliente");
    document.getElementById("pedidos").appendChild(divVentasHistoricas);
    
    
    for(let i=(pedidos.length-1); i>=0; i--){
        var divPedido = document.createElement("div");
        
        var pPedido = document.createElement("h1");
        pPedido.innerHTML = "Pedido (id): "+(pedidos[i]['idPedido']);
        divPedido.appendChild(pPedido);

        if(pedidos[i]['status']=="realizado"){
            divPedido.setAttribute("id", "divPedidoRealizado");
        }
        if(pedidos[i]['status']=="solicitud"){
            divPedido.setAttribute("id", "divPedidoSolicitud");
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
        
        if(pedidos[i]['status']=="realizado" && hoyFecha()== pedidos[i]['fecha']){
            ventaTotalDelDia+= parseInt(pedidos[i]['precioTotal']);
        }
        
        if(pedidos[i]['status']=="solicitud" && hoyFecha()== pedidos[i]['fecha']){
            ventaTotalDelDiaFaltante+= parseInt(pedidos[i]['precioTotal']);
        }
        
        document.getElementById("pedidos").appendChild(divPedido);
    }
    
    var divVentaTotalDelDia = document.createElement("div");
    divVentaTotalDelDia.innerHTML = "<h1>Venta Total del día: $"+ventaTotalDelDia+"</h1>";
    divVentaTotalDelDia.setAttribute("id", "divPedidoRealizado");
    document.getElementById("pedidos").appendChild(divVentaTotalDelDia);
    
    var divVentaTotalDelDiaFaltante = document.createElement("div");
    divVentaTotalDelDiaFaltante.innerHTML = "<h1>Venta Total del día Faltante: $"+ventaTotalDelDiaFaltante+"</h1>";
    divVentaTotalDelDiaFaltante.setAttribute("id", "divPedidoSolicitud");
    document.getElementById("pedidos").appendChild(divVentaTotalDelDiaFaltante);
    
}