<?php 

class home extends Controller{

    public function index(){
        $data['title'] = 'Home';
        $this->view('Websites/Templates/header',$data);
        $this->view('Websites/index');
        $this->view('Websites/Templates/footer');
    }

    public function about(){
        $data['title'] = 'about';
        $this->view('Websites/Templates/header',$data);
        $this->view('Websites/about');
        $this->view('Websites/Templates/footer');
    }

}

