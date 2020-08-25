<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

$mahasiswa = new Database();
$mahasiswa = $mahasiswa->connect();
$mahasiswa = new Mahasiswa($mahasiswa);


if (isset($_POST)) {
    if (
        isset($_POST['id']) &&
        isset($_POST['nama']) &&
        isset($_POST['nrp']) &&
        isset($_POST['email']) &&
        isset($_POST['jurusan'])
    ) {
        $mahasiswa->id = $_POST['id'];
        $mahasiswa->nama = $_POST['nama'];
        $mahasiswa->nrp = $_POST['nrp'];
        $mahasiswa->email = $_POST['email'];
        $mahasiswa->jurusan = $_POST['jurusan'];

        // CHECK APPLIKASI CLIENT (HARUS ADA GAMBAR);
        if (isset($_FILES['gambar'])) {
            require_once '../app/api/views/mahasiswa/uploaded.php';
            $uploaded = new Uploaded($_FILES);
            $mahasiswa->gambar = $uploaded->name;
        } else {
            print_r(json_encode([['error' => 'error in views']]));
            die;
        }

        // CHECK ID ADA ATAU TIDAK
        if ($mahasiswa->checkId() == 'gambar baru') {
            // coba upload gambar baru / jika gagal pake gambar lama
            if ( $uploaded->checkError() && $uploaded->checkType() && $uploaded->checkSize() ) 
                { 
                    $mahasiswa->gambar = $uploaded->newName(); 
                    if ($uploaded->upload()) {
                        $mahasiswa->update();
                        print_r(json_encode([['update' => 'success', 'upload' => 'success']]));
                    } else {
                        $mahasiswa->update();
                        print_r(json_encode([['update' => 'success', 'upload' => 'failed']]));
                    }                    
                }
        } else {
            // update database
            $mahasiswa->update();
            print_r(json_encode([['update' => 'success']]));
        }
    } else {
        print_r(json_encode([['error' => 'empty fields']]));
    }
}
