<?php

class test extends restapi
{
  public function getTest($data)
  {
    $list = array();
    $list[] = array(
                    'name' => 'name',
                    'name2' => 'name2',
                );
      
    $this->resultData = array('list' => $list);
    $this->resultCode = WS_RESULTCODE_OK;
    return $this->resultData;
  }
}