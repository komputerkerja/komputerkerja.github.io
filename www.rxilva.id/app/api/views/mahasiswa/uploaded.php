<?php

class Uploaded
{
    public $name;
    public $tmpname;
    public $error;
    public $size;
    public $type;

    public function __construct($gambar)
    {
        $this->name = $gambar['gambar']['name'];
        $this->tmpname = $gambar['gambar']['tmp_name'];
        $this->size = $gambar['gambar']['size'];
        $this->type = $gambar['gambar']['type'];
        $this->error = $gambar['gambar']['error'];
    }

    public function checkError()
    {
        return ($this->error === 4) ? false : true;
    }

    public function checkType()
    {
        $extFalid = ['jpg', 'png', 'jpeg'];
        $extName = explode('.', $this->name);
        $extName = strtolower(end($extName));
        if(!in_array($extName, $extFalid)){
            return false;
        }else{
            $this->type = $extName;
            return true;
        }
    }

    public function checkSize()
    {
        return ($this->size > 1000000) ? false : true;
    }

    public function newName(){
        $newname = uniqid();
        $newname .= uniqid();
        $newname .= '.' . $this->type;
        return $newname;
    }

    public function upload(){
        return move_uploaded_file($this->tmpname,'../app/api/views/mahasiswa/assets/img/' . $this->newName()); 
    }
}
