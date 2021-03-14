class DataJson{static data = []}
const myFile = document.getElementById('myFile');
const tableList = document.querySelector('.tableList');
const tableHeader = document.querySelector('.tableHeader');
const myform = document.getElementById('myform');

myFile.addEventListener('change',(e)=>{
    const csvFile = myFile.files[0];
    const reader = new FileReader();
    reader.readAsText(csvFile)
    reader.onload = (e) => {
        const content = reader.result;
        const contentArray = content.split('\n');
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
    const apiUrl = 'https://script.google.com/macros/s/AKfycbzfW5OvTQtUVgn2gUFI7hAUvb6Y6eYF6SuCU6suOj2z69Na7S-8yDAQW5-0A-IEvqKv/exec';
    e.preventDefault();
    
    const raw = JSON.stringify({'data':DataJson.data});
    fetch(apiUrl,{method: 'POST',body: raw})
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
})
