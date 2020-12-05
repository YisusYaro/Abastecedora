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

        $query = "DELETE FROM productos WHERE idProducto=$idProducto";
        
        $result = mysqli_query($conn, $query);

        if($result) {
            echo "Borrado exitoso";
        } else {
            echo "No funcionó";
        }
           


?>