<?php

$tipo = $_POST['tipo'];

session_start();

if($_SESSION){
    echo $_SESSION['login'];
}
else{
    echo "sesion inactiva";
}

?>