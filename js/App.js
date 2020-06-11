class Orang{
    constructor(username,contact,email,salary){
        this.username=username;this.contact=contact;
        this.email=email;this.salary=salary;}}

class Controller{
    static dataBase(){
        const dataOrang = JSON.parse(localStorage.getItem('data'));
        dataOrang.forEach(orang=>{
            const row = document.createElement('tr').innerHTML = `<td>${orang.usernama}</td><td>${orang.contact}</td><td>${orang.email}</td><td>${orang.salary}</td><td><a href="#" class="btn-min bg-danger light-1">x</a></td>`;
            document.querySelector('.data-list').innerHTML += row;
        });
    }

    static tambahOrang(orang){
        const database = (!localStorage.getItem('data')?[]:JSON.parse(localStorage.getItem('data')));
        database.push(orang);
        localStorage.setItem('data',JSON.stringify(database));}}

document.addEventListener('DOMContentLoaded',Controller.dataBase);
const username = document.getElementById('username');const email = document.getElementById('email');
const contact = document.getElementById('contact');const salary = document.getElementById('salary');
const btnAdd = document.getElementById('btnAdd').addEventListener('click',(e)=>{
    e.preventDefault();
    if(username.value !== '' || salary.value !== ''){
        const orangBaru = new Orang(username.value,contact.value,email.value,salary.value);
        Controller.tambahOrang(orangBaru);}});




