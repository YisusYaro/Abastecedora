<?php

    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $nombre = $_POST['nombre'];

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

    $sql = "INSERT INTO usuarios (correo,nombre,contrasena,tipo) VALUES (\"$correo\",\"$nombre\",\"$contrasena\",\"cliente\") ";
    $resultado = mysqli_query($conn, $sql);

    echo $resultado;
  // Free result set
    //mysqli_free_result($resultado)

    //mysqli_close($conn);

?>