const submit    = document.getElementById('submit');
const tbody     = document.querySelector('tbody');

// Tampil data
showData();
// tambah Data
submit.addEventListener( 'click' , () => tambahData() );





function showData(){
    const row   = document.createElement('tr');
    const xhr   = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 && xhr.status == 200 ){

            let hasil = '';
            let data = (JSON.parse(xhr.responseText));
            data = (data['data']);

            data.forEach(e => {
                hasil = `  <td>${e.id}</td>
                            <td>${e.name}</td>
                            <td>${e.age}</td>
                            <td>${e.special}</td>
                            <td>${e.created}</td>
                            <td><td><a href="#">Ubah</a><a href="#">Hapus</a></td></td>`;
                            row.innerHTML = hasil;
                            tbody.appendChild(row);
            });


        }
    }
    xhr.open('GET','app.php?url=a',true);
    xhr.send();
}





function tambahData(){
    const name      = document.getElementById('name').value;
    const age       = document.getElementById('age').value;
    const special   = document.getElementById('special').value;
    const xhr       = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 && xhr.status == 200 ){
            data = (JSON.parse(xhr.responseText));
            console.log(data)
        }
    }

    xhr.open("POST", "app.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("submit&name="+name+"&age="+age+"&special="+special);
}


