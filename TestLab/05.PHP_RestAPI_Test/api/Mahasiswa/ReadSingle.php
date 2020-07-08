<?php 
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    // Include Database Dan Table
    include_once '../../config/Database.php';
    include_once '../../models/Mahasiswa.php';

    // Preparing...
    $mahasiswa  = new Database();
    $mahasiswa  = $mahasiswa->connect();
    $mahasiswa  = new Mahasiswa($mahasiswa);

    // Preparing...
    // $mahasiswa->id  = '15';
    $mahasiswa->id = isset($_GET['id']) ? $_GET['id'] : die;
    $mahasiswa      = $mahasiswa->readSingle();
    $num            = $mahasiswa->rowCount();

    // Sending data...
    if($num > 0){
        $mahasiswa = $mahasiswa->fetch(PDO::FETCH_ASSOC);
        $emptyArray = array();

            $filedArray = array(
                'dbid'=>$mahasiswa['id'],
                'dbnama'=>$mahasiswa['nama'],
                'dbnrp'=>$mahasiswa['nrp'],
                'dbemail'=>$mahasiswa['email'],
                'dbjurusan'=>$mahasiswa['jurusan'],
                'dbgambar'=>$mahasiswa['gambar']
            );

        array_push($emptyArray,$filedArray);
        print_r(json_encode($emptyArray));
    }else{
        print_r(json_encode(array('msg'=>'data not found')));
    }
    