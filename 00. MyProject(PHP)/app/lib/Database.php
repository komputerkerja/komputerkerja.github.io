<?php 

class Database{
    private $host       = DB_HOST;
    private $user       = DB_USER;
    private $pass       = DB_PASS;
    private $dbName     = DB_NAME;
    
    private $dbh;
    private $stmt;

    public function __construct(){
            try{
                $this->dbh = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->dbName , $this->user , $this->pass);
                $this->dbh->setAttribute(PDO::ATTR_PERSISTENT,true);                
                $this->dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);                
            } catch(PDOException $e){
                die($e->getMessage());
            }
        }

    public function setQuery($query){
        $this->stmt = $this->dbh->prepare($query);
    }
    public function execute(){
        $this->stmt->execute();
    }
    public function rowCount(){
        return $this->stmt->rowCount();
    }


    public function getAllResult(){
        return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getSingleResult(){
        return $this->stmt->fetch(PDO::FETCH_ASSOC);
    }


    
    public function bind($param, $value, $type = null){
        if( is_null( $type ) ){
            switch( true ){
                case is_int( $value ) :
                    $type = PDO::PARAM_INT;
                    break;  
                case is_bool( $value ) :
                    $type = PDO::PARAM_BOOL;
                    break;
                case is_null( $value ) :
                    $type = PDO::PARAM_NULL;
                    break;
                default :
                    $type = PDO::PARAM_STR;
                }
            }
            $this->stmt->bindValue($param, $value, $type);
        }
        
}