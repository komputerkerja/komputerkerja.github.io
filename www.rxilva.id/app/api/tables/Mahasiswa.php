<?php

class Mahasiswa
{
    private $table  = 'mahasiswa';
    private $conn;
    private $stmt;

    public $id;
    public $nama;
    public $nrp;
    public $email;
    public $jurusan;
    public $gambar;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function read()
    {
        try {
            $this->stmt = $this->conn->prepare('SELECT * FROM ' . $this->table);
            $this->stmt->execute();
            return $this->stmt;
        } catch (Exception $e) {
            print_r(json_encode([['message' => 'error from table']]));
            die;
        }
    }

    public function single()
    {
        try {
            $this->stmt = $this->conn->prepare('SELECT * FROM ' . $this->table . ' WHERE id=:id');
            $this->stmt->bindParam(':id',$this->id);
            $this->stmt->execute();
            if($this->stmt->rowCount() > 0){
                return $this->stmt;
            }else{
                return [];
            }
        } catch (Exception $e) {
            print_r(json_encode([['message' => 'error from table']]));
            die;
        }
    }    

    public function create()
    {
        $query = "INSERT INTO " . $this->table . " SET 
        nama=:nama, nrp=:nrp, email=:email, jurusan=:jurusan, gambar=:gambar
        ";
        try {
            // CLEANING DATA
            $this->nama = htmlspecialchars(strip_tags($this->nama));
            $this->nrp = htmlspecialchars(strip_tags($this->nrp));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->jurusan = htmlspecialchars(strip_tags($this->jurusan));
            $this->gambar = htmlspecialchars(strip_tags($this->gambar));
            // PREPARE AND BINDDING DATA
            $this->stmt = $this->conn->prepare($query);
            $this->stmt->bindParam(':nama', $this->nama);
            $this->stmt->bindParam(':nrp', $this->nrp);
            $this->stmt->bindParam(':email', $this->email);
            $this->stmt->bindParam(':jurusan', $this->jurusan);
            $this->stmt->bindParam(':gambar', $this->gambar);
            $this->stmt->execute();
            return true;
        } catch (Exception $e) {
            print_r(json_encode([['message' => 'error in table ']]));
            die;
        }
    }

    public function delete()
    {
        try {
            $this->stmt = $this->conn->prepare('DELETE FROM ' . $this->table . ' WHERE id=:id');
            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->stmt->bindParam(':id', $this->id);
            return ($this->stmt->execute()) ? true : false;
        } catch (Exception $e) {
            print_r(json_encode([['message' => 'error in table ']]));
            die;
        }
    }

    public function update()
    {
        // Create query
        $query = "UPDATE " . $this->table . " SET 
        nama = :nama, nrp = :nrp, email = :email, 
        jurusan = :jurusan, gambar = :gambar
        WHERE id = " . $this->id;
        try {
            // CLEANING DATA
            $this->nama = htmlspecialchars(strip_tags($this->nama));
            $this->nrp = htmlspecialchars(strip_tags($this->nrp));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->jurusan = htmlspecialchars(strip_tags($this->jurusan));
            $this->gambar = htmlspecialchars(strip_tags($this->gambar));
            // PREPARE AND BINDDING DATA
            $this->stmt = $this->conn->prepare($query);
            $this->stmt->bindParam(':nama', $this->nama);
            $this->stmt->bindParam(':nrp', $this->nrp);
            $this->stmt->bindParam(':email', $this->email);
            $this->stmt->bindParam(':jurusan', $this->jurusan);
            $this->stmt->bindParam(':gambar', $this->gambar);
            $this->stmt->execute();
            return true;
        } catch (Exception $e) {
            print_r(json_encode([['message' => 'error in table ' . $e->getMessage()]]));
            die;
        }
    }    

    public function checkId()
    {
        $this->id = htmlspecialchars(strip_tags($this->id));
        // PREPARE AND BINDDING DATA
        $this->stmt = $this->conn->prepare('SELECT * FROM ' . $this->table . ' WHERE id=:id');
        $this->stmt->bindParam(':id', $this->id);
        $this->stmt->execute();
        if ($this->stmt->rowCount() > 0) {
            $data = $this->stmt->fetch(PDO::FETCH_ASSOC);
            if ($data['gambar'] == $this->gambar){
                return 'gambar lama';
            } else {
                return 'gambar baru';
            }
        } else {
            print_r(json_encode([['message' => 'error in table ']]));
            die;
        }
    }
}
