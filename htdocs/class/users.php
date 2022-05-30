<?php
    class User{

        // Connection
        private $conn;

        // Table
        private $db_table = "users";

        // Columns
        public $id;
        public $nickname;
        public $password;

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // LOGIN
       public function login(){
            $sqlQuery = "SELECT
                        id, 
                        nickname
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       nickname = :nickname and password = :password
                    LIMIT 0,1";

            $stmt = $this->conn->prepare($sqlQuery);

             // bind data
            $stmt->bindParam(":nickname", $this->nickname);
            $stmt->bindParam(":password", $this->password);

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->id = $dataRow['id'];
       }        


        // GET ALL
        public function getUsers(){
            $sqlQuery = "SELECT id, nickname FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->nickname = $dataRow['nickname'];
        }

        // CREATE
        public function addUser(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        nickname = :nickname, 
                        password = :password";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->nickname=htmlspecialchars(strip_tags($this->nickname));
            $this->password=htmlspecialchars(strip_tags($this->password));          
        
            // bind data
            $stmt->bindParam(":nickname", $this->nickname);
            $stmt->bindParam(":password", $this->password);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // READ single
        public function getSingleUser(){
            $sqlQuery = "SELECT
                        id, 
                        nickname
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       id = ?
                    LIMIT 0,1";

            $stmt = $this->conn->prepare($sqlQuery);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->nickname = $dataRow['nickname'];
        }        

        // UPDATE
        public function updateUser(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        nickname = :nickname, 
                        password = :password                       
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->nickname=htmlspecialchars(strip_tags($this->nickname));
            $this->password=htmlspecialchars(strip_tags($this->password));
        
            // bind data
            $stmt->bindParam(":nickname", $this->nickname);
            $stmt->bindParam(":password", $this->password);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // DELETE
        function deleteUser(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

    }
?>