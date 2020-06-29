// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA_QR7w88u9RGN21kZ4FE_2LdO4Y0dsvuA",
    authDomain: "contactform-6bc57.firebaseapp.com",
    databaseURL: "https://contactform-6bc57.firebaseio.com",
    projectId: "contactform-6bc57",
    storageBucket: "contactform-6bc57.appspot.com",
    messagingSenderId: "380123086395",
    appId: "1:380123086395:web:a4d6b13264aa82136da61e",
    measurementId: "G-JMR8EEVQ10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Refrensi Firebase
let refrensi = firebase.database().ref('messages');









const tbody = document.querySelector('tbody');
let listItems = '';let no = 1;
const tableX = document.getElementById('main-table');
refrensi.on('value', function(todos){
    todos.forEach(function(todo){
        let todoItem = todo.val();
        listItems = `
            <td>${no++}</td>
            <td>${todoItem.username}</td>
            <td>${todoItem.contact}</td>
            <td>${todoItem.email}</td>
            <td>${todoItem.password}</td>
        `;
        let row = document.createElement('tr');
        row.innerHTML = listItems;
        tbody.appendChild(row);
    });
});














const submit = document.getElementById('submit').addEventListener('click',sendData);
function sendData(e){
    e.preventDefault();
    const username = inputVal('username');
    const contact = inputVal('contact');
    const email = inputVal('email');
    const password = inputVal('password');
    sendToFirebase(username,contact,email,password);
    document.getElementById('myform').reset();
}
function inputVal(input){
    return document.getElementById(input).value;
}
function sendToFirebase(username,contact,email,password){
    let myref = refrensi.push();
    myref.set({
        username: username,
        contact: contact,
        email: email,
        password: password
    });
}


















