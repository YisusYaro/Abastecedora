var mensaje = {tipo:"cualquiera"};

$.ajax({
    data:  mensaje,
    url:   'comprobarAccesoIndex.php',
    type:  'post',
    beforeSend: function () {
            
    },
    success:  function (response) {
            if(response=="cliente"){
                document.getElementById("iniciarSesion").style.display = 'none';
                document.getElementById("registrarse").style.display = 'none';
                document.getElementById("panelDueno").style.display = 'none';
                document.getElementById("panelEmpleado").style.display = 'none';
            }
            if(response=="dueno"){
                document.getElementById("iniciarSesion").style.display = 'none';
                document.getElementById("registrarse").style.display = 'none';
                document.getElementById("catalogo").style.display = 'none';
                document.getElementById("panelEmpleado").style.display = 'none';
            }
            if(response=="empleado"){
                document.getElementById("iniciarSesion").style.display = 'none';
                document.getElementById("registrarse").style.display = 'none';
                document.getElementById("panelDueno").style.display = 'none';
                document.getElementById("catalogo").style.display = 'none';
            }
            if(response=="sesion inactiva"){
                document.getElementById("cerrarSesion").style.display = 'none';
                document.getElementById("panelDueno").style.display = 'none';
                document.getElementById("catalogo").style.display = 'none';
                document.getElementById("panelEmpleado").style.display = 'none';
            }
            
    }
});
