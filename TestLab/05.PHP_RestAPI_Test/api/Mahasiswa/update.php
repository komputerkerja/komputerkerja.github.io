<?php 
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    // Include Database Dan Table
    include_once '../../config/Database.php';
    include_once '../../models/Mahasiswa.php';

    // Preparing...
    $mahasiswa  = new Database();
    $mahasiswa  = $mahasiswa->connect();
    $mahasiswa  = new Mahasiswa($mahasiswa);

    // Get Raw Data...
    $data = json_decode(file_get_contents('php://input'));

  // Check empty field
  if(
    !empty($data->id) && 
    !empty($data->nama) && 
    !empty($data->nrp) && 
    !empty($data->email) && 
    !empty($data->jurusan) && 
    !empty($data->gambar) 
    ){

    $mahasiswa->id = $data->id;
    $mahasiswa->nama = $data->nama;
    $mahasiswa->nrp = $data->nrp;
    $mahasiswa->email = $data->email;
    $mahasiswa->jurusan = $data->jurusan;
    $mahasiswa->gambar = $data->gambar;

    if($mahasiswa->update()){
        print_r(array('msg'=>'Success'));
    }else{
        print_r(array('error'=>'Throw error durring insert data'));
    }

  }else{
    print_r(array('error'=>'empty field'));
  }



