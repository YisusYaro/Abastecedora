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
        $idPedido = $_POST['idPedido'];
        $idEmpleado = $_POST['idEmpleado'];
        
        $query = "UPDATE pedidos set estatus=\"realizado\", idEmpleado=$idEmpleado where idPedido = $idPedido";

        $result = mysqli_query($conn, $query);

        if($result) {
            echo "Editado Exitoso";
        } else {
            echo "Error";
        }
           


?>