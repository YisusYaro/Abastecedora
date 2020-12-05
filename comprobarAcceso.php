<?php

$tipo = $_POST['tipo'];

session_start();

if($_SESSION){
    if($_SESSION['login']!=$tipo){
        echo "Acceso denegado";
        exit(1);
    }
    
    else{
        echo "ok";
    }
}
else{
       echo "Acceso denegado";
}

?>