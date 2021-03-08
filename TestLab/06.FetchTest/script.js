
const apiKeyPublic      = 'a3796aeb';
const apiKeyMethod      = 's';
let pencaharian         = 'spider man';
const dataRequestFree   = 'http://www.omdbapi.com/?apikey='+ apiKeyPublic +'&'+ apiKeyMethod + '='; 
const dataRequest       = 'http://www.omdbapi.com/?apikey='+ apiKeyPublic +'&'+ apiKeyMethod +'=' + '' + pencaharian


// async function fetchingdata(){
//     const me = await fetch(dataRequest).then(res=>res.json()).then(m=>m);
//     const data = me.Search
//     data.forEach(e => {
//         console.log(e.Poster)    ;
//     });
// }
// fetchingdata();
        


const button = document.getElementById('button');
button.addEventListener('click' , async () => {
    console.log('tombol ditekan');

    let input = document.getElementById('input');input = input.value;input = dataRequestFree + input;
    let hasil = await fetch(input).then(res=>res.json()).then(data=>data);
    hasil = (hasil.Response === "True" ? hasil.Search : 'Not Found');

    console.log('mulai pencaharian');

    if(hasil !== 'Not Found') buatTampilan(hasil);

    console.log('hasil pencaharian');
});

// Poster,Title,Type,Year,imdbID
function buatTampilan(data){
    let list = ``;
    let hasil = document.querySelector('.hasil');hasil.innerHTML = '';
     data.forEach(e=>{
        list = `
            <div class="card">
                <img src="${e.Poster}">
                <div class="isi">
                    <h3>${e.Title}</h3>
                    <ul>
                        <li>Type : ${e.Type}</li>
                        <li>Year : ${e.Year}</li>
                        <li>Id   : ${e.imdbID}</li>
                    </ul>
                </div>
            </div>
        `;
        hasil.innerHTML += list;
    });   
}



