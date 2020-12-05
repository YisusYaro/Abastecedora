<?php

    $idUsuario = $_POST['idUsuario'];
    $status = $_POST['estatus'];
    $precioTotal = $_POST['precioTotal'];
    $productos = $_POST['productos'];
    
    $servername = "localhost";
    $database = "id15474228_abastecedora";
    $username = "id15474228_root";
    $password = "+Gk[=21SP-M1o4Mx";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    //echo "Connected successfully";
    

    if (!mysqli_select_db($conn, $database)) {
        //echo 'No pudo seleccionar la base de datos';
        exit;
    }
    
    $fecha = date('Y-m-d H:i:s');
    
    
    $sql = "INSERT INTO pedidos (idUsuario, fecha, estatus, precioTotal) VALUES ($idUsuario, \"$fecha\",\"$status\",$precioTotal) ";

    
    $resultado = mysqli_query($conn, $sql);
    
    $idPedido = mysqli_insert_id($conn);
    
    if($resultado){
         for ($i = 0; $i < sizeof($productos); $i++) {
             
            //variables necesarias
            $idProducto =  $productos[$i]['idProducto'];
            $cantidad =  $productos[$i]['cantidad'];
            $precio = $productos[$i]['precio'];
            
            
            //consultamos la existencia
            $query = "SELECT existencia FROM productos WHERE idProducto = $idProducto";
            $result = mysqli_query($conn, $query);
            $registro= mysqli_fetch_array($result);
            $existencia = $registro['existencia'];
             
            //restamos las unidades deseadas de la existencia total
            $restantes = intval($existencia) - intval($cantidad);
            echo $restantes;
            echo $existencia;
            echo $cantidad;
            $query = "UPDATE productos set existencia=$restantes where idProducto = $idProducto";
            $result = mysqli_query($conn, $query);
            
            //guardamos los productos
            $sql = "INSERT INTO productosPedido1 (idPedido, idProducto, cantidad, precio) VALUES ($idPedido,$idProducto,$cantidad,$precio)";
            $resultado = mysqli_query($conn, $sql);
            
        }
    }
    else{
        echo "Fallo";
    }
    
    

?>