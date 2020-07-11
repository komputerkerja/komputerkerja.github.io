

<div class="pembelian">

    
<form action="">

    <div class="title"><img src="<?= BASEURL ?>/Assets/cart.svg"><h1>Pembelian</h1></div>

    <div class="form-group">

        <div class="form-col">
    
            <div class="form-list">
                <input type="text" name="tanggal" id="tanggal" autofocus> 
                <label for="tanggal">Tanggal</label>
            </div>

            <div class="form-list">
                <input type="text" name="pelanggan" id="pelanggan" >
                <label for="pelanggan">Pelanggan</label>
            </div>        
        
            <div class="form-list">
                <input type="text" name="nomorinvoice" id="nomorinvoice">
                <label for="nomorinvoice">Nomor Invoice</label>
            </div>
    
        </div>
    
    
        <div class="form-col">
            
            <div class="form-list">
                <input type="text" name="nomorfaktur" id="nomorfaktur">
                <label for="nomorfaktur">Nomor Faktur</label>
            </div>
        
            <div class="form-list">
                <input type="text" name="gudang" id="gudang">
                <label for="gudang">Gudang</label>
            </div>
        
            <div class="form-list">
                <input type="file" name="gambar" id="gambar">
                <label for="gambar">Dokumen/Arsip/PDF</label>
            </div>
    
        </div>

    </div>



    
    <div class="form-group">
        
        <div class="form-row">
    
            <div class="form-list">
                <input type="text" name="namabarang" id="namabarang">
                <label for="namabarang">Nama Barang</label>
            </div>
        
            <div class="form-list">
                <input type="text" name="qty" id="qty">
                <label for="qty">QTY</label>
            </div>
        
            <div class="form-list">
                <input type="text" name="harga" id="harga">
                <label for="harga">Harga</label>
            </div>
        
            <div class="form-list">
                <input type="text" name="diskon" id="diskon">
                <label for="diskon">Diskon</label>
            </div>
        
            <div class="form-list">
                <input type="text" name="ppn" id="ppn">
                <label for="ppn">PPn</label>
            </div>
        
            <div class="form-list">
                <input type="text" name="total" id="total">
                <label for="total">Total</label>
            </div>
        
            <div class="form-list">
                <input type="button" name="add" id="add" value="+">
            </div>
    
        </div>

    </div>


    <div class="form-group">
        
        <div class="form-col">
    
            <div class="form-total">
                <div class="total">
                    <input type="text" name="totalpembelian" id="totalpembelian">
                </div>
                <div class="total">
                    <label for="totalpembelian">Pembelian</label>
                </div>
            </div>
        
            <div class="form-total">
                <div class="total">
                    <input type="text" name="diskonperbrg" id="diskonperbrg">
                </div>
                <div class="total">
                    <label for="diskonperbrg">Diskon Perbarang</label>
                </div>
            </div>

            <div class="form-total">
                <div class="total">
                    <input type="text" name="diskontambahan" id="diskontambahan">
                </div>
                <div class="total">
                    <label for="diskontambahan">Diskon Perfaktur</label>
                </div>
            </div>
            
            <div class="form-total">
                <div class="total">
                    <input type="text" name="totaldiskon" id="totaldiskon">
                </div>
                <div class="total">
                    <label for="totaldiskon">Total Diskon</label>
                </div>
            </div>

            <div class="form-total">
                <div class="total">
                    <input type="text" name="totalppn" id="totalppn">
                </div>
                <div class="total">
                    <label for="totalppn">PPn</label>
                </div>
            </div>


        </div>

    </div>



    <div class="action">
        <ul>
            <li><a href="#" class="btn btn-success"><img src="<?= BASEURL ?>/Assets/save.svg" width="30px"> Simpan</a></li>
            <li><a href="#" class="btn btn-primary"><img src="<?= BASEURL ?>/Assets/preview.svg" width="30px"> Preview</a></li>
            <li><a href="#" class="btn btn-danger"><img src="<?= BASEURL ?>/Assets/refresh.svg" width="30px"> Bersihkan</a></li>
        </ul>
    </div>
    
    <div class="footer">
        
    </div>
</form>

</div>

