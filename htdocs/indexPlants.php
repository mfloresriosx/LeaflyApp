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
	$sql = "SELECT * FROM plants_table";
	
	if($result = $conn->query($sql)){
		for ($set=array (); $row =$result->fetch_assoc(); $set[] = $row);
			CloseCon($conn);
			echo json_encode($set);
	} 
?>
