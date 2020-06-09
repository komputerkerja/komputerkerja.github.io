const username = document.getElementById('username');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const salary = document.getElementById('salary');
const btnAdd = document.getElementById('btnAdd');
const datalist = document.querySelector('.data-list');

connectDb()

btnAdd.addEventListener('click',function(e){
    e.preventDefault();
});


function connectDb(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data/db.json',true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let data = JSON.parse(xhr.responseText);
            let list = "";
            for(let i = 0; i < data.length; i++){
                list += `<tr>
                            <td>${data[i]["username"]}</td>
                            <td>${data[i]["contact"]}</td>
                            <td>${data[i]["email"]}</td>
                            <td>${data[i]["salary"]}</td>
                            <td><a class="btn-min light-3 bg-danger" href="#">x</a></td>
                        </tr>`;
            }
            datalist.innerHTML = list;
        }
    }
    
}

    

