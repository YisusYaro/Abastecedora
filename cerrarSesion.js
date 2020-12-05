document.getElementById("cerrarSesion").onclick = function(){
    
    var dato = {mensaje:"Cerrar sesion"};
    
    $.ajax({
        data:  dato,
        url:   'cerrarSesion.php',
        type:  'post',
        beforeSend: function () {
                
        },
        success:  function (response) {
                window.location.href="index.html";
        }
    });
    sessionStorage.removeItem('usuarioActual');
};
