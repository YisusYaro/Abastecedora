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
        $mensaje = $_POST['mensaje'];
        
        $query = "SELECT * FROM productos ";
        class Producto{
            public $idProducto = "";
            public $nombreProducto = "";
            public $descripcion = "";
            public $precio = 0;
            public $existencia = 0;
            public $linkIMG = "";
        }
        $productos = array();

        $result = mysqli_query($conn, $query);
        while($registro=mysqli_fetch_array($result)){
            $producto = new Producto;
            
            $producto -> idProducto = $registro[0];
            $producto -> nombreProducto = $registro[1];
            $producto -> descripcion = $registro[2];
            $producto -> precio = $registro[3];
            $producto -> existencia = $registro[4];
            $producto -> linkIMG = $registro[5];
            
            array_push($productos, $producto);
        
            
        }

        if($result) {
            echo json_encode($productos);
        } else {
            echo "No funciona";
        }
           


?>