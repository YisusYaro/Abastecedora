<?php

    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    $contrasena = intval($contrasena);

    $servername = "localhost";
    $database = "abastecedora";
    $username = "root";
    $password = "";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    //echo "Connected successfully";
    

    if (!mysqli_select_db($conn, 'abastecedora')) {
        //echo 'No pudo seleccionar la base de datos';
        exit;
    }

    $sql       = "SELECT tipo FROM usuarios WHERE nombre = \"$usuario\" AND contrasena = \"$contrasena\"";
    $resultado = mysqli_query($conn, $sql);

    $row= mysqli_fetch_array($resultado);

    $salt = $row['tipo'];

    echo $salt;
  // Free result set
    //mysqli_free_result($resultado)

    //mysqli_close($conn);

?>