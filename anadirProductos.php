<?php

    $servername = "localhost";
    $username = "id15474228_root";
    $password = "+Gk[=21SP-M1o4Mx";
    $db = "id15474228_abastecedora";
    // Crear conexion
    $conn = mysqli_connect($servername, $username, $password,$db);
    // Checar
    if (!$conn) {
       die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";
    $nombreProducto = $_POST['nombreProducto'];
    $linkIMG = $_POST['linkIMG'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $unidades = $_POST['unidades'];

    $dir_subida = $_SERVER['DOCUMENT_ROOT'] . '/imagenes/';
    if (!file_exists($dir_subida . $nombreProducto. '/')) {
        mkdir($dir_subida . $nombreProducto. '/', 0777, true);
        echo "fichero no existe, creando";
        
    }
    echo "fichero existe, procediendo a subir imagen a ";
    $fichero_subido = $dir_subida . $nombreProducto . '/'.$nombreProducto .'';
    echo $fichero_subido;
    $fichero_subidobd = '/imagenes/'.$nombreProducto . '/' .$nombreProducto .'';

    if (move_uploaded_file($_FILES['image']['tmp_name'], $fichero_subido)) {
        echo "El fichero es válido y se subió con éxito.\n";
        $query = "INSERT INTO productos (nombreProducto,descripcion,precio,existencia,linkIMG)
        VALUES (\"$nombreProducto\",\"$descripcion\",$precio,$unidades,\"$fichero_subidobd\") ";
    
    
            $result = mysqli_query($conn, $query);
    
            if($result) {
                echo "Funciona";
                
            } else {
            }
            
    } else {
        
        echo'<script type="text/javascript">
        alert("Archivo de imagen demasiado grande, elija uno menor a 1MB");
        window.location.href="https://abastecedorafcc.000webhostapp.com/anadirProductos.html";
        </script>';
        
    }
        
        
?>
<html>
<head>
<meta http-equiv="refresh" content="1;url=https://abastecedorafcc.000webhostapp.com/anadirProductos.html">
</head>
<body>
<p align="center">Redireccionando</p>
</body>
</html>