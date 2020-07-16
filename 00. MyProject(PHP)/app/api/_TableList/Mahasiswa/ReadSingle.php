<?php 
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

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
    if(empty($mahasiswa->id))die;

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
    