<?php 

$conn = new PDO('mysql:host=localhost;dbname=dbnews','root','');

$stmt = $conn->prepare('SELECT * FROM posts');

$stmt->execute();
