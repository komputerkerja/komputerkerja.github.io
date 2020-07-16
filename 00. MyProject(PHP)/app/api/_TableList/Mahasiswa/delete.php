<?php 
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    // Include Database Dan Table
    include_once '../app/api/_Database/Api_Database.php';
    include_once '../app/api/_Tables/Mahasiswa.php';

    // Preparing...
    $mahasiswa  = new Api_Database();
    $mahasiswa  = $mahasiswa->connect();
    $mahasiswa  = new Mahasiswa($mahasiswa);

    // Get Raw Data...
    $data = json_decode(file_get_contents('php://input'));

    // Check empty field
    $mahasiswa->id = $data[0]->id;
    if(!empty($mahasiswa->id)){

    $mahasiswa->id = $mahasiswa->id;

    if($mahasiswa->delete()){
        print_r(array('msg'=>'Success'));
    }else{
        print_r(array('error'=>'Throw error durring delete data'));
    }

  }else{
    print_r(array('error'=>'empty field'));
  }
