<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  require_once '../../configs/database.php';
  require_once '../../models/posts.php';

  $data = json_decode(file_get_contents('php://input'));

  if(isset($data)){

    $db = new Database();
    $db = $db->connect();

    $post = new Posts($db);
    $post->id = $data->id;
    $post->title = $data->title;
    $post->body = $data->body;
    $post->author = $data->author;
    $post->date = $data->date;

    $result = $post->update();

    if($result){
        echo json_encode(['message'=>'success','result'=>'ok']);
    }else{
        echo json_encode(['message'=>'failed','result'=>'not ok']);
    }
  }else{
    echo json_encode(['message'=>'failed','result'=>'not ok']);
  }