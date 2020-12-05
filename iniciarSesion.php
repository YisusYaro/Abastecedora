<?php

    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

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
    
    
    $query = "SELECT * FROM usuarios where correo=\"$correo\" and contrasena=\"$contrasena\" ";
        class Usuario{
            public $idUsuario = "";
            public $correo = "";
            public $nombre = "";
            public $tipo = "";
        }

        $resultado = mysqli_query($conn, $query);
        
        $registro= mysqli_fetch_array($resultado);
        
        $usuario = new Usuario;
        
        $usuario -> idUsuario = $registro[0];
        $usuario -> correo = $registro[1];
        $usuario -> nombre = $registro[2];
        $usuario -> tipo = $registro[4];

        session_start();

        if($resultado->num_rows){
            $_SESSION['login'] = $registro['4'];
            echo json_encode($usuario);
        } else {
            echo "Error";
        }
        //Free result set
        mysqli_free_result($resultado);
        mysqli_close($conn);

?>