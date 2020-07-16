<style>
/* Bagian Navigasi */
nav {
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  left: 0 ;
  left: -300px;
  border: 1px solid var(--border-light);
  background-color: var(--font-min-dark);
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  z-index: 2;
}
  
nav ul {
  position: absolute;
  height: 100%;
  background-color: var(--blue-black);
  padding: 0 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  line-height: 2em;
  left: 5%;
  right: 5%;
  cursor: pointer;
  border-top: 1px solid var(--border-light);
  transition: 0.2s;
}
nav ul.transaksi {
  z-index: 3;
  transform: translateY(150px);
}
nav ul.pengaturan {
  z-index: 2;
  transform: translateY(100px);
}
nav ul.laporan {
  z-index: 1;
  transform: translateY(50px);
}
.offset-menu {
  transform: translate(0 , 0)!important;
  z-index: 10 !important;
  transition: all 0.2s !important;
}


nav ul h2 {
  color: var(--white);
  margin-top: 10px;
  cursor: pointer;
}

nav ul .menu-control {
  width: 100%;
  overflow: hidden;
}
nav ul .menu-control .menu-list {
  width: 100%;
  transform: translateX(-100%);
  overflow-y: auto;
  transition: 0.2s;
  height: 0vh;
  padding: 0;
}
.menu-list-open {
  transform: translateX(0) !important;
  height: 20vh !important  ;  
}

nav ul .menu-control h3 {
  margin-top: 20px;
  color: var(--blue-black);
  background-color: #fee715;
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 5px 0;
  transition: 0.2s;
  position: relative;
  z-index: 1;
}

nav ul .menu-control h3:hover {
  background-color: #e72626;
  color: white;
}

nav ul .menu-control .menu-list li {
  color: rgb(207, 201, 201);
  width: 100%;
  text-align: center;
  cursor: pointer;
  position: relative;
}

nav ul .menu-control .menu-list li::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 0%;
  height: 0px;
  background-color: #fee715ff;
  box-shadow: 0 0 5px 1px #fff;
  transition: 0.2s;
  opacity: 0;
}

nav ul .menu-control .menu-list li:hover {
  font-weight: bold;
}
nav ul .menu-control .menu-list li:hover::before {
  height: 1px;
  width: 100%;
  opacity: 1;
}
/* End of Bagian Navigasi */
</style>











    <nav>
      <i>MyIcons</i>
      <ul class="transaksi">
        <h2>Transaksi</h2>
        <div class="menu-control">
          <h3>Dashboard</h3>
          <div class="menu-list">
            <li>Simpel Chart1</li>
            <li>Simpel Tabel</li>
            <li>Simpel Tabel</li>
            <li>Simpel Tabel</li>
            <li>Simpel Tabel</li>
            <li>Simpel Tabel</li>
            <li>Simpel Tabel</li>
            <li>Simpel Tabel</li>
            <li>Simpel Tabel</li>
            <li>Simpel Tabel</li>
            <li>Simpel asdf</li>
            <li>Simpel mama</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Kas & Bank</h3>
          <div class="menu-list">
            <li>Kas Besar</li>
            <li>Kas Kecil</li>
            <li>Bank BCA</li>
            <li>Bank BRI</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Penjualan Barang</h3>
          <div class="menu-list">
            <li>Penjualan</li>
            <li>Retur Penjualan</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Pembelian Barang</h3>
          <div class="menu-list">
            <li>Pembelian</li>
            <li>Retur Pembelian</li>
            <li>Daftar Pembelian</li>
            <li>Daftar Retur</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Persediaan Barang</h3>
          <div class="menu-list">
            <li>Kartu Stok</li>
            <li>Cek Barang</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Gaji Karyawan</h3>
          <div class="menu-list">
            <li>Pembayaran</li>
            <li>List</li>
          </div>
        </div>
      </ul>
      <ul class="pengaturan">
        <h2>Pengaturan</h2>
        <div class="menu-control">
          <h3>Akun</h3>
          <div class="menu-list">
            <li>Akun Saya</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Barang</h3>
          <div class="menu-list">
            <li>Kode Barang</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Pelanggan</h3>
          <div class="menu-list">
            <li>Pelanggan Eksternal</li>
            <li>Pelanggan Internal</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Pemasok</h3>
          <div class="menu-list">
            <li>Pemasok Eksternal</li>
            <li>Pemasok Internal</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Aktiva Perusahaan</h3>
          <div class="menu-list">
            <li>Aktiva Perusahaan</li>
          </div>
        </div>
      </ul>
      <ul class="laporan">
        <h2>Laporan</h2>
        <div class="menu-control">
          <h3>Laporan Kas & Bank</h3>
          <div class="menu-list">
            <li>Lihat Laporan</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Laporan Penjualan</h3>
          <div class="menu-list">
            <li>Lihat Laporan</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Laporan Pembelian</h3>
          <div class="menu-list">
            <li>Lihat Laporan</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Laporan Persediaan</h3>
          <div class="menu-list">
            <li>Lihat Laporan</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Neraca</h3>
          <div class="menu-list">
            <li>Lihat Laporan</li>
          </div>
        </div>
        <div class="menu-control">
          <h3>Laba Rugi</h3>
          <div class="menu-list">
            <li>Lihat Laporan</li>
          </div>
        </div>
      </ul>
    </nav>





    













<script>
  const menu = document.querySelectorAll("nav ul");
  const menu1H3 = document.querySelectorAll("nav ul.transaksi .menu-control h3");
  const menu2H3 = document.querySelectorAll("nav ul.pengaturan .menu-control h3");
  const menu3H3 = document.querySelectorAll("nav ul.laporan .menu-control h3");

  menu1H3.forEach(e=>{
      e.addEventListener('click',()=>{
          e.parentElement.lastElementChild.classList.toggle('menu-list-open');
      })
  })
  menu2H3.forEach(e=>{
      e.addEventListener('click',()=>{
          e.parentElement.lastElementChild.classList.toggle('menu-list-open');
      })
  })
  menu3H3.forEach(e=>{
      e.addEventListener('click',()=>{
          e.parentElement.lastElementChild.classList.toggle('menu-list-open');
      })
  })



  menu.forEach(e=>{
      e.firstElementChild.addEventListener('click',()=>{
          e.firstElementChild.parentElement.classList.toggle('offset-menu');
      });
  });

</script>