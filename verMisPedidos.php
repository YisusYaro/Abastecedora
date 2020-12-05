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
        $idUsuario = $_POST['idUsuario'];
        
        $query = "SELECT * FROM pedidos where idUsuario = $idUsuario";
        class Pedido{
            public $idPedido= "";
            public $idUsuario = "";
            public $fecha = "";
            public $idEmpleado = 0;
            public $status = 0;
            public $precioTotal = 0;
            public $productosPedido = array();
            public $productosPedidoCaracteristicas = array();
        }
        
        class ProductoPedido{
            public $idPedido= "";
            public $idProducto = "";
            public $cantidad = "";
            public $precio = 0;
        }
        
        class Producto{
            public $idProducto = "";
            public $nombreProducto = "";
            public $descripcion = "";
            public $precio = 0;
            public $existencia = 0;
            public $linkIMG = "";
        }
        
        
        $pedidos = array();

        $result = mysqli_query($conn, $query);
        while($registro=mysqli_fetch_array($result)){
            $pedido = new Pedido;
            
            $pedido -> idPedido = $registro[0];
            $pedido -> idUsuario = $registro[1];
            $pedido -> fecha = $registro[2];
            $pedido -> idEmpleado = $registro[3];
            $pedido -> status = $registro[4];
            $pedido -> precioTotal = $registro[5];
            
            //productosPedido
            $query1 = "SELECT * FROM productosPedido1 where idPedido = $registro[0] ";
            $result1 = mysqli_query($conn, $query1);
            while($registro1=mysqli_fetch_array($result1)){
                
                $productoPedido = new ProductoPedido;
                
                $productoPedido -> idPedido = $registro1[0];
                $productoPedido -> idProducto = $registro1[1];
                $productoPedido -> cantidad = $registro1[2];
                $productoPedido -> precio = $registro1[3];
                
                array_push($pedido -> productosPedido, $productoPedido);
                
                $idProducto = $productoPedido -> idProducto;
                
                //productosPedidoCaracteristicas
                $query2 = "SELECT * FROM productos where idProducto = $idProducto ";
                $result2 = mysqli_query($conn, $query2);
                $registro2=mysqli_fetch_array($result2);
                    /////////////////
                $producto = new Producto;
            
                $producto -> idProducto = $registro2[0];
                $producto -> nombreProducto = $registro2[1];
                $producto -> descripcion = $registro2[2];
                $producto -> precio = $registro2[3];
                $producto -> existencia = $registro2[4];
                $producto -> linkIMG = $registro2[5];
                
                array_push($pedido -> productosPedidoCaracteristicas, $producto);
                
            }
            
            
            array_push($pedidos, $pedido);
        
            
        }

        if($result) {
            echo json_encode($pedidos);
        } else {
            echo "No funciona";
        }
           


?>