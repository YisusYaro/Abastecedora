

var productoAEditar = sessionStorage.getItem('miProductoAEditar');

productoAEditar = JSON.parse(productoAEditar);

document.getElementById("nombreProducto").value = productoAEditar['nombreProducto'];
document.getElementById("descripcion").value = productoAEditar['descripcion'];
document.getElementById("unidades").value = productoAEditar['existencia'];
document.getElementById("precio").value = productoAEditar['precio'];


var divImagen =document.createElement("div");
var imgProducto = document.createElement("img");
imgProducto.src = productoAEditar['linkIMG'];
divImagen.appendChild(imgProducto);

document.getElementById("contenedorImagen").appendChild(divImagen);

document.getElementById("idProducto").value = productoAEditar['idProducto'];

$(document).on('ready',function(){       
        $('#btn-ingresar').click(function(){
            $.ajax({                        
            type: "POST",                 
            url: editarProductosFinal.php,                     
            data: $("#formulario").serialize(), 
            success: function(data)             
            {
                 alert(data);               
            }
            });
        });
});


var producto;

var dato_archivo;

var form_data;

$('#editar').on('click', function(){
    //Obtengo el fichero que va a ser subido
    dato_archivo = $('#image').prop("files")[0];
 
    if(dato_archivo==undefined){
        console.log("no hay");
        
        producto = {idProducto: productoAEditar['idProducto'] ,nombreProducto: document.getElementById("nombreProducto").value,linkIMG: productoAEditar['linkIMG'],
         descripcion: document.getElementById("descripcion").value, precio: document.getElementById("precio").value,
          unidades: document.getElementById("unidades").value };
    
    $.ajax({
            data:  producto,
            url:   'editarProductoImgAntigua.php',
            type:  'post',
            beforeSend: function () {
                    
            },
            success:  function (response) {
                    alert(response);
                    window.location.href = "editarProductos.html";
            }
    });
    }else{
        
    }
    
});  