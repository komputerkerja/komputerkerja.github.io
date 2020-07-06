<?php 
class YourId{public $id = '';public function __construct(){$this->id .= rand(999,9999) . chr(rand(65,90)) . time() . rand(999,9999) . chr(rand(65,90)) . rand(999,9999);}}

class DataBaseX{
    protected $dbName = 'database/db.json',
            $database = null;
    public function __construct(){
        $this->database = file_get_contents($this->dbName);
        $this->database = utf8_decode($this->database);
        $this->database = json_decode($this->database,true);
    }
}

class Person{
    protected $id = null,
        $name = null,
        $age = null,
        $special = null,
        $created = null;
    public function getId(){
        return $this->id;
    }
    public function getName(){
        return $this->name;
    }
    public function getAge(){
        return $this->age;
    }
    public function getSpecial(){
        return $this->special;
    }
    public function getCreated(){
        return $this->created;
    }
    public function __construct($name,$age,$special){
        $id = new YourId();
        $this->id = $id->id;
        $this->name = $name;
        $this->age = $age;
        $this->special = $special;
        $this->created = time();
    }
}

class UI extends DataBaseX{

    public function showAllData(){
        $db = new DataBaseX();
        return $db->database;
    }

    public function prepareAdd($person){
        $newArrayPerson = array(
            "id"=>$person->getId(), 
            "name"=>$person->getName(), 
            "age"=>$person->getAge(), 
            "special"=>$person->getSpecial(), 
            "created"=>$person->getCreated(), 
        );
        array_push($this->database,$newArrayPerson);
    }

    public function prepareDelete($id){
        $i = 0;
        foreach( $this->database as $data ){
            if( $data['id'] == $id ){
                unset($this->database[$i]);
            }
            $i++;
        }
    }

    public function prepareUpdate($id,$name,$age,$special){
        $i = 0;
        foreach( $this->database as $data ){
            if( $data['id'] == $id ){
                $this->database[$i]['name'] = $name;
                $this->database[$i]['age'] = $age;
                $this->database[$i]['special'] = $special;
            }
        $i++;
        }
    }

    public function execute(){
        $newData = json_encode($this->database);
        file_put_contents($this->dbName,$newData);
    }

}










header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

// Tampil Data
if( isset($_GET['url']) ){
    $ui = new UI();
    echo json_encode(array('data'=>$ui->showAllData())) ;
}






if( isset($_POST['submit']) ){
    if( !empty($_POST['name']) && !empty($_POST['age']) && !empty($_POST['special']) ){
        $name = $_POST['name'];
        $age = $_POST['age'];
        $special = $_POST['special'];
        // Prosess Tambah Data Baru
        $ui = new UI();
        $person = new Person($name,$age,$special);
        $ui->prepareAdd($person);
        $ui->execute();
        // Tampilkan Pesan
        echo json_encode( array('data'=>'Data Berhasil ditambahkan') );    
    }else{
        // Tampilkan Pesan
        echo json_encode( array('data'=>'Data Gagal ditambahkan') );    
    }
}



