class DataJson{static data = [];static masaPajak = 1;static Pembetulan = 0;}
const myFile = document.getElementById('myFile');
const tableList = document.querySelector('.tableList');
const tableHeader = document.querySelector('.tableHeader');
const myform = document.getElementById('myform');
const submit = document.getElementById('submit');
const statusBtn = document.querySelector('.statusBtn');

myFile.addEventListener('change',(e)=>{
    // File Validation For CSV File
    const fileName = myFile.files[0].name;
    const fileExtension = fileName.substring((fileName.length)-4,fileName.length);
    if(fileExtension != '.csv'){
        console.log('Silahkan Memiliha File CSV')
        myFile.value = '';
        return
    }
    toggleAlert();
    updateElementById(submit,{addDisplayElement: 'displayUnset'}) // Show Upload Button
    const csvFile = myFile.files[0];
    const reader = new FileReader();
    reader.readAsText(csvFile)
    reader.onload = (e) => {
        const content = reader.result;
        const contentArray = content.split('\n');
        DataJson.data = [];
        tableList.innerHTML = '';
        tableHeader.innerHTML = '';
        contentArray.forEach((line,index) => {
            const subArray = line.split(';');
            if(index==0){
                createHeaderTable(subArray);
            }else{
                if(index+1 == contentArray.length){
                }else{
                    createUi(subArray,index);
                    DataJson.data.push(subArray);                                          
                }
            }
        });
    }
});
statusBtn.addEventListener('click',(e)=>{
    const masaPajak = document.getElementById('masa');
    const pembetulan = document.getElementById('pembetulan');
    toggleAlert();
    DataJson.masaPajak = masaPajak.value;
    DataJson.Pembetulan = pembetulan.value;
})
function createUi(e,i){
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>`+i+`</td>
        <td>`+e[0]+`</td>
        <td>`+e[1]+`</td>
        <td>`+e[2]+`</td>
        <td>`+e[3]+`</td>
        <td>`+e[4]+`</td>
        <td>`+e[5]+`</td>
        <td>`+e[6]+`</td>
        <td>`+e[7]+`</td>
        <td>`+e[8]+`</td>
        <td>`+e[9]+`</td>
        <td>`+e[10]+`</td>
        <td>`+e[11]+`</td>
        <td>`+e[12]+`</td>
        <td>`+e[13]+`</td>
        <td>`+e[14]+`</td>
    `;
    tableList.appendChild(tr);
}    
function createHeaderTable(e){
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>No.</th>
        <th>`+e[0]+`</th>
        <th>`+e[1]+`</th>
        <th>`+e[2]+`</th>
        <th>`+e[3]+`</th>
        <th>`+e[4]+`</th>
        <th>`+e[5]+`</th>
        <th>`+e[6]+`</th>
        <th>`+e[7]+`</th>
        <th>`+e[8]+`</th>
        <th>`+e[9]+`</th>
        <th>`+e[10]+`</th>
        <th>`+e[11]+`</th>
        <th>`+e[12]+`</th>
        <th>`+e[13]+`</th>
        <th>`+e[14]+`</th>
    `;
    tableHeader.appendChild(tr);
}
myform.addEventListener('submit',(e)=>{
    const apiUrl = `https://script.google.com/macros/s/AKfycbzfW5OvTQtUVgn2gUFI7hAUvb6Y6eYF6SuCU6suOj2z69Na7S-8yDAQW5-0A-IEvqKv/exec?kodePajak=21-100-01&masaPajak=${DataJson.masaPajak}&pembetulan=${DataJson.Pembetulan}`;
    e.preventDefault();
    toggleDisplayFlex(); // Loading animation
    statusLoading('Menghitung pph21...'); // Status Loading Text
    updateElementById(submit,{removeDisplayElement: 'displayUnset'})

    const raw = JSON.stringify({'data':DataJson.data});
    fetch(apiUrl,{method: 'POST',body: raw})
    .then(res=>res.json())
    .then(data=>{
        if(data['response']=='success'){
            statusLoading('Menyiapkan File CSV...'); // Status Loading Text
            if(data['result'][1]){
                console.log(data);
                downloadCsvMasa(data['result'][1]); // Membuat Download Url Dengan DOM
                statusLoading('Prosess selesai...'); // Status Loading Text
                setTimeout(() => {
                    toggleDisplayFlex(); // Loading animation
                }, 2000);
            }else{
                console.log(data);
                statusLoading('Membuat CSV Manual...'); // Status Loading Text
                console.log('Membuat CSV Manual...');
                setTimeout(() => {
                    toggleDisplayFlex(); // Loading animation
                }, 3000);
            }
        }else{
            console.log(data);
            statusLoading('Server gagal membuat csv...'); // Status Loading Text
            setTimeout(() => {
                toggleDisplayFlex(); // Loading animation
            }, 3000);
        }
    })
    .catch(err=>{
        statusLoading('Prosess gagal...'); // Status Loading Text
        toggleDisplayFlex(); // Loading animation
        console.log(err)
    });
})
function downloadCsvMasa(url){
    const a = document.createElement('a');
    a.setAttribute('href',url);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function toggleDisplayFlex(){
    const e = document.querySelector('.loading-animation')
    e.classList.toggle('displayFlex');
}
function statusLoading(text){
    const e = document.querySelector('.text-loading');
    e.innerHTML = text;
}
function updateElementById(elementId,{removeDisplayElement, addDisplayElement}){
    if(removeDisplayElement) elementId.classList.remove(removeDisplayElement);
    if(addDisplayElement) elementId.classList.add(addDisplayElement);
}
function toggleAlert(){
    const containerModal = document.querySelector('.containerModal');
    containerModal.classList.toggle('toggleTransform')
}
