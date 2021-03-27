<?php 

class Posts{
    // KEPERLUAN KONEKSI DATABASE
    private $table = 'posts';
    private $conn;
    private $stmt;

    // KEPERLUAN TABEL
    public $id;
    public $title;
    public $body;
    public $author;
    public $date;
    
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function read($id=0){
        if($id==0){
            // Read All
            $query = 'SELECT * FROM ' . $this->table;
            $this->stmt = $this->conn->prepare($query);
            $this->stmt->execute();
            return $this->stmt;
        }else{
            // Read Single
            $query = 'SELECT * FROM ' . $this->table . ' WHERE id=' . $id;
            $this->stmt = $this->conn->prepare($query);
            $this->stmt->execute();
            return $this->stmt;
        }
    }

    public function create(){
        $query = "INSERT INTO " . $this->table . " SET title = :title, body = :body, author = :author, date = :date";
        $this->stmt = $this->conn->prepare($query);
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->body = htmlspecialchars(strip_tags($this->body));
        $this->author = htmlspecialchars(strip_tags($this->author));
        $this->date = htmlspecialchars(strip_tags($this->date));

        $this->stmt->bindParam(':title', $this->title);
        $this->stmt->bindParam(':body', $this->body);
        $this->stmt->bindParam(':author', $this->author);
        $this->stmt->bindParam(':date', $this->date);

        $this->stmt->execute();
        return $this->stmt;
    }

    public function delete(){
        $query = "DELETE FROM " . $this->table . " WHERE id=" . $this->id;
        $this->stmt = $this->conn->prepare($query);
        $this->stmt->execute();
        return $this->stmt;
    }

    public function update(){
        $query = "UPDATE " . $this->table . " SET title = :title, body = :body, author = :author, date = :date WHERE id= :id";
        $this->stmt = $this->conn->prepare($query);
        $this->stmt->bindParam(':title', $this->title);
        $this->stmt->bindParam(':body', $this->body);
        $this->stmt->bindParam(':author', $this->author);
        $this->stmt->bindParam(':date', $this->date);
        $this->stmt->bindParam(':id', $this->id);
 
        $this->stmt->execute();
        return $this->stmt;        
    }
}