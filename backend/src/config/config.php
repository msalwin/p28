<?php

function redefine($def,$val)
{
  if (!defined($def)) {
    define($def, $val);
  }
}


define('APPDIR', dirname(dirname(__FILE__)));
define('API_WWW_PATH','/p28/api/');
define('API_SRC',APPDIR.'/api/v1/');

date_default_timezone_set("Europe/Warsaw");

define('WS_RESULTCODE_OK', 'OK');
define('WS_RESULTCODE_FAIL', 'NOK');


// konfiguracja lokalna
if (is_file(APPDIR.'/config/define_local.php')){
  require_once('define_local.php');
}

// konfiguracja db
require_once('database.php');

