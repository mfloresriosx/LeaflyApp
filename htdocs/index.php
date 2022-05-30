<?php
	function OpenCon(){
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $db = "growbase";
        $conn = new mysqli( $dbhost, $dbuser, $dbpass, $db )
        or die("Connect failed %s\n". $conn -> error);
        return $conn;
    } 
	function CloseCon ($conn){
        $conn -> close();
    }
	$conn = Opencon();
    $nickname = $_GET['nickname'];
    var_dump($nickname);
    $sql = "SELECT * FROM users WHERE nickname= '".$nickname."'";
    $result = $conn->query($sql);
    $set=array ();
    $row = mysqli_fetch_array($result);
    $set[] = $row; 
			#echo json_encode($set);
            if ($row != null) {
                echo 'si hay el usuario deseado';
                return 1;
                # code...
            }else{
                echo 'no existe';
            }
            CloseCon($conn);
            
?>

