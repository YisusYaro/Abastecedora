var productos;

var usuarioActual = sessionStorage.getItem('usuarioActual');
usuarioActual = JSON.parse(usuarioActual);
document.getElementById("bienvenida").innerHTML ="Hola " + usuarioActual['nombre'] + ", elige tus productos.";

var dato = {mensaje:"Solicitar Productos"};

$.ajax({
    data:  dato,
    url:   'verProductos.php',
    type:  'post',
    beforeSend: function () {
            
    },
    success:  function (response) {
            
            productosRecibidos = JSON.parse(response);
            
            productos=productosRecibidos;
            
            visualizarProductos(productosRecibidos);
            
    }
});

function visualizarProductos(productos){
    for(let i=0; i<productos.length; i++){
        //if(parseInt(productos[i]["existencia"])>0){
            var divProducto = document.createElement("div");
            
            var imgProducto = document.createElement("img");
            imgProducto.src = productos[i]["linkIMG"];
            divProducto.appendChild(imgProducto);
            
            var divUL = document.createElement("UL");
            
            var divLInombreProducto = document.createElement("LI");                 
            divLInombreProducto.innerHTML = productos[i]["nombreProducto"];         
            divUL.appendChild(divLInombreProducto);  
            
            var divLIdescripcion = document.createElement("LI"); 
            divLIdescripcion.innerHTML = "Descripción: "+productos[i]["descripcion"];         
            divUL.appendChild(divLIdescripcion);  
            
            var divLIprecio = document.createElement("LI");
            divLIprecio.innerHTML = "Precio: $"+productos[i]["precio"];         
            divUL.appendChild(divLIprecio);  
            
            var divLIexistencia = document.createElement("LI");
            divLIexistencia.innerHTML = "Existencia: "+productos[i]["existencia"];         
            divUL.appendChild(divLIexistencia); 
            
            divProducto.appendChild(divUL);
            
            var agregarProducto = document.createElement("INPUT");
            agregarProducto.setAttribute("type", "checkbox");
            agregarProducto.setAttribute("id",productos[i]["idProducto"]+"AgregarProducto");
            divProducto.appendChild(agregarProducto);
            
            var agregarProductoCantidad = document.createElement("INPUT");
            agregarProductoCantidad.setAttribute("type", "number");
            agregarProductoCantidad.value=1;
            agregarProductoCantidad.setAttribute("id",productos[i]["idProducto"]+"AgregarProductoCantidad");
            agregarProductoCantidad.setAttribute("min", 1);
            agregarProductoCantidad.setAttribute("max", productos[i]["existencia"]);
            agregarProductoCantidad.style.display = 'none';
            divProducto.appendChild(agregarProductoCantidad);
            
            agregarProductoCantidad.onblur = function(){
                if(document.getElementById(productos[i]["idProducto"]+"AgregarProductoCantidad").value<1){
                    alert("Alerta: No puedes comprar ese número de unidades (negativo).");
                    document.getElementById(productos[i]["idProducto"]+"AgregarProductoCantidad").value=1;
                }
                if(document.getElementById(productos[i]["idProducto"]+"AgregarProductoCantidad").value > parseInt(productos[i]["existencia"]) ){
                    alert("Alerta: No puedes comprar ese número de unidades (mayor a stock).");
                    document.getElementById(productos[i]["idProducto"]+"AgregarProductoCantidad").value=productos[i]["existencia"];
                }
                
            }
            
            agregarProducto.onclick = function(){
                if(document.getElementById(productos[i]["idProducto"]+"AgregarProducto").checked){
                    document.getElementById(productos[i]["idProducto"]+"AgregarProductoCantidad").style.display = "block";
                }
                else{
                    document.getElementById(productos[i]["idProducto"]+"AgregarProductoCantidad").style.display = "none";
                }
                
            };
            
            document.getElementById("catalogo").appendChild(divProducto);
        //}
    }
    
}

document.getElementById("confirmarPedido").onclick = function(){
    
    var productosPedido = [];
    
    var precioTotalPedido=0;
    for (let i=0; i<productos.length; i++){
        var precio=0;
        if(document.getElementById(productos[i]["idProducto"]+"AgregarProducto").checked){
            var cantidadProducto = parseInt(document.getElementById(productos[i]["idProducto"]+"AgregarProductoCantidad").value);
            var precioDelProducto = productos[i]["precio"];
            producto = { idProducto: productos[i]["idProducto"], cantidad: cantidadProducto, precio: (cantidadProducto*precioDelProducto)};
            productosPedido.push(producto);
            precioTotalPedido+=(cantidadProducto*precioDelProducto);
        }
    }
    
    pedido = { idUsuario: usuarioActual['idUsuario'], estatus: "solicitud", precioTotal: precioTotalPedido, productos: productosPedido};
    
    $.ajax({
        data:  pedido,
        url:   'generarPedido.php',
        type:  'post',
        beforeSend: function () {
                
        },
        success:  function (response) {
                //alert(response);
                location.reload();
                
        }
    });
    
};