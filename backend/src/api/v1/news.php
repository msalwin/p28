<?php
namespace restApi;

class news extends restapi
{
  public function getNews()
  {
    $news = new \utils\News();

    $this->resultData = array('list' => $news->getNews());
    $this->resultCode = WS_RESULTCODE_OK;
    
    unset($news);     
    
    return $this->resultData;
  }
}