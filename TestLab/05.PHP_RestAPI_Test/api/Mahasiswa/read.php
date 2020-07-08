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
    $mahasiswa  = $mahasiswa->read();
    $num        = $mahasiswa->rowCount();

    // Sending data...
    if($num > 0){
        $mahasiswa = $mahasiswa->fetchAll(PDO::FETCH_ASSOC);
        $emptyArray = array();

        foreach($mahasiswa as $row):
            $filedArray = array(
                'dbid'=>$row['id'],
                'dbnama'=>$row['nama'],
                'dbnrp'=>$row['nrp'],
                'dbemail'=>$row['email'],
                'dbjurusan'=>$row['jurusan'],
                'dbgambar'=>$row['gambar']
            );
        array_push($emptyArray,$filedArray);
        endforeach;

        print_r(json_encode($emptyArray));
    }else{
        print_r(json_encode(array('msg'=>'data not found')));
    }
