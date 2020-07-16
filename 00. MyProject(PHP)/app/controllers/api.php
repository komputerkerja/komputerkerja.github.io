<?php 
class api extends Controller{

    public function index(){
        $this->api('index');
    }

    // Mahasiswa Table
    public function readMahasiswa(){
        $this->api('_TableList/Mahasiswa/read');
    }
    public function readSingleMahasiswa(){
        $this->api('_TableList/Mahasiswa/ReadSingle');
    }
    public function createMahasiswa(){
        $this->api('_TableList/Mahasiswa/create');
    }
    public function updateMahasiswa(){
        $this->api('_TableList/Mahasiswa/update');
    }
    public function deleteMahasiswa(){
        $this->api('_TableList/Mahasiswa/delete');
    }

}