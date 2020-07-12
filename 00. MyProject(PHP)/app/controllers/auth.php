<?php 

class auth extends Controller{

    public function index(){
        $data['title'] = 'auth';
        $this->view('auth/index');
    }

}

