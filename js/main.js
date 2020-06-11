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




async function connectDb(){
    const xhr = await fetch('data/db.json').catch(err=>console.log(err));
    const result = await xhr.json();
    let list = '';
        result.forEach((e)=>{
            list += `<tr>
                <td>${e.username}</td>
                <td>${e.contact}</td>
                <td>${e.email}</td>
                <td>${e.salary}</td>
                <td><button class="btn btn-min bg-danger light-3">x</button></td>
            </tr>`
        });
    datalist.innerHTML=list;
}

    

