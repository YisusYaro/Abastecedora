
var persona;

document.getElementById("registrarse").onclick = function(){


    persona = { correo: document.getElementById("correo").value, contrasena: document.getElementById("contrasena").value, nombre: document.getElementById("nombre").value};

    $.ajax({
        data:  persona,
        url:   'registrarse.php',
        type:  'post',
        beforeSend: function () {
                
        },
        success:  function (response) {
                //alert("Bienvenido, tienes el rol de: "+response);
                alert("Bienvenido, ahora ya puedes iniciar sesión.");
                window.location.href="iniciarSesion.html";
        }
    });

};


