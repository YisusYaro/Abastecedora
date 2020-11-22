
var persona;

document.getElementById("iniciarSesion").onclick = function(){


    persona = { usuario: document.getElementById("cajaUsuario").value, contrasena: document.getElementById("cajaContraseña").value};

    console.log(persona);

    $.ajax({
        data:  persona,
        url:   'ejemplo.php',
        type:  'post',
        beforeSend: function () {
                alert("procesando");
        },
        success:  function (response) {
                document.getElementById("cajaUsuario").value = response;
        }
    });

};


