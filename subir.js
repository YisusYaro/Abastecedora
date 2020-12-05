var producto;

document.getElementById("subir").onclick = function(){


    producto = { nombreProducto: document.getElementById("nombreProducto").value,linkIMG: document.getElementById("linkIMG").value,
     descripcion: document.getElementById("descripcion").value, precio: document.getElementById("precio").value,
      unidades: document.getElementById("unidades").value};
    console.log(producto);

    $.ajax({
        data:  producto,
        url:   'prod_upload.php',
        type:  'post',
        beforeSend: function () {
                
        },
        success:  function (response) {
                alert(response);
        }
    });

};