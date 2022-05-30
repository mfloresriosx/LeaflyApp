<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../../config/database.php';
    include_once '../../class/users.php';

    $database = new Database();
    $db = $database->getConnection();

    $item = new User($db);

    $data = json_decode(file_get_contents("php://input"));
    
    $item->nickname = $data->nickname;
    $item->password = $data->password;
    
    if($item->addUser()){
        echo json_encode(true);
    } else{
        echo json_encode(false);
    }
       

   
?>

//tutorial: https://www.positronx.io/create-simple-php-crud-rest-api-with-mysql-php-pdo/