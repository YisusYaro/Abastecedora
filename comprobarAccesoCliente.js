var mensaje = {tipo:"cliente"};

$.ajax({
    data:  mensaje,
    url:   'comprobarAcceso.php',
    type:  'post',
    beforeSend: function () {
            
    },
    success:  function (response) {
            if(response=="Acceso denegado"){
                window.location.href="iniciarSesion.html";
                
                var dato = {mensaje:"Cerrar sesion"};
    
                $.ajax({
                    data:  dato,
                    url:   'cerrarSesion.php',
                    type:  'post',
                    beforeSend: function () {
                            
                    },
                    success:  function (response) {
                            window.location.href="iniciarSesion.html";
                    }
                });
                sessionStorage.removeItem('usuarioActual');
            }
            
            
    }
});
