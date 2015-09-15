<?php
namespace utils;
/*
	Klasa odpowiada za obsluge polaczen z baza danych PostgreSQL
*/
class PgDB {
  var $link;
	/*
		Konstruktor zwraca identyfikator połączenia z bazą danych
	*/
	function __construct() {
	  $this->link = $this->connect(DBNAME,DBUSER,DBUSERPASS,DBHOST,DBPORT);
	  return 1;
	}

	
	/*
		Metoda odpowiada za nawiazanie polaczenia z baza danych
		zwraca identyfikator polaczenia
	*/
	function connect($db,$user,$pass,$server,$port) {
	  $conn_string = "host=$server port=$port dbname=$db user=$user password=$pass";
          
	  $link=pg_connect($conn_string);
	  return $link;
	}

	/*
		Metoda wykonuje zapytanie na serwerze baz danych
		$link - identyfikator polaczenia z baza
		$zapytanie - zapytanie do bazy danych
		funkcja zwraca identyfikator wyniku zapytania
	*/
	function query($sql) {
		return pg_query($this->link,$sql);
	}

	/*
		Metoda zwraca liczbe rekordow otrzymana w wyniku 
		wykonania zapytania do bazy danych
		%wynik - identyfikator wyniku zapytania
	*/
	function recordCount($res) {
		return pg_num_rows($res);
	}

	/*
		Metoda zwraca dane zwrocone w wyniku wywolania zapytania w
		postaci tablicy asocjacyjnej
		$wynik - identyfikator wyniku zapytania
	*/
	function getData($res) {
		return pg_fetch_assoc($res);
	}


	/*
		Funkcja zwalnia pamiec zajmowana przez wynik zapytania
	*/
	function free($res) {
		pg_free_result($res);
	}
	/*
		Funkcja zamyka polaczenie z baza danych 
		$link - identyfikator polaczenia z baza danych
	*/
	function disconnect() {
		pg_close($this->link);
	}

	/*
		Zwraca wskaźnik do bazy danych
	*/
	function getLink() {
		return $this->link;
	}

	/*
		Zwraca opis ostatnio napotkanego błędu
	*/
	function insert($data,$tbl) {
	  foreach ($data as $k=>$v) {
	    if ($k!='id') {
	      $cols.=$k.',';
	      if ($v=='')
		$vals.="null,";
	      else {
		if (ini_get('magic_quotes_gpc'))
		  $vals.="'".$v."',";
		else
		  $vals.="'".addslashes($v)."',";
	      }
	    }
	  }
	  $cols = substr($cols,0,strlen($cols)-1);
	  $vals = substr($vals,0,strlen($vals)-1);
	  $sql = "insert into ".$tbl." (".$cols.") values(".$vals.");";
	  //echo $sql;die();
	  return $this->sql($sql);
	}

	function update($data,$tbl,$where) {
	  $sql = "update ".$tbl." set ";
	  foreach ($data as $k=>$v) {
	    if ($k!='id') {
	      if ($v=='')
		$sql.= $k."=null,";
	      else {
		if (ini_get('magic_quotes_gpc'))
		  $sql.= $k."='".$v."',";
		else
		  $sql.= $k."='".addslashes($v)."',";
	      }
	    }
	  }
	  $sql = substr($sql,0,strlen($sql)-1);
	  if ($where !='') $sql.=" where ".$where;
	  //echo $sql;die();
	  return $this->sql($sql);
	}

	function delete($tbl,$where) {
	  $sql = "delete from ".$tbl;
	  //echo $sql;die();
	  if ($where !='') $sql.=" where ".$where;
	  else return -1;
	  return $this->sql($sql);
	}

	function getList($sql) {
	  $cnt=0;
	  $dane = array();
          $res = $this->query($sql);
	  while ($wiersz = $this->getData($res)) {
	    foreach ($wiersz as $k => $v) {
	      $dane[$cnt][$k]=$v;
	    }
	  $cnt++;
	 }
	 return $dane;
       }

	function row($sql) {
	  $res = $this->query($sql);
	  return $this->getData($res);
       }
	/*
		funkcja zwraca true lub false w zależności, czy połączenie do bazy jest nawiązane czy nie
	*/
	function isConnected() {
	   if ($this->link === FALSE )
	     return false;
	   else
	     return true;
	}

}

?>
