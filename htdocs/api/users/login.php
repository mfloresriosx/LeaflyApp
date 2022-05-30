<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../../config/database.php';
    include_once '../../class/users.php';

    $database = new Database();
    $db = $database->getConnection();

    $item = new User($db);

    $data = json_decode(file_get_contents("php://input"));
    
    $item->nickname = $data->nickname;
    $item->password = $data->password;

    $item->login();   

    if($item->id)
    {
        echo json_encode(true);
    }
    else{
        echo json_encode(false);
     }
   
     

?>