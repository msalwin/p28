<?php

require_once('../../loader.php');
$app = new \Slim\Slim();
session_start();

//Sprawdzenie, czy jest dostęp do usługi
function checkAuth()
{
    return 7;
}


$app->map(
  API_WWW_PATH.':controler/:method(/:id)',
  function ($controler, $method, $id = null) use ($app) {
    
    try {
        $status = checkAuth();
        if ($status != 7) {
            $app->response()->status($status);
        }   
        else { 
           
            require_once(API_SRC.strtolower($controler) . '.php');
            $data = json_decode($app->request->getBody());
            $controler = 'restApi\\'.$controler;

            $c = new $controler();
            $method = $app->request->getMethod() . $method;
            if (in_array($app->request->getMethod(), array('GET', 'DELETE'))) {
                $c->$method($id);
            } else {
                $c->$method($data);
            }
            if ($c->responseHTTPCode === 200) {
                if ($c->message === null) {
                    $apiResult = array('status' => $c->resultCode, 'content' => $c->resultData);
                    //$apiResult = $c->resultData;
                } else {
                    $apiResult = array('status' => $c->resultCode, 'content' => $c->resultData, 'message' => $c->message);
                }
                $response = $app->response();
                $response['Content-Type'] = 'application/json';
                $response->write(json_encode($apiResult));
            } else {
                $response = $app->response();
                $response->setStatus($c->responseHTTPCode);
                $response['Content-Type'] = 'application/json';
                $apiResult = array('status' => $c->resultCode, 'message' => $c->message);
                $response->write(json_encode($apiResult));
            }
       }
    } catch (\Exception $e) {
      $app->halt(500, $e->getMessage());
    }
  }
)->via('POST', 'GET', 'PUT', 'DELETE');

$app->run();
