<?php 
class Mahasiswa{
    // Wajib
    private $conn;
    private $table = 'mahasiswa';

    // Keperluan query table
    public $id;

    public function __construct($db){
        $this->conn = $db;
    }
    
    public function read(){
        $stmt = $this->conn->prepare('SELECT * FROM ' . $this->table );
        $stmt->execute();
        return $stmt;
    }

    public function readSingle(){
        $stmt = $this->conn->prepare('SELECT * FROM ' . $this->table . ' WHERE id= ?');
        $stmt->bindParam(1,$this->id);
        $stmt->execute();
        return $stmt;
    }
}