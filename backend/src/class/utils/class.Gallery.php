<?php
namespace utils;
/*
	Klasa odpowiada za obslugę Galerii 
*/

class Gallery {
    var $db;

    function __construct() {
        $this->db = New PgDB();
        return 7;
    }	   

    //Zwraca losowo wybraną liczbę zdjęć z galerii prac dzieci lub z pozostałych w zalezności od parametru $p_child_work
    function funGetRandomfoto($p_cnt, $p_child_work) {
        //sprawdź, czy jest zapisana liczba zdjęć do wyboru
        if (!isset($_SESSION['global']['liczba_zdjec_galeria_'.$p_child_work])) {
            $row = $this->db->row ('select count(*) as cnt from p28_galeria as g, p28_galeria_element as ge where g.aktywna=1 and g.prace_dzieci='.$p_child_work.' and g.id=ge.id_galeria');
            $_SESSION['global']['liczba_zdjec_galeria'] = $row['cnt'];
        }
        
        // wybierz losowo zadaną parametrem liczbę zdjęć
        $offset = rand(0,$_SESSION['global']['liczba_zdjec_galeria'] - $p_cnt);
        $sql = 'select row_number() over() - 1 - '.$offset.' as index,g.folder, ge.* from p28_galeria as g, p28_galeria_element as ge where g.aktywna=1 and g.prace_dzieci='.$p_child_work.' and g.id=ge.id_galeria offset '.$offset.' limit '.$p_cnt.';';
        return $this->db->getList($sql);
    }  
  
    //zwraca liste galerii w danej kategorii
    function funGetGalleryList($p_id_categ) {
        $sql = 'select * from p28_galeria where aktywna=1 and id_galeria_kateg='.$p_id_categ.' order by nazwa;';
        return $this->db->getList($sql);
    }

    // zwraca listę kategorii w grupie prace dzieci lub w pozostałych, w załeżności od wartości parametru 
    function funGetGalleryCategList($p_child_work) {
        $sql = 'select * from p28_galeria_kateg where prace_dzieci='.$p_child_work.' and aktywna=1 order by kolejnosc;';
        return $this->db->getList($sql);
    }

    //zwraca nazwę kategorii galerii
    function funGetGalleryCategName($id) {
        $sql = 'select nazwa from p28_galeria_kateg where id='.$id;
        $row = $this->db->row($sql);
        return $row['nazwa'];
    }

    //zwraca liste galerii dla prac dzieci
    function funGetChildWorkGallery() {
        $sql = 'select * from p28_galeria where prace_dzieci=1 and aktywna=1 order by nazwa;';
        return $this->db->getList($sql);
    }

    //zwraca dane galerii o określonym identyfikatorze
    function funGetGallery($id) {
        $sql = 'select row_number() over() as foto_nr,g.folder, ge.* from p28_galeria as g, p28_galeria_element as ge where g.id=ge.id_galeria and g.id='.$id.' order by dc desc;';
        return $this->db->getList($sql);
    }
  
    // zwraca nazwę galerii
    function funGetGalleryName($id) {
        $sql = 'select nazwa from p28_galeria where id='.$id;
        $row = $this->db->row($sql);
        return $row['nazwa'];
  }



}
?>





