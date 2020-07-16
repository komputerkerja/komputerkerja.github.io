<?php 
class Api_Database{
    private $host = DB_HOST;
    private $dbname = DB_NAME;
    private $uname = DB_USER;
    private $pname = DB_PASS;
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

