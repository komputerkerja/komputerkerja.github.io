<?php 
  // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    require_once '../../configs/database.php';
    require_once '../../models/posts.php';

    $db = new Database();
    $db = $db->connect();

    $posts = new Posts($db);

    $result = (isset($_GET['id'])) ? $posts->read($_GET['id']) : $posts->read();
  
    if($result->rowCount() > 0){
        $posts_array = [];
        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            $post_item = [
                'id'=>$row['id'],
                'title'=>$row['title'],
                'body'=>$row['body'],
                'author'=>$row['author'],
                'date'=>$row['date'],
            ];
            array_push($posts_array,$post_item);
        }
        echo json_encode(['message'=>'success','result'=>$posts_array]);
    }else{
        echo json_encode(['message'=>'failed','result'=>[]]);
    }


    
