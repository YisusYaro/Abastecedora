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
        //echo "Connected successfully";
        $idProducto = $_POST['idProducto'];
        $nombreProducto = $_POST['nombreProducto'];
        $linkIMG = $_POST['linkIMG'];
        $descripcion = $_POST['descripcion'];
        $precio = $_POST['precio'];
        $unidades = $_POST['unidades'];
        
        $query = "UPDATE productos set nombreProducto=\"$nombreProducto\", linkIMG=\"$linkIMG\", descripcion=\"$descripcion\", precio=$precio, existencia=$unidades where idProducto = $idProducto";


        $result = mysqli_query($conn, $query);

        if($result) {
            echo "Editado Exitoso";
        } else {
            echo "Error";
        }
           


?>