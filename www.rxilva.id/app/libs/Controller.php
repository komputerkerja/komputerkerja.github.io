<?php 

class Controller{
    public function view($view, $params = []){

    }

    public function viewApi($table, $view){
        require_once '../app/api/database/Database.php';
        require_once '../app/api/tables/' . $table . '.php';
        require_once '../app/api/views/' . $view . '.php';
    }

}