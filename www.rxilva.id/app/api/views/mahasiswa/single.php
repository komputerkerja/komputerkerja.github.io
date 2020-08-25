<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  $mahasiswa = new Database();
  $mahasiswa = $mahasiswa->connect();
  $mahasiswa = new Mahasiswa($mahasiswa);

  if(isset($_POST)){
    if(isset($_POST['id'])){
      $mahasiswa->id = $_POST['id'];
      $mahasiswa = $mahasiswa->single();
      if(!empty($mahasiswa)){
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
        print_r(json_encode([['message'=>'id not found']]));
      }
    }else{
      print_r(json_encode([['message'=>'empty fields']]));
    }
  }
