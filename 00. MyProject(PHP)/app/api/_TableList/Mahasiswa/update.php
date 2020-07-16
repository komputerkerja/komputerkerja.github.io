<?php 
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
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
  $mahasiswa->nama = $data[0]->nama;
  $mahasiswa->nrp = $data[0]->nrp;
  $mahasiswa->email = $data[0]->email;
  $mahasiswa->jurusan = $data[0]->jurusan;
  $mahasiswa->gambar = $data[0]->gambar;
  if(
    !empty($mahasiswa->id) && 
    !empty($mahasiswa->nama) && 
    !empty($mahasiswa->nrp) && 
    !empty($mahasiswa->email) && 
    !empty($mahasiswa->jurusan) && 
    !empty($mahasiswa->gambar) 
    ){

    $mahasiswa->id = $mahasiswa->id;
    $mahasiswa->nama = $mahasiswa->nama;
    $mahasiswa->nrp = $mahasiswa->nrp;
    $mahasiswa->email = $mahasiswa->email;
    $mahasiswa->jurusan = $mahasiswa->jurusan;
    $mahasiswa->gambar = $mahasiswa->gambar;

    if($mahasiswa->update()){
        print_r(array('msg'=>'Success'));
    }else{
        print_r(array('error'=>'Throw error durring insert data'));
    }

  }else{
    print_r(array('error'=>'empty field'));
  }



