<?php 

class api extends Controller{
    public function index(){
        print_r(json_encode(['message'=>'bad requrest']));
    }

    public function read_mahasiswa(){
        $this->viewApi('Mahasiswa','mahasiswa/read');
    }

    public function create_mahasiswa(){
        $this->viewApi('Mahasiswa','mahasiswa/create');
    }

    public function update_mahasiswa(){
        $this->viewApi('Mahasiswa','mahasiswa/update');
    }

    public function delete_mahasiswa(){
        $this->viewApi('Mahasiswa','mahasiswa/delete');
    }

    public function single_mahasiswa(){
        $this->viewApi('Mahasiswa','mahasiswa/single');
    }

}