<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    require_once '../../configs/database.php';
    require_once '../../models/posts.php';

 
    $data = json_decode(file_get_contents('php://input'));
    if(isset($data)){

        $db = new Database();
        $db = $db->connect();
    
        $post = new Posts($db);
        $post->title = $data->title;
        $post->body = $data->body;
        $post->author = $data->author;
        $post->date = $data->date;
    
        $result = $post->create();
    
        if($result){
            echo json_encode(['message'=>'success','result'=>$post->author]);
        }else{
            echo json_encode(['message'=>'failed','result'=>[]]);
        }

    }else{
        echo json_encode(['message'=>'failed','result'=>[]]);
    }







    