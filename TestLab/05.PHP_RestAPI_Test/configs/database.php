<?php 
require_once '../../configs/configs.php';

class Database{
    private $conn;
    public function connect(){
        $this->conn = null;
        try{
            $this->conn = new PDO('mysql:host=' . HOST . ';dbname=' . DBNAME , UNAME, PASS);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);            
        }catch(PDOException $e){
            echo $e->getMessage();die();
        }
        return $this->conn;
    }
}