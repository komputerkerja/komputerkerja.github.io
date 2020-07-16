<?php 

class Controller{

    public function view($view,$data=[]){
        require_once '../app/views/' . $view . '.php';
    }

    public function model($model){
        require_once '../app/models/' . $model . '.php';
        return new $model;
    }
    
    public function api($api, $data=[]){
        require_once '../app/api/' . $api . '.php';
    }

}