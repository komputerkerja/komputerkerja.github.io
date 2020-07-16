<?php 
class dashboard extends Controller{

    public function index(){
        $data['judul'] = 'Dashboard';
        $data['css'] = 'Main/dashboard.css';

        $this->view('dashboard/templates/header',$data);
        $this->view('dashboard/navigator');
        $this->view('dashboard/index');
        $this->view('dashboard/templates/footer');
    }

    public function penjualan(){
        $data['judul'] = 'Penjualan';

        $this->view('dashboard/templates/header',$data);
        $this->view('dashboard/navigator');
        $this->view('dashboard/penjualan');
        $this->view('dashboard/templates/footer');
    }

    public function pembelian(){
        $data['judul'] = 'Pembelian';

        $this->view('dashboard/templates/header',$data);
        $this->view('dashboard/navigator');
        $this->view('dashboard/pembelian');
        $this->view('dashboard/templates/footer');
    }

}