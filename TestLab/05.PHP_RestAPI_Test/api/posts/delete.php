<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  require_once '../../configs/database.php';
  require_once '../../models/posts.php';


    $data = json_decode(file_get_contents('php://input'));

    if(isset($data)){

        $db = new Database();
        $db = $db->connect();
        $posts = new Posts($db);

        $posts->id = $data->id;
        $result = $posts->delete();

        if($result){
            echo json_encode(['message'=>'success','result'=>$posts->id]);
        }else{
            echo json_encode(['message'=>'failed','result'=>[]]);
        }        
    }else{
        echo json_encode(['message'=>'failed','result'=>[]]);
    }



