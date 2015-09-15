<?php
namespace restApi;

class gallery extends restapi
{
  
    //zwraca listę wybranych losowo zdjęć z galerri prac dzieci lub z pozostałych, w zalęzności od wartości parametru
    public function getGalleryRandom($child_work)
    {
        $gal = new \utils\Gallery();
        $this->resultData = array('list' => $gal->funGetRandomfoto(4,$child_work));
        $this->resultCode = WS_RESULTCODE_OK;
    
        unset($gal);     
    
        return $this->resultData;
    }

    //zwraca listę nazw kategorii galerii
    public function getGalleryCategList($child_work)
    {
        $gal = new \utils\Gallery();
        $this->resultData = array('list' => $gal->funGetGalleryCategList($child_work));
        $this->resultCode = WS_RESULTCODE_OK;
    
        unset($gal);     
    
        return $this->resultData;
    }    

    //zwraca listę galerii z zadanej kategorii
    public function getGalleryList($id_categ)
    {
        $gal = new \utils\Gallery();
        $this->resultData = array('list' => $gal->funGetGalleryList($id_categ));
        $this->resultCode = WS_RESULTCODE_OK;
    
        unset($gal);     
    
        return $this->resultData;
    }      

    //zwraca listę zdjęć zadanej galerii
    public function getGalleryDetails($id_gal)
    {
        $gal = new \utils\Gallery();
        $this->resultData = array('list' => $gal->funGetGallery($id_gal),'name'=>$gal->funGetGalleryName($id_gal));
        $this->resultCode = WS_RESULTCODE_OK;
    
        unset($gal);     
    
        return $this->resultData;
    }       
    
}