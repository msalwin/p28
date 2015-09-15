  function fun_potw(text) {
   if (window.confirm(text))
    return true;
   else return false;
  }

function fun_pokaz_zdjecie(nazwa,szer,wys) {
	left=Math.round((screen.width-szer)/2);
	t=Math.round((screen.height-wys)/2);
	config='left='+left+',top='+t+',width='+szer+',height='+wys+',innerheight='+wys+',innerwidth='+szer+',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no';
	stadion=window.open('','',config)
	stadion.document.write('<HTML><HEAD>');
	stadion.document.write('<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-2">');
	stadion.document.write('<TITLE>Zdjęcie</title>');
	stadion.document.write('<script language="javascript">');
	stadion.document.write('setTimeout(');
	stadion.document.write('"self.close()');
	stadion.document.write(';",70000)');stadion.document.write('</');
	stadion.document.write('script>');
	stadion.document.write('</HEAD>');
	stadion.document.write('<body bgcolor=white leftmargin=0 topmargin=0 marginheight=0 marginwidth=0>');
	stadion.document.write('<DIV align=center><a href=# onclick="javascript:self.close();"><img src='+nazwa+' border=0></A></DIV>');
	stadion.document.write('</body></html>');
	stadion.focus();
};



function fun_fld_check(fld,tryb,msg) {
  //wyrażenie na nazwę
  re_text=/^[\s\w\-_ążźćśęńłóŻŹĆĄŚĘÓŁŃ]+$/;
  re_text_null=/^[\s\w\-_ążźćśęńłóŻŹĆĄŚĘÓŁŃ]+$/;
  re_opis=/^[\s\w\-_ążźćśęńłóŻŹĆĄŚĘÓŁŃ\$\/.,\(\)\{\}\[\]<>\']+$/;
  re_opis_null=/^[\s\w\-_ążźćśęńłóŻŹĆĄŚĘÓŁŃ\$\/.,\(\)\{\}\[\]<>]*$/;
  re_int=/^[0-9]+$/;
  re_int_null=/^[0-9]*$/;
  re_telefon=/^[0-9\-]+$/;
  re_email=/^[0-9a-zA-Z\._\-]+@[0-9a-zA-Z\._\-]+$/;
  re_float=/^(([0-9]+\.[0-9]+)|([0-9]+,[0-9]+)|([0-9]+))$/;
  re_float_null=/^(([0-9]+\.[0-9]+)|([0-9]+,[0-9]+)|([0-9]*))$/;
  ok=true;
  val=fld.value;
  switch(tryb) {
    case 'text':
      if (!re_text.test(val)) ok=false;
      break;
    case 'text_null':
      if (!re_text_null.test(val))ok=false;
      break;
    case 'opis':
      if (!re_opis.test(val))ok=false;
      break;
    case 'opis_null':
      if (!re_opis_null.test(val))ok=false;
      break;
    case 'int':
      if (!re_int.test(val))ok=false;
      break;
    case 'int_null':
      if (!re_int_null.test(val))ok=false;
      break;
    case 'float':
      if (!re_float.test(val))ok=false;
      break;
    case 'float_null':
      if (!re_float_null.test(val))ok=false;
      break;
    case 'email':
      if (!re_email.test(val))ok=false;
      break;
    case 'telefon':
      if (!re_telefon.test(val))ok=false;
      break;
    case 'nie_puste':
      if (val=='') ok=false;
      break;
    case 'select_wybrany':
      if (fld.selectedIndex<1) ok=false;
      break;
    case 'plik_jpg':
      if (val.substr(val.length-4,4)!='.jpg' && val.length>0) ok=false;
      break;
    default:
     ok=false;
  }
  if (!ok) {
    alert(msg);
    if (tryb != 'select_wybrany')
      fld.select();
    fld.focus();
  }
  return ok;
}

