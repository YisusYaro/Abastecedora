
var persona;

document.getElementById("iniciarSesion").onclick = function(){


    persona = { usuario: document.getElementById("cajaUsuario").value, contrasena: document.getElementById("cajaContraseña").value};

    $.ajax({
        data:  persona,
        url:   'ejemplo.php',
        type:  'post',
        beforeSend: function () {
                
        },
        success:  function (response) {
                alert("Bienvenido, tienes el rol de: "+response);
        }
    });

};


