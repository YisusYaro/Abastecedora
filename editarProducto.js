var productoAEditar = sessionStorage.getItem('miProductoAEditar');

productoAEditar = JSON.parse(productoAEditar);

document.getElementById("nombreProducto").value = productoAEditar['nombreProducto'];
document.getElementById("descripcion").value = productoAEditar['descripcion'];
document.getElementById("unidades").value = productoAEditar['existencia'];
document.getElementById("precio").value = productoAEditar['precio'];

 /////////////////
var divImagen =document.createElement("div");
var imgProducto = document.createElement("img");
imgProducto.src = productoAEditar['linkIMG'];
divImagen.appendChild(imgProducto);

document.getElementById("contenedorImagen").appendChild(divImagen);
////////////
var imagenAntigua = productoAEditar['linkIMG'];

const fileInput = document.getElementById('image');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
}

var producto;

document.getElementById("editar").onclick = function(){

    if(document.getElementById(selectedFile)==null){
        
        producto = {idProducto: productoAEditar['idProducto'] ,nombreProducto: document.getElementById("nombreProducto").value,linkIMG: imagenAntigua,
         descripcion: document.getElementById("descripcion").value, precio: document.getElementById("precio").value,
          unidades: document.getElementById("unidades").value};
            
            
        console.log(producto);
    
        


    }else{
        
        $.ajax({
            data:  selectedFile,
            url:   'cambiarImagen.php',
            type:  'post',
            beforeSend: function () {
                    
            },
            success:  function (response) {
                    alert(response);
                    window.location.href = "editarProductos.html";
            }
    });
        
        
        
        producto = {idProducto: productoAEditar['idProducto'] ,nombreProducto: document.getElementById("nombreProducto").value,linkIMG: imagenAntigua,
         descripcion: document.getElementById("descripcion").value, precio: document.getElementById("precio").value,
          unidades: document.getElementById("unidades").value};
    }
    
    $.ajax({
            data:  producto,
            url:   'editarProducto.php',
            type:  'post',
            beforeSend: function () {
                    
            },
            success:  function (response) {
                    alert(response);
                    window.location.href = "editarProductos.html";
            }
    });
    
    
};

sessionStorage.removeItem('miProductoAEditar');