<style>
/* Bagian User Forms */
.container{
    position: relative;
    width: 80vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
}

.container h1{
    position: relative;
    width: 100%;
    text-align: center;    
    padding: 5px 0;
}

.container h1 .title{
    position: fixed;
    background-color: var(--white);
    top: 0;
    left: 0;
    right: 0;
    line-height: 60px;
    height: 60px;
    z-index: 1;
}

.form-control{
    display: flex;
    flex-wrap: wrap;    
    justify-content: flex-start;
    align-content: center;
}

.form-group-y{
    margin: 10px;
}

.form-list{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 24px 0;
    width: 290px;
}


.form-list input{
    order: 1;
    padding: 5px 0;
    text-indent: 8px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid var(--border-light);
}

.form-list label{
    position: absolute;
    color: var(--font-light);
    transition: 0.2s;
}

.form-list input:focus ~ label{
    transform: translate(0,-20px);
    font-size: small;
    opacity: 0.5;
}

.form-list input:valid ~ label{
    transform: translate(0,-20px);
    font-size: small;
    opacity: 0.5;
}

.form-group-x{
    position: relative;
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
}
/* End Bagian User Forms */
</style>






<!-- Bagian User Forms -->
<div class="container">
        <form action="">



            <h1>
                <div class="title"><div class="orange">P</div>embelian</div>
            </h1>



            <div class="form-control">

                <div class="form-group-y">
                    <div class="form-list">
                        <input type="text" name="username" id="username" required autofocus>
                        <label for="username">Tanggal</label>
                    </div>
                    <div class="form-list">
                        <input type="text" name="password" id="password" required>
                        <label for="password">Password</label>
                    </div> 
                    <div class="form-list">
                        <input type="text" name="gudang" id="gudang" required>
                        <label for="gudang">Gudang</label>
                    </div>
                    <div class="form-list">
                        <input type="text" name="nomorfaktur" id="nomorfaktur" required>
                        <label for="nomorfaktur">Nomor Faktur</label>
                    </div>
                    <div class="form-list">
                        <input type="text" name="gambar" id="gambar" required>
                        <label for="gambar">Gambar</label>
                    </div>
                </div>
    
                <div class="form-group-y">
                    <div class="form-list">
                        <input type="text" name="username" id="username" required autofocus>
                        <label for="username">Tanggal</label>
                    </div>
                    <div class="form-list">
                        <input type="text" name="password" id="password" required>
                        <label for="password">Password</label>
                    </div> 
                    <div class="form-list">
                        <input type="text" name="gudang" id="gudang" required>
                        <label for="gudang">Gudang</label>
                    </div>
                    <div class="form-list">
                        <input type="text" name="nomorfaktur" id="nomorfaktur" required>
                        <label for="nomorfaktur">Nomor Faktur</label>
                    </div>
                    <div class="form-list">
                        <input type="text" name="gambar" id="gambar" required>
                        <label for="gambar">Gambar</label>
                    </div>
                </div>

            </div>






            <div class="form-control">

                <div class="form-group-x">
                    <div class="form-list form-list-min">
                        <input type="text" name="username" id="username" required autofocus>
                        <label for="username">Tanggal</label>
                    </div>
                    <div class="form-list form-list-min">
                        <input type="text" name="password" id="password" required>
                        <label for="password">Password</label>
                    </div> 
                    <div class="form-list form-list-min">
                        <input type="text" name="gudang" id="gudang" required>
                        <label for="gudang">Gudang</label>
                    </div>
                    <div class="form-list form-list-min">
                        <input type="text" name="nomorfaktur" id="nomorfaktur" required>
                        <label for="nomorfaktur">Nomor Faktur</label>
                    </div>
                    <div class="form-list form-list-min">
                        <input type="text" name="gambar" id="gambar" required>
                        <label for="gambar">Gambar</label>
                    </div>
                    <div class="form-list form-list-min">
                        <a href="#" class="btn btn-primary width-s">Add</a>
                    </div>
                </div>
    
            </div>




            <div class="form-control">

                <div class="form-group-y">
                    <div class="form-list">
                        <input type="text" name="username" id="username" required autofocus>
                        <label for="username">Tanggal</label>
                    </div>
                    <div class="form-list">
                        <input type="text" name="password" id="password" required>
                        <label for="password">Password</label>
                    </div> 
                    <div class="form-list">
                        <input type="text" name="gudang" id="gudang" required>
                        <label for="gudang">Gudang</label>
                    </div>
                    <div class="form-list">
                        <input type="text" name="nomorfaktur" id="nomorfaktur" required>
                        <label for="nomorfaktur">Nomor Faktur</label>
                    </div>
                    <div class="form-list">
                        <input type="text" name="gambar" id="gambar" required>
                        <label for="gambar">Gambar</label>
                    </div>
                </div>

            </div>



            <div class="form-control">

                <div class="form-group-y">
                    <div class="form-list">
                        <a href="#" class="btn btn-success pdy-10 my-10">Simpan</a>
                        <a href="#" class="btn btn-primary pdy-10 my-10">Cetakan</a>
                        <a href="#" class="btn btn-orange pdy-10 my-10">Lihat Data</a>
                    </div>
                </div>

            </div>


    </form>
</div>
<!-- End Bagian User Forms -->

