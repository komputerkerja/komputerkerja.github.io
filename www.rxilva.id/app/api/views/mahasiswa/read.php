<?php 
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    $mahasiswa = new Database();
    $mahasiswa = $mahasiswa->connect();
    $mahasiswa = new Mahasiswa($mahasiswa);
    $mahasiswa = $mahasiswa->read();

    $numRow = $mahasiswa->rowCount();

    if($numRow > 0){
        $returnerArray = [];
        foreach($mahasiswa as $row){
            $arrayItems = [
                'id' => $row['id'],
                'nama' => $row['nama'],
                'nrp' => $row['nrp'],
                'email' => $row['email'],
                'jurusan' => $row['jurusan'],
                'gambar' => $row['gambar']                
            ];
            array_push($returnerArray, $arrayItems);
        }
        print_r(json_encode($returnerArray));
    }else{
        print_r(json_encode([['message'=>'empty fields']]));
    }