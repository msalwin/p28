<?php
namespace utils;
/*
	Klasa odpowiada za obslugę aktualności
*/

class News {
  var $db;

  function __construct() {
    $this->db = New PgDB();
    return 7;
  }	   
  
  //zwraca wszystkie aktualności
  function getNews() {
    $sql = "select id,tytul,tresc,to_char(wr,'YYYY-MM-DD HH24:MI') as wr from p28_aktualnosci order by wr desc";
    return $this->db->getList($sql);
  }

}
?>




