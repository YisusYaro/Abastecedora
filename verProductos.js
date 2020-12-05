var dato = {mensaje:"Solicitar Productos"};

$.ajax({
    data:  dato,
    url:   'verProductos.php',
    type:  'post',
    beforeSend: function () {
            
    },
    success:  function (response) {
            
            productos = JSON.parse(response);
            
            visualizarProductos(productos);
            
    }
});

function visualizarProductos(productos){
    for(let i=0; i<productos.length; i++){
        
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
        
        document.getElementById("catalogo").appendChild(divProducto);
    }
    
}