
function saveLocal(){
    localStorage.setItem(
        'borderPath',
        JSON.stringify(Sketch.borders)
    )
}
function loadLocal(){
    if(localStorage.getItem('borderPath')){
        const data = JSON.parse(localStorage.getItem('borderPath'))
        Sketch.borders=data       
    }
}
function clearLocal(){
    localStorage.removeItem('borderPath')
    Sketch.borders=[[]]
}
function createLocal(){
    const dataFromLocalStorage = localStorage.getItem('borderPath');
    let jsonData = null;
    try {
        jsonData = JSON.parse(dataFromLocalStorage);
    } catch (error) {
        console.error('Gagal mengurai data dari localStorage: ', error);
    }
    if (jsonData) {
        const jsonDataBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
        const jsonDataBlobURL = URL.createObjectURL(jsonDataBlob);
        const downloadLink = document.createElement('a');
        downloadLink.href = jsonDataBlobURL;
        downloadLink.download = 'data.json';
        downloadLink.click();
        URL.revokeObjectURL(jsonDataBlobURL);
    } else {
        console.error('Tidak ada data yang ditemukan di localStorage atau data tidak valid.');
    }
}
