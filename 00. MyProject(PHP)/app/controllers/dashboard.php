<?php 
class dashboard extends Controller{

    public function index(){
        $data['judul'] = 'Dashboard';
        $data['css'] = 'Main/dashboard.css';

        $this->view('dashboard/templates/header',$data);
        $this->view('dashboard/Navigator/navigator');
        $this->view('dashboard/index');
        $this->view('dashboard/templates/footer');
    }

    public function penjualan(){
        $data['judul'] = 'Penjualan';
        $data['css'] = 'Penjualan/penjualan.css';

        $this->view('dashboard/templates/header',$data);
        $this->view('dashboard/Navigator/navigator');
        $this->view('dashboard/penjualan/penjualan');
        $this->view('dashboard/templates/footer');
    }

    public function pembelian(){
        $data['judul'] = 'Pembelian';
        $data['css'] = 'Pembelian/pembelian.css';

        $this->view('dashboard/templates/header',$data);
        $this->view('dashboard/Navigator/navigator');
        $this->view('dashboard/Pembelian/pembelian');
        $this->view('dashboard/templates/footer');
    }

}