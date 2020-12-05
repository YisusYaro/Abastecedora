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
        echo "Connected successfully";
        $nombreProducto = $_POST['nombreProducto'];
        $linkIMG = $_POST['linkIMG'];
        $descripcion = $_POST['descripcion'];
        $precio = $_POST['precio'];
        $unidades = $_POST['unidades'];
        
        $url=$_POST['imagen'];
        echo "Este es el path: ".$url."";
        $dataImagen = file_get_contents($url);
        echo "imagen cargada correctamente ";
        $nuevaImagen = "https://abastecedorafcc.000webhostapp.com/imagenes.html/".$nombreProducto.".jpg";
        file_put_contents($nuevaImagen, $dataImagen);
        echo "Imagen colocada correctamente";

        $query = "INSERT INTO productos (nombreProducto,descripcion,precio,existencia,linkIMG)
VALUES (\"$nombreProducto\",\"$descripcion\",$precio,$unidades,\"$linkIMG\",\"$nuevaImagen\") ";


        $result = mysqli_query($conn, $query);

        if($result) {
            echo "Funciona";
        } else {
            echo "No funciona";
        }
           


?>