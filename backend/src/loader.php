<?php
require_once('config/config.php');
require_once('api/restapi.php');
require_once('vendor/autoload.php');


function myautoloader($className)
{
  $parts = explode('\\', $className);
  //var_dump($parts); die();
  $possibilities = array(
    dirname(__FILE__) . '/class/'.$parts[0].'/'.'class.'.$parts[1].'.php'
  );

  foreach ($possibilities as $file) {
    if (file_exists($file)) {
      require_once $file;
      return true;
    }
  }
  return false;
}

spl_autoload_register('myautoloader');
