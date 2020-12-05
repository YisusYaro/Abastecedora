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

var producto;

var dato_archivo;

var form_data;

$('#editar').on('click', function(){
    //Obtengo el fichero que va a ser subido
    dato_archivo = $('#image').prop("files")[0];
    //Creo un dato de formulario para pasarlo en el ajax
    form_data = new FormData();
    //Añado los datos del fichero que voy a subir
    //En el lado del servidor puede obtener el archivo a traves de $_FILES["file"]
    form_data.append("file", dato_archivo);
    /*form_data.append("idProducto",productoAEditar['idProducto']);
    form_data.append("nombreProducto",document.getElementById("nombreProducto").value);*/
    
 
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
        console.log("si hay");
        producto1 = {idProducto: productoAEditar['idProducto'] ,nombreProducto: document.getElementById("nombreProducto").value,linkIMG: JSON.stringify(form_data),
         descripcion: document.getElementById("descripcion").value, precio: document.getElementById("precio").value,
          unidades: document.getElementById("unidades").value };
        
        $.ajax({
                data:  producto1,
                url:   'editarProductoImgNueva.php',
                type:  'post',
                beforeSend: function () {
                        
                },
                success:  function (response) {
                        alert(response);
                        //window.location.href = "editarProductos.html";
                }
        });
        
        console.log(form_data);
        /*
        $.ajax({
        //La url que se encargara de procesar la subida del archivo
        url: 'editarProductoImgNueva.php',
        //El tipo de respuesta que me devolverá la página en mi caso será un texto indicando el estado de la subida
        dataType: 'text',
        processData: false,
        //El dato pasado a la solicitud
        data: form_data,
        //El tipo que será la solicitud
        type: 'post',
        //Si la operación tiene éxito...
        success: function(respuesta){
           alert(respuesta);
        },
        //Si la operación tiene un error
        error: function(){
            alert("Ha ocurrido un error");
        }
        });
        */
    }
    
});  

//sessionStorage.removeItem('miProductoAEditar');