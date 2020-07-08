<?php 
class Database{
    private $host = 'localhost';
    private $dbname = 'db_mahasiswa';
    private $uname = 'root';
    private $pname = '';
    private $conn;

    public function connect()
    {
        $this->conn = null;
        try{
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->dbname, $this->uname, $this->pname);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $err){
            echo 'Error : ' . $err->getMessage();
        }
        return $this->conn;
    }
}

