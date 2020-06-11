class Orang{
    constructor(username,contact,email,salary){
        this.username=username;this.contact=contact;
        this.email=email;this.salary=salary;
    }
}
class Controller{
    static dataBase(){
        const dataOrang = !JSON.parse(localStorage.getItem('data'))?[]:JSON.parse(localStorage.getItem('data'));
        document.querySelector('.data-list').innerHTML='';
        dataOrang.forEach(orang=>{
            const row = document.createElement('tr').innerHTML = `<td>${orang.username}</td><td>${orang.contact}</td><td>${orang.email}</td><td>${orang.salary}</td><td><a href="#" class="btn-min bg-danger light-1">x</a></td>`;
            document.querySelector('.data-list').innerHTML += row;
        });
    }
    static tambahOrang(orang){
        const database = (!localStorage.getItem('data')?[]:JSON.parse(localStorage.getItem('data')));
        database.push(orang);
        localStorage.setItem('data',JSON.stringify(database));
    }
    static clearForm(){
        const username = document.getElementById('username');const email = document.getElementById('email');
        const contact = document.getElementById('contact');const salary = document.getElementById('salary');
        username.value='';contact.value='';email.value='';salary.value='';
        this.dataBase();
    }
}
document.addEventListener('DOMContentLoaded',Controller.dataBase);
const username = document.getElementById('username');const email = document.getElementById('email');
const contact = document.getElementById('contact');const salary = document.getElementById('salary');
const btnAdd = document.getElementById('btnAdd').addEventListener('click',(e)=>{
    e.preventDefault();
    if(username.value !== '' || salary.value !== ''){
        const orangBaru = new Orang(username.value,contact.value,email.value,salary.value);
        Controller.tambahOrang(orangBaru);
        Controller.clearForm();
    }
});
const btnDel = document.querySelector('.data-list');
btnDel.addEventListener('click',e=>{e.preventDefault;
    if(e.target.localName=='a'){
        if(confirm('Hapus data ini?')){console.log(e.target.parentElement.parentElement.remove());}
    }    
});



