<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

$mahasiswa = new Database();
$mahasiswa = $mahasiswa->connect();
$mahasiswa = new Mahasiswa($mahasiswa);

if (isset($_POST)) {
    if (
        isset($_POST['nama']) &&
        isset($_POST['nrp']) &&
        isset($_POST['email']) &&
        isset($_POST['jurusan'])
    ) {
        $mahasiswa->nama = $_POST['nama'];
        $mahasiswa->nrp = $_POST['nrp'];
        $mahasiswa->email = $_POST['email'];
        $mahasiswa->jurusan = $_POST['jurusan'];

        if (isset($_FILES['gambar'])) {
            try {
                require_once '../app/api/views/mahasiswa/uploaded.php';
                $uploaded = new Uploaded($_FILES);
                if (
                    $uploaded->checkError() &&
                    $uploaded->checkType() &&
                    $uploaded->checkSize()
                ) {
                    $mahasiswa->gambar = $uploaded->newName();
                } else {
                    $mahasiswa->gambar = 'default.jpg';
                }
            } catch (Exception $e) {
                $mahasiswa->gambar = 'default.jpg';
            }
        } else {
            $mahasiswa->gambar = 'default.jpg';
        }

        if ($uploaded->upload()) {
            $mahasiswa->create();
            print_r(json_encode([['insert' => 'success', 'upload' => 'success']]));
        } else {
            $mahasiswa->gambar = 'default.jpg';
            $mahasiswa->create();
            print_r(json_encode([['insert' => 'success', 'upload' => 'failed']]));
        }
    } else {
        print_r(json_encode([['message' => 'empty fields']]));
    }
} else {
    print_r(json_encode([['message' => 'empty fields']]));
}
