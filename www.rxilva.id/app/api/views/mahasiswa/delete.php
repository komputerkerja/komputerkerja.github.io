<?php 
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    $mahasiswa  = new Database();
    $mahasiswa = $mahasiswa->connect();
    $mahasiswa = new Mahasiswa($mahasiswa);

    if(isset($_POST['id'])){
        $mahasiswa->id = $_POST['id'];
        if($mahasiswa->delete()){
            print_r(json_encode([['delete' => 'success']]));
        }else{
            print_r(json_encode([['delete' => 'failed']]));
        }
    }else{
        print_r(json_encode([['message' => 'empty fields']]));
    }