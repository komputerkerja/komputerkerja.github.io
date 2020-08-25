<?php 
class Database{
    private $host   = 'localhost';
    private $dbname = 'db_mahasiswa';
    private $user   = 'root';
    private $pass   = '';
    private $conn;

    public function connect(){
        try{
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->dbname, $this->user, $this->pass);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $this->conn;
        }catch(Exception $e){
            print_r(json_encode([['message' => 'error in database']]));die;
        }
    }
}