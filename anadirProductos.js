function validateForm() {
    var auxUnidades,auxPrecio, text;

  
  auxUnidades = document.getElementById("unidades").value;
  auxPrecio = document.getElementById("precio").value; 
  
  if (isNaN(auxUnidades) || auxUnidades < 1 || isNaN(auxPrecio) || auxPrecio<1) {
      
      
  } else {
    $(document).on('ready',function(){       
        $('#btn-ingresar').click(function(){
            $.ajax({                        
            type: "POST",                 
            url: anadirProductos.php,                     
            data: $("#formulario").serialize(), 
            success: function(data)             
            {
                 alert(data);               
            }
            });
        });
    });
  }
}




