
var persona;

document.getElementById("iniciarSesion").onclick = function(){


    persona = { correo: document.getElementById("correo").value, contrasena: document.getElementById("contrasena").value};

    $.ajax({
        data:  persona,
        url:   'iniciarSesion.php',
        type:  'post',
        beforeSend: function () {
                
        },
        success:  function (response) {
                if(response=="Error"){
                        alert("Usuario o contraseña invalidas");
                        document.getElementById("contrasena").value="";
                }
                else{
                    sessionStorage.setItem('usuarioActual', response);
                    var usuario = JSON.parse(response);
                    if(usuario['tipo']=="dueno"){
                        window.location.href="panelDueno.html"; 
                    }
                    if(usuario['tipo']=="empleado"){
                        window.location.href="panelEmpleado.html"; 
                    }
                    if(usuario['tipo']=="cliente"){
                        window.location.href="catalogo.html"; 
                    }
                }
        }
    });

};


